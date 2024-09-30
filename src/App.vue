<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { usePreloadStore } from './store/preload';
usePreloadStore
const router = useRouter();
const route = useRoute();
const currentAudio = ref(null);

const preloadStore = usePreloadStore();
preloadStore.checkProgress();
onMounted(() => {
  // currentAudio.value = router.currentRoute.value.name.replace(" ", "_").toLowerCase();



})
</script>

<template>


  <header>
    <!-- <audio src="/src/assets/audio/bg/bg__intro.m4a" autoplay loop></audio> -->
  </header>

  <transition name="fade" duration="200">



    <div class="preloader" v-if="!preloadStore.loaded">
      <!-- Add custom loader (spinner, progress bar, etc.) -->
      <p>loading... {{ Math.round(preloadStore.progress * 100) }}%</p>
      <input type="range" min="0" max="1" :value="preloadStore.progress">
    </div>
  </transition>
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

.preloader {
  position: fixed;
  background-color: #9bc0c1;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>