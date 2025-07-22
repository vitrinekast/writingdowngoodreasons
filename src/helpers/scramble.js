import { randBetween } from "./utils"

const scramble = {
  mounted: (el) => {
    let bak = el.textContent.trim()
    el.textContent = ""
    bak.split(" ").forEach((w) => {
      const sp = document.createElement("span")
      sp.textContent = w + " ";
      el.appendChild(sp)
      sp.style.transform = `translate3d(0px, ${randBetween(-2, 1)}px, 0) rotate(${randBetween(-4,1)}deg)`
      sp.style.display = "inline-block";
      sp.style.paddingRight = ".5ch";

    })


  }

}

export default scramble;
