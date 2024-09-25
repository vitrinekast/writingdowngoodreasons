<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';

const props = defineProps({
  sample: { type: String, required: false }
})

const audioObj = ref();
const audioEnabled = ref(false);

watchEffect(() => {
  if (audioEnabled.value && audioObj.value) {
    audioObj.value.play();
  } else if (audioObj.value) {
    audioObj.value.pause();
  }
})

const audioSrc = computed(() => {

  return props.sample ? import(`@/assets/audio/${props.sample}.mp3`).then(audioSrc => {
    if (audioObj.value) {
      audioObj.value.pause();
    }
    audioObj.value = new Audio(audioSrc.default);
    audioObj.value.pause();
    audioObj.value.play();
  }) : false
});

</script>

<template>
  
  <span class="wrapper">{{ audioSrc }}</span>
  <button class="button--icon" @click="audioEnabled = !audioEnabled;">

    <svg v-if="audioEnabled" viewBox="0 0 24 24" class="icon" stroke="currentColor" stroke-width="2" fill="none"
      stroke-linecap="round" stroke-linejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    </svg>
    <svg v-if="!audioEnabled" viewBox="0 0 24 24" class="icon" stroke="currentColor" stroke-width="2" fill="none"
      stroke-linecap="round" stroke-linejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <line x1="23" y1="9" x2="17" y2="15"></line>
      <line x1="17" y1="9" x2="23" y2="15"></line>
    </svg>
  </button>

</template>

<style scoped>
.wrapper {
  display: none;
}

.button--icon {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: white;
  outline: none;
  color: blue;
  border: none;
  cursor: pointer;
}

.icon {
  width: 1rem;
  height: 1rem;
}
</style>
