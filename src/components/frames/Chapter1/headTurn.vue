<script setup>
import head_1 from '@/assets/images/ch-1-p-3_frame_1/frame_asset-1.webp';
import head_2 from '@/assets/images/ch-1-p-3_frame_1/frame_asset-2.webp';
import head_3 from '@/assets/images/ch-1-p-3_frame_1/frame_asset-3.webp';
import head_4 from '@/assets/images/ch-1-p-3_frame_1/frame_asset-4.webp';
import { mapNumRange } from "@/helpers/utils";
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/element/css/pagination';
import { ref } from 'vue';
import { bus } from "@/helpers/eventBus";

const turnIndex = ref(0);
const images = [head_1, head_2, head_3, head_4];
const showLast = ref(false);

const updateHead = (val) => {
    const v = Math.round(mapNumRange(val, 0, 100, 0, 3));
    if (v !== turnIndex.value) {
        turnIndex.value = v;
    }
}

const onchange = (e) => {
    updateHead(e.target.value);
}

function lowerValue(el) {
    if (el.value < 3) {
        el.value = 0;
    } else {
        el.value -= 1;
        updateHead(el.value);
        setTimeout(lowerValue.bind(null, el), 1);
    }
}

const onend = (e) => {
    if (e.target.value > 90) {
        showLast.value = true;
        bus.emit("turnedHead");
    } else {
        setTimeout(lowerValue.bind(null, e.target), 100);
    }
}
</script>
<template>
    <Frame class="cell cell--w-3 cell--100" swiper-parallax-item>
        <div v-for="(item, index) in images" :key="index" :data-index="index"
            :style="{ opacity: index == turnIndex ? 1 : 0, transitionDelay: index == turnIndex ? 2.51 : 0 }"
            class="frame__element stretch">
            <img  :src="item" alt="" class="frame__asset--contain stretch">
        </div>
    </Frame>
    <Frame class="cell cell--w-3" swiper-parallax-item>
        <img  src="@assets/ch-1-p-3_frame_2/frame_asset.webp" alt=""
            class="frame__asset--contain stretch">
    </Frame>
    <Frame class="cell cell--w-6 cell--100" swiper-parallax-item>
        <input class="cell__abs" type="range" min="0" max="100" step="1" value="0" @input="onchange" @touchend="onend"
            @mouseup="onend">
    </Frame>
</template>
