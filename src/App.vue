<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const currentAudio = ref(null);

onMounted(() => {
  currentAudio.value = router.currentRoute.value.name.replace(" ", "_").toLowerCase();
  console.log(currentAudio.value)
})
</script>

<template>
  <header>
    <audio src="/src/assets/audio/bg/bg__intro.m4a" autoplay loop></audio>
  </header>
  <router-view></router-view>

</template>

<style scoped>
.nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: fixed;
}
</style>
