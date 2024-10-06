<script setup>
import ice1 from '@assets/gui/ice--1.webp';
import ice2 from '@assets/gui/ice--2.webp';
import ice3 from '@assets/gui/ice--3.webp';
import { onMounted, ref } from 'vue';
import { bus } from '../helpers/eventBus';
import { useAudioStore } from '../store/audio';

const allImages = [ice1, ice2, ice3];
const audio = useAudioStore();
const images = ref([]);
const count = ref(0);
let timeout = false;
const wiggle = ref(false);

const onClick = (e) => {
    if (count.value > 2) return false;

    wiggle.value = true;
    count.value++;
    audio.play("bbc_ice--" + (Math.floor(Math.random() * 4) + 1));

    if (timeout) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
        wiggle.value = false;
    }, 250)

    bus.emit('particles', { x: e.clientX, y: e.clientY })
    
}
onMounted(() => {
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    images.value = shuffled;
});
</script>

<template>
    <div class="frame__overlay" @click="onClick">
        <img v-for="(image, index) in images" :key="index" :src="image"
            :class="`frame__ice ${wiggle ? 'wiggle' : ''} ${count > index ? 'frame__ice--broken' : ''}`"
            :style="{ opacity: count > index ? 0 : .85, transition: 'opacity .3s cubic-bezier(0.25, 0, 0, 1)' }" />
    </div>
</template>

<style>
@keyframes wiggle {

    0%,
    100% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(.7deg) scale(1.005);
    }

    50% {
        transform: rotate(-0.5deg);
    }

    75% {
        transform: rotate(.3deg);
    }
}

.frame:has(.wiggle) {
    animation: wiggle .25s ease-in infinite;
}
</style>