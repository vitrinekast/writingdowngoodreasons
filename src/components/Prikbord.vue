<script setup lang="ts">
import { Transition, ref, reactive, onMounted, computed } from 'vue';
import AudioPlayer from './AudioPlayer.vue';

const lightboximage = ref();
const showMenu = ref(true);
const sample = ref();
const cursor = ref();
const prikProgress = ref([]);

const meterValue = computed(() => {
    const part = 1 / 3;
    console.log("ja hoor");
    return prikProgress.value.length > 0 ? part * prikProgress.value.length : 0;
})

const mousePos = reactive({
    top: 0,
    left: 0,
    startX: 0,
    startY: 0
})

const showLightbox = (src) => {
    if (prikProgress.value.indexOf(src) == -1) {
        prikProgress.value.push(src);
    } 
    
    lightboximage.value = src;
}

const hideLightbox = () => {
    lightboximage.value = false;
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
   
    <Transition>
        <div class="lightbox" v-if="lightboximage" @mousemove="onMouseMove">

            <img :src="lightboximage" class="lightbox__img fn-lightbox-img" alt="">
            <a class="button lightbox__close" @click="hideLightbox">
                sluit
            </a>

        </div>
    </Transition>

    <AudioPlayer :sample="sample" />

    <Transition name="fade">
        <div class="menu__backdrop" v-if="showMenu"></div>
    </Transition>
 


    <Transition name="prikbord" :duration="5500">
        <nav class="menu menu--prikbord" v-if="showMenu" @mousemove="onMouseMove">


            <div class="menu__frame">
                <img class="frame__asset--contain fn-lightbox" src="/src/assets/images/chapter_2/menu/photo_1.png"
                    alt="" @mouseover="sample = 'audio__plants-move'"
                    @click="showLightbox('/src/assets/images/chapter_2/menu/photo_1.png')">
            </div>
            <div class=" menu__frame">
                <img class="frame__asset--contain fn-lightbox"
                    lightbox-src="/src/assets/images/chapter_2/menu/letter_expanded.png"
                    src="/src/assets/images/chapter_2/menu/letter.png" alt="" @mouseover="sample = 'audio__page-flip'"
                    @click="showLightbox('/src/assets/images/chapter_2/menu/letter_expanded.png')">
            </div>
            <div class=" menu__frame">
                <img class="frame__asset--contain fn-lightbox" src="/src/assets/images/chapter_2/menu/photo_2.png"
                    alt="" @mouseover="sample = 'audio__car-start'"
                    @click="showLightbox('/src/assets/images/chapter_2/menu/photo_2.png')">
            </div>

            <meter class="menu__meter" :value="meterValue" @click="showMenu = false">60%</meter>
        </nav>


    </Transition>

</template>