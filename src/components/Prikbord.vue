<script setup lang="ts">
import { Transition, ref, watch } from 'vue';
import Lightbox from './Lightbox.vue';
import Button from './Button.vue';

const lightboximage = ref();
const showMenu = ref(false);

const showLightbox = (src) => {

    lightboximage.value = "";

    setTimeout(function () {
        lightboximage.value = src;
    }, 10)
}


</script>

<template>
    <Lightbox :src="lightboximage" />

    <a class="button" @click="showMenu = true">
        open prikbord
    </a>

    <Transition name="down">
        <nav class="menu menu--prikbord" v-if="showMenu">
            <a class="button menu__close" @click="showMenu = false">back</a>
            <div class="grid">
                <div class="frame cell cell--w-3 cell--h-2 menu__frame">
                    <img class="frame__asset fn-lightbox" src="/src/assets/images/chapter_2/menu/photo_1.png" alt=""
                        @click="showLightbox('/src/assets/images/chapter_2/menu/photo_1.png')">
                </div>
                <div class="frame cell cell--w-3 menu__frame">
                    <img class="frame__asset fn-lightbox"
                        lightbox-src="/src/assets/images/chapter_2/menu/letter_expanded.png"
                        src="/src/assets/images/chapter_2/menu/letter.png" alt=""
                        @click="showLightbox('/src/assets/images/chapter_2/menu/letter_expanded.png')">
                </div>
                <div class="frame cell cell--w-3 menu__frame">
                    <img class="frame__asset fn-lightbox" src="/src/assets/images/chapter_2/menu/photo_2.png" alt=""
                        @click="showLightbox('/src/assets/images/chapter_2/menu/photo_2.png')">
                </div>
            </div>
        </nav>
    </Transition>
    <Transition>
        <div class="lightbox" v-if="src && shown" @click="shown = false">
            <img :src="src" class="lightbox__img fn-lightbox-img" alt="">
        </div>
    </Transition>
</template>

<style scoped></style>