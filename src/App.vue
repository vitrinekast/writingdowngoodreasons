<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AudioPlayer from './components/AudioPlayer.vue';
import ParticleContainer from './components/ParticleContainer.vue';

const router = useRouter();
const route = useRoute();
const routerTransition = ref("page");

router.beforeEach((to, from) => {
  if (from.meta.order < to.meta.order) {
    routerTransition.value = "page";
  } else {
    routerTransition.value = "page-back"
  }

})

</script>

<template>

  <header>

    <AudioPlayer />

  </header>
  <div class="nav">
    {{ route.meta.transition }}
  </div>
  <router-view v-slot="{ Component }">
    <transition :name="routerTransition" :page-name="route.name" :duration="routerTransition === 'page' ? 12000 : 3000">
      <component :is="Component" />
    </transition>
  </router-view>
  <ParticleContainer />

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