<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { bus } from '../helpers/eventBus';
import Lightbox from './Lightbox.vue';
import PrikbordItem from './PrikbordItem.vue';

const lbImage = ref();
const cursor = ref();
const progress = ref([]);
const topElement = ref(3);
const menuModel = defineModel()
const folder = "/src/assets/images/ch-1-p-2_menu";

const mousePos = reactive({
    top: 0,
    left: 0,
    startX: 0,
    startY: 0
})

const closeMenu = () => {
    menuModel.value = false
    bus.emit("closePrikbord");
}

bus.on("lightboxclose", (name) => {
    if (progress.value.indexOf(name.value) == -1) {
        progress.value.push(name.value);
    }

    if (progress.value.length === 3) {
        console.log("its hree");
        setTimeout(() => {
            progress.value.push("emptyness");
        }, 500)
    }
});

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

const onClick = (item, index) => {
    bus.emit('playSample', item.sample);

    lbImage.value = `${folder}/${item.lightbox ? item.lightbox : item.src}.webp`;

    bus.emit("showLightbox", {
        src: `${folder}/${item.lightbox ? item.lightbox : item.src}.webp`,
        id: item.src
    })

    topElement.value = index;
}

const onMouseMove = (e) => {
    mousePos.transform = `translate(${e.clientX - mousePos.startX - (mousePos.w / 2)}px, ${e.clientY - mousePos.startY - (mousePos.w / 2)}px)`;
}

const images = [
    {
        src: 'photo_1',
        lightbox: 'photo_1',
        sample: 'audio__plants-move'
    },
    {
        src: 'letter',
        lightbox: 'letter_expanded',
        sample: 'audio__page-flip'
    },
    {
        src: 'photo_2',
        lightbox: 'photo_2',
        sample: 'audio__car-start'
    },
]

</script>

<template>
    <div class="menu__cursor" :style="mousePos" ref="cursor" v-if="menuModel"></div>

    <Lightbox @mousemove="onMouseMove" />

    <Transition name="fade">
        <div class="menu__backdrop" v-if="menuModel"></div>
    </Transition>

    <Transition name="prikbord" :duration="5500">
        <div v-if="menuModel">
            <nav class="menu menu--prikbord" @mousemove="onMouseMove">

                <div class="menu__border"></div>

                <div v-for="(item, index) in images"
                    :class="`menu__frame ${progress.indexOf(item.src) != -1 ? 'seen' : ''}`"
                    :style="{ 'z-index': (topElement === index ? 10 : 2) }">
                    <img class="frame__asset--contain" :src="`${folder}/${item.src}.webp`" alt=""
                        @click="onClick(item, index)">

                    <Nudge :nudge="'photo'" v-if="index == 0 && progress.indexOf(item.src) != -1" />
                </div>


                <div class="menu__frame static">
                    <img class="frame__asset--contain" src="@assets/ch-1-p-2_menu/ch-1-p-2_menusticker.webp" alt="">
                </div>

                <div class="menu__frame static">
                    <img class="frame__asset--contain" src="@assets/ch-1-p-2_menu/ch-1-p-2_menutodolist.webp" alt="">
                </div>
            </nav>

            <Transition name="fade" :duration="5000">
                <div class="menu__meter progress" v-if="progress.length < 4">
                    <li class="progress__inner" :step="progress.length">
                    </li>
                </div>
            </Transition>

            <Transition name="fade" :duration="5000">
                <div v-if="progress.length > 3" class="menu__meter">
                    <button class="ic--arrow down" @click="closeMenu"></button>
                </div>
            </Transition>
        </div>

    </Transition>
</template>