<script setup>
import Page from "@/components/Page.vue";
import Prikbord from "@/components/Prikbord.vue";
import { onMounted, ref, watchEffect } from "vue";

const target = ref(null)
const revealables = ref([]);


// TODO: turn this into a directive
onMounted(() => {
    window.addEventListener("scroll", onScroll)


})

const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

watchEffect(() => {
    revealables.value.forEach((r) => {
        r.revealFrom = parseFloat(r.getAttribute("reveal-from"))
    })
})

var getVisiblePercent = function (el) {
    var rect = el.getBoundingClientRect();
    return (window.innerHeight - rect.top) / ((window.innerHeight + rect.height) / 1);
}

const onScroll = (e) => {

    revealables.value.forEach((el) => {
        const visibility = getVisiblePercent(el);
        if (visibility > 0 && visibility < 1) {
            // find revealables that are not yet revealed but should be
            if (!el.isRevealed && el.revealFrom < visibility) {
                el.isRevealed = true;
                el.setAttribute("visible", true);
            }
        }
    })
    // TODO: cleanup the revealables once revealed
}

</script>

<template>
    <main>

        <Prikbord></Prikbord>


        <Page class="page--fullwidth" @click="toggleFullScreen">
            <div class="frame frame--scroller fn-reveal-container" ref="target">
                <img class="frame__asset" src="/src/assets/images/chapter_2/frame_1/asset.png" alt="">

                <img class="frame__element frame__revealable" :ref="(el) => { revealables.push(el) }" reveal-from=".4"
                    src="/src/assets/images/chapter_2/frame_1/element--feet.png" alt="">
            </div>
        </Page>
    </main>
</template>

<style scoped>
.frame__revealable {
    opacity: 0;
    transition: .2s linear;
}

.frame__revealable[visible="true"] {
    opacity: 1;
}
</style>
