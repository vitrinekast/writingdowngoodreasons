<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AudioPlayer from './components/AudioPlayer.vue';

const router = useRouter();
const route = useRoute();

</script>

<template>

  <header>

    <AudioPlayer />

  </header>

  <router-view v-slot="{ Component }">
    <transition :name="route.meta.transition || ''">
      <component :is="Component" />
    </transition>
  </router-view>


</template>

<style lang="scss">
.nav {
  position: fixed;
  z-index: 999;
  display: flex;
  gap: 1rem;
  padding: 4px;
}


</style>