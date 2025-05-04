<script setup>
import Page from "@/components/Page.vue";
import {
  onMounted,
  onUnmounted,
  ref
} from "vue";
import { mapNumRange, randBetween } from "@/helpers/utils";

const posX = ref("0%");
const posY = ref("180px");
const rotate = ref("0deg");

const updateCarPos = () => {
  posY.value = randBetween(175, 185) + "px";
  posX.value = randBetween(-3, 3) + "%";
  rotate.value = randBetween(-3, 3) + "deg";
}

onMounted(() => {
  window.setInterval(updateCarPos, 500);
});

onUnmounted(() => {
  window.removeInterval(updateCarPos);
});

</script>

<template>
<main>
  <Page type="fixed" :style="`--posX: ${posX}; --posY: ${posY}; --rotate: ${rotate}`">

    <img class="frame__asset frame__background" src="@assets/ch-2/driving/forestscape_driving.webp" alt="" />
    <div class="overlay"></div>
    <div class="van__wrapper">
      <img class="frame__asset frame__van"  src="@assets/ch-2/driving/van.webp" alt="" />
    </div>
    <img class="frame__asset frame__dashboard" src="@assets/ch-2/driving/dashboard.webp" alt="" />
  </Page>

</main>
</template>
<!-- TODO: make the animation actually loop infinitely -->
<style>
:root {
  --posY: 180px;
  --posX: 0%;
}

.frame__background {
  height: 50%;
  max-height: 400px;
  top: 0%;
  object-position: 0%;
  width: auto;
  animation: landscape 100s linear;
  animation-iteration-count: infinite;
  transform: rotateX(-9deg) rotateY(47deg) rotateZ(-11deg);
  max-width: 500%;
  width: 200%;
  left: -30%;
}
.overlay {
  position: absolute;
  top: -4rem;
  height: calc(100% + 8rem);
  left: 0;
  width: 100%;
 z-index: 1;
 backdrop-filter: blur(3px);
 mask: linear-gradient(   to right,   rgba(0, 0, 0, 0) 0%,   rgba(0, 0, 0, 0) 50%,   rgba(0, 0, 0, 1) 82.5% );
}
.van__wrapper {
  transform: translate3d(100px, 10px, 0);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: van_enter 50s;
}

.frame__van {
  height: 100px;
  max-width: 50%;
  object-fit: contain;
  transform: translate3d(var(--posX), var(--posY), 0) rotate(var(--rotate));
  transition: .85s ease-out;
}

.frame__dashboard {
  bottom: calc(-2rem - env(safe-area-inset-top, 20px) - 10px) ;
  position: absolute;
  width: 100%;
  object-fit: contain;
  z-index: 1;
  object-position: bottom;
  transform: rotateX(1deg) rotateY(-4deg) rotateZ(1deg) scale(1.25);
}


.container {
  perspective: 1500px;
}

@keyframes van_enter {
  0% {
    transform: translate3d(-200%, 0%, 0);
  }

  15%, 75% {
    transform: translate3d(0%, 0%, 0);
  }

  100% {
    transform: translate3d(200%, 0%, 0);
  }
}

@keyframes landscape {
  0% {
    object-position: 0%;
  }

  100% {
    object-position: 100%;
  }
}
</style>
