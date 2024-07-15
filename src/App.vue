<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const currentAudio = ref(null);

onMounted(() => {
  currentAudio.value = router.currentRoute.value.name.replace(" ", "_").toLowerCase();
  console.log(currentAudio.value)
})
</script>

<template>
  <nav class="nav">
    <router-link to="/chapter-1">chapter 1</router-link>
    <router-link to="/chapter-2">chapter 2</router-link>
    <router-link to="/test">test</router-link>
    <router-link to="/">start</router-link>
    <router-link to="/test1">test 1</router-link>
    <router-link to="/test2">test 2</router-link>
  </nav>

  <header>
    <audio src="/src/assets/audio/bg/bg__intro.m4a" autoplay loop></audio>
  </header>


  <router-view v-slot="{ Component }">
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>


</template>

<style lang="scss">
.nav {
  position: fixed;
  z-index: 2;
  display: flex;
  gap: 1rem;
  padding: 4px;
}

</style>
<!-- 
<style lang="scss">



.slither-enter-active,
.slither-leave-active {
  transition: transform 10s;
  border: 2px solid purple;

}

.slither-enter-from,
.slither-leave-to {
  border-color: orange;
  opacity: 1;


  .intro {
    transform: rotateX(10deg) rotateY(10deg) rotateZ(1deg) scale(1.2) !important;
    --scale: .8;

    // all the zero opacities
    .frame__button,
    .frame__outline,
    .intro__text--middle,
    .intro__text--bottom,
    .frame__background {
      opacity: 0;
    }

    .frame__button {
      transform: translate3d(0, 10px, 100px);
    }

    .frame__outline {
      filter: blur(1px);
    }

    .intro__text {
      transform: translateZ(100px) scale(var(--scale)) translateY(150px) rotateX(12deg);
      z-index: -1;
    }

    .frame__background {
      transform: scale(1.1) translateZ(100px);
    }
  }
}

.slither-enter-active {
  opacity: 0;
  transition: opacity 2s;
  transition-delay: 5s;
}

.slither-enter-to,
.slither-leave {
  border-color: blue;
  opacity: 1;

  .intro__text {
    border: 2px solid blue;
  }
}

.nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: fixed;
}
</style> -->
