<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import AudioPlayer from './AudioPlayer.vue';
import Lightbox from './Lightbox.vue';
import { useAudioStore } from '../store/audio';
import { audioBus } from '../helpers/eventBus';

const emit = defineEmits(['close']);

const lbImage = ref();
const cursor = ref();
const progress = ref([]);
const topElement = ref(3);
const menuModel = defineModel()
const folder = "/src/assets/images/ch-1-p-2_menu";

const audio = useAudioStore();

const mousePos = reactive({
    top: 0,
    left: 0,
    startX: 0,
    startY: 0
})

const openImage = (src) => {
    if (progress.value.indexOf(src) == -1) {
        progress.value.push(src);
    }

    lbImage.value = src;
}

const onLBClose = () => {
    if (progress.value.length >= 3) {
        closeMenu();
    }
}
const closeMenu = () => {
    menuModel.value = false
    emit('close');
}


onMounted(() => {
    setCursorPos(cursor.value);
})

const setCursorPos = (el) => {
    if (el) {
        const c = el.getBoundingClientRect();
        mousePos.w = c.width;
        mousePos.startX = c.left
        mousePos.startY = c.top
    }
}

const onClick = (sample, image, index) => {
    audioBus.emit('playSample', sample);
    openImage(`${folder}/${image}`);
    topElement.value = index;
}

const onMouseMove = (e) => {
    mousePos.transform = `translate(${e.clientX - mousePos.startX - (mousePos.w / 2)}px, ${e.clientY - mousePos.startY - (mousePos.w / 2)}px)`;
}


</script>

<template>
    <div class="menu__cursor" :style="mousePos" ref="cursor" v-if="menuModel"></div>

    <Lightbox @mousemove="onMouseMove" v-model="lbImage" @close="onLBClose" />

    <Transition name="fade">
        <div class="menu__backdrop" v-if="menuModel"></div>
    </Transition>

    <Transition name="prikbord" :duration="5500">
        <nav class="menu menu--prikbord" v-if="menuModel" @mousemove="onMouseMove">

            <div class="menu__frame" :style="{ 'z-index': (topElement === 1 ? 10 : 2) }">
                <img class="frame__asset--contain" :src="`${folder}/photo_1.webp`" alt=""
                    @click="onClick('audio__plants-move', 'photo_1.webp', 1)">
            </div>
            <div class="menu__frame" :style="{ 'z-index': (topElement === 2 ? 10 : 2) }">
                <img class="frame__asset--contain" :lightbox-src="`${folder}/letter_expanded.webp`"
                    :src="`${folder}/letter.webp`" alt=""
                    @click="onClick('audio__page-flip', 'letter_expanded.webp', 2)">
            </div>
            <div class="menu__frame" :style="{ 'z-index': (topElement === 3 ? 10 : 2) }">
                <img class="frame__asset--contain" :src="`${folder}/photo_2.webp`" alt=""
                    @click="onClick('audio__car-start', 'photo_2.webp', 3)">
            </div>

            <div class="menu__frame static">
                <img class="frame__asset--contain" :src="`${folder}/sticker.webp`" alt="">
            </div>

            <div class="menu__frame static">
                <img class="frame__asset--contain" :src="`${folder}/todolist.webp`" alt="">
            </div>
        </nav>

    </Transition>

    <Transition name="prikbord-meter" :duration="5500" v-if="menuModel">
        <div class="menu__meter progress">
            <li v-for="(item, index) in new Array(4)" class="progress__inner" :step="index" :active="progress.length === index">
            </li>
        </div>
    </Transition>
</template>