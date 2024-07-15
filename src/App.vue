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
    <router-link to="/">start</router-link>
    <router-link to="/chapter-1">chapter 1</router-link>
    <router-link to="/chapter-2">chapter 2</router-link>
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