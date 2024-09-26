<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import AudioPlayer from './AudioPlayer.vue';
import Lightbox from './Lightbox.vue';

const lbImage = ref();
const showMenu = ref(true);
const sample = ref();
const cursor = ref();
const progress = ref([]);

const meterValue = computed(() => {
    return progress.value.length > 0 ? (1 / 3) * progress.value.length : 0;
})

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

const onClose = () => {
    console.log(progress.value.length)
    if (progress.value.length >= 3) {
        showMenu.value = false
    }
}

onMounted(() => {
    console.log("mount", cursor.value);
    setCursorPos(cursor.value);
})

const setCursorPos = (el) => {
    const c = el.getBoundingClientRect();
    mousePos.w = c.width;
    mousePos.startX = c.left
    mousePos.startY = c.top
}

const onMouseMove = (e) => {
    mousePos.transform = `translate(${e.clientX - mousePos.startX - (mousePos.w / 2)}px, ${e.clientY - mousePos.startY - (mousePos.w / 2)}px)`;
}

</script>

<template>
    <div class="menu__cursor" :style="mousePos" ref="cursor" v-if="showMenu"></div>

    <Lightbox @mousemove="onMouseMove" v-model="lbImage" @close="onClose" />

    <AudioPlayer :sample="sample" />

    <Transition name="fade">
        <div class="menu__backdrop" v-if="showMenu"></div>
    </Transition>

    <Transition name="prikbord" :duration="5500">
        <nav class="menu menu--prikbord" v-if="showMenu" @mousemove="onMouseMove">


            <div class="menu__frame">
                <img class="frame__asset--contain fn-lightbox" src="/src/assets/images/ch-1-p-2_menu/photo_1.png"
                    alt="" @mouseover="sample = 'audio__plants-move'"
                    @click="openImage('/src/assets/images/ch-1-p-2_menu/photo_1.png')">
            </div>
            <div class="menu__frame">
                <img class="frame__asset--contain fn-lightbox"
                    lightbox-src="/src/assets/images/ch-1-p-2_menu/letter_expanded.png"
                    src="/src/assets/images/ch-1-p-2_menu/letter.png" alt="" @mouseover="sample = 'audio__page-flip'"
                    @click="openImage('/src/assets/images/ch-1-p-2_menu/letter_expanded.png')">
            </div>
            <div class="menu__frame">
                <img class="frame__asset--contain fn-lightbox" src="/src/assets/images/ch-1-p-2_menu/photo_2.png"
                    alt="" @mouseover="sample = 'audio__car-start'"
                    @click="openImage('/src/assets/images/ch-1-p-2_menu/photo_2.png')">
            </div>

            <meter class="menu__meter" :value="meterValue" @click="showMenu.value = false"></meter>
        </nav>


    </Transition>

</template>