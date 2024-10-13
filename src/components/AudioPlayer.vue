<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useAudioStore } from '@/store/audio';
import { bus } from '@/helpers/eventBus';

const audio = useAudioStore();
const sample = ref();
const background = ref();
const backgroundSample = ref();

onMounted(() => {
  canPlayAudio().then((isPlayable) => {
    if (!isPlayable && !audio.muted) {
      audio.toggle();
    }
  });
})

function canPlayAudio() {
  const audio = document.createElement('audio');

  // You can set a valid audio source
  audio.src = 'data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAAABmYWN0BAAAAAAAAABkYXRhAAAAAA=='; // short data URI for testing

  return new Promise((resolve) => {
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        resolve(true);
      }).catch((error) => {
        console.info('Audio autoplay is blocked:', error);
        resolve(false);
      });
    } else {
      resolve(false);
    }
  });
}


bus.on('playSample', (name) => {
  if (audio.muted) return false;

  import(`@/assets/audio/${name}.mp3`).then((src) => {
    if (sample.value) {
      sample.value.pause();
    }

    sample.value = new Audio(src.default);
    sample.value.pause();
    sample.value.play();
    sample.value.onended = () => {
      // audio.play(false);
    }
  })
})

bus.on('playBackground', (name) => {
  backgroundSample.value = name;

  if (audio.muted) {
    return false
  };

  playBackground();
})

const playBackground = () => {
  import(`@/assets/audio/${backgroundSample.value}.mp3`).then((src) => {
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
  if (state.muted) {
    if (sample.value) {
      sample.value.pause();
    }
    if (background.value) {
      background.value.pause();
    }
  } else {
    playBackground();
  }
}

audio.$subscribe((mutation, state) => {
  parseMutedState(state);

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
