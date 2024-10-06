<script setup lang="ts">
import { ref } from 'vue';
import { useAudioStore } from '../store/audio';

const audio = useAudioStore();
const sample = ref();
const background = ref();

const playSample = (name) => {
  if (audio.muted || !name) return false;
  import(`@/assets/audio/${name}.mp3`).then((src) => {
    console.log("load and play");
    if (sample.value) {
      sample.value.pause();
    }
    sample.value = new Audio(src.default);
    sample.value.pause();
    sample.value.play();
    sample.value.onended = () => {
      audio.play(false);
    }
  })
}

const playBackground = (name) => {
  if (audio.muted || !name) return false;
  import(`@/assets/audio/bg/${name}.mp3`).then((src) => {
    if (background.value) {
      background.value.pause();
    }
    background.value = new Audio(src.default);
    background.value.pause();
    background.value.loop = true;
    background.value.play();
    background.value.volume = 0.8;
  })
}

const parseMutedState = (state) => {
  console.log(state);
  if (state.muted) {
    if (sample.value) {
      sample.value.pause();
    }
    if (background.value) {
      background.value.pause();
    }
  } else {
    playBackground(state.background);
  }
}

audio.$subscribe((mutation, state) => {
  switch (mutation.events.key) {
    case 'sample':
      playSample(state.sample);
      break;
    case 'background':
      playBackground(state.background);
      break;
    case 'muted':
      parseMutedState(state);
      break;
    default:
      parseMutedState(state);
      console.info("couldnt figure out this audio event: ", state, mutation, state.muted);
  }

}, { detached: false })

</script>

<template>
  <nav class="nav--audio">
    <button class="button--audio" :class="audio.muted ? 'off' : 'on'" @click="audio.toggle"></button>
  </nav>
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
