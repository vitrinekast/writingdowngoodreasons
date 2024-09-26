var lightbox = (function () {
    var imgEl;

    var init = function () {
        imgEl = document.querySelector(".fn-lightbox-img");

        document.querySelectorAll(".fn-lightbox").forEach((el) => {
            el.addEventListener("click", () => {
                console.log("clickie", el, el.getAttribute("lightbox-src"));
                var src = el.getAttribute("lightbox-src") ? el.getAttribute("lightbox-src") : el.src;
                open(src);
            })
        });
    }

    var open = function (src) {
        document.body.setAttribute("lightbox", "open");
        imgEl.src = src;
        var rotation = (Math.floor(Math.random() * 12)) - 6;
        console.log("rotating?")
        imgEl.style.transform = "rotate(" + rotation + "deg)";
    }

    var close = function () {
        document.body.setAttribute("lightbox", "close");
    }

    return {
        init: init
    }
})();

var scrollController = (function () {
    var observables = [];

    var init = function () {
        console.log("doing the scrollcontroller");
        var containers = document.querySelectorAll(".fn-reveal-container");

        if (!containers.length) return false;

        containers.forEach((container) => {
            var revealables = [];
            container.querySelectorAll(".fn-reveal-element").forEach((el) => {
                revealables.push({
                    el: el,
                    position: parseFloat(el.getAttribute("reveal-position")),
                    isRevealed: false
                })
            })

            observables.push({
                container: container,
                revealables: revealables
            })
        })

        window.addEventListener("scroll", onScroll)
    }

    var isInView = function (el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
        );
    }

    var getVisiblePercent = function (el) {
        var rect = el.getBoundingClientRect();
        return (window.innerHeight - rect.top) / ((window.innerHeight + rect.height) / 1);
    }

    var onScroll = function () {
        console.log("did a scroll");

        observables.forEach((observable) => {
            observable.visibility = getVisiblePercent(observable.container);
            if (observable.visibility > 0 && observable.visibility < 1) {
                console.log("in the viewport", observable);

                // find revealables that are not yet revealed but should be
                observable.revealables.filter(r => !r.isRevealed && r.position < observable.visibility).forEach((revealable) => {
                    revealable.isRevealed = true;
                    revealable.el.setAttribute("shown", true);
                })


            }
        })
    }


    return {
        init: init
    }

})();



window.addEventListener("DOMContentLoaded", function () {
    console.log("loaded")
    window.setTimeout(() => {
        document.querySelector('.frame').classList.add("in-view");
    }, 1000)
    scrollController.init();
    lightbox.init();


})