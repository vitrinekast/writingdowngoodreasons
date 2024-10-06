<script setup>
import { onMounted, ref } from 'vue';

import head_1 from '../../assets/images/ch-1-p-3_frame_1/frame_asset-1.png';
import head_2 from '../../assets/images/ch-1-p-3_frame_1/frame_asset-2.png';
import head_3 from '../../assets/images/ch-1-p-3_frame_1/frame_asset-3.png';
import head_4 from '../../assets/images/ch-1-p-3_frame_1/frame_asset-4.png';

import 'swiper/css';
import 'swiper/css/effect-creative';
import { register } from 'swiper/element/bundle';
import 'swiper/element/css/mousewheel';
import 'swiper/element/css/pagination';
import { swiperParam } from '../../utils';

register();

const pageC = ref(null);

const turnIndex = ref(0);
const pageState = ref(0);
const images = [head_1, head_2, head_3, head_4];
const activeSlide = ref(0);

onMounted(() => {
    Object.assign(pageC.value, {
        ...swiperParam,
        direction: 'vertical',
        speed: 2000,
        allowSwipeNext: false, // this doesnt work atm
        allowSwipePrev: false
    });
    console.log("init?");
    pageC.value.initialize();

    pageC.value.addEventListener('swiperslidechange', (e) => {
        activeSlide.value = e.detail[0].activeIndex;
        console.log("change");
    });
});

const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

const onchange = (e) => {

    const v = Math.round(mapNumRange(e.target.value, 0, 100, 0, 3));
    if (v !== turnIndex.value) {
        turnIndex.value = v;
    }

    if (e.target.value > 90 && pageState.value === 0) {


        window.setTimeout(() => {
            pageState.value = 1;
            pageC.value.swiper.slideNext();
        }, 1000)


        window.setTimeout(() => {
            pageState.value = 2;
            pageC.value.swiper.slideNext();
        }, 5000)

    }

}

</script>
<template>
    <main>

        <swiper-container ref="pageC" init="false">
            <swiper-slide class="slide--auto slide--first" :style="{ opacity: 1 }">
                <Page>
                    <div class="grid grid--center">
                        <Frame class="cell cell--w-3 cell--100">
                            <div v-for="(item, index) in images" :key="index" :data-index="index"
                                :style="{ opacity: index == turnIndex ? 1 : 0, transitionDelay: index == turnIndex ? 2.51 : 0 }"
                                class="frame__element stretch">
                                <img loading='lazy' :src="item" alt="" class="frame__asset--contain stretch">
                            </div>
                        </Frame>
                        <Frame class="cell cell--w-3">
                            <img loading='lazy' src="@assets/ch-1-p-3_frame_2/frame_asset.png" alt=""
                                class="frame__asset--contain stretch fadee-in">
                        </Frame>
                        <Frame class="cell cell--w-6 cell--100">
                            <input class="cell__abs" :style="{ opacity: pageState == 0 ? 1 : 0 }" type="range" min="0"
                                max="100" step="1" value="0" @input="onchange">
                        </Frame>

                    </div>
                </Page>
            </swiper-slide>

            <swiper-slide class="slide--auto" :style="{ opacity: pageState > 0 ? 1 : 0 }">
                <Page>
                    <div class="grid grid--center">
                        <Frame class="cell cell--w-2">
                            <img loading='lazy' src="@assets/ch-1-p-3_frame_3/frame_asset.png" alt=""
                                class="frame__asset--contain stretch fadee-in">
                        </Frame>
                        <Frame class="cell cell--w-4">
                            <img loading='lazy' src="@assets/ch-1-p-3_frame_4/frame_asset.png" alt=""
                                class="frame__asset--contain stretch fadee-in">
                        </Frame>
                    </div>
                </Page>
            </swiper-slide>

            <swiper-slide class="slide--auto slide--last" :style="{ opacity: pageState > 1 ? 1 : 0 }">
                <Page>
                    <div class="grid grid--center">
                        <Frame class="cell cell--w-6">
                            <img loading='lazy' src="@assets/ch-1-p-3_frame_5/frame_asset.png" alt=""
                                class="frame__asset--contain stretch fadee-in">
                        </Frame>

                    </div>
                </Page>
            </swiper-slide>
        </swiper-container>
    </main>
</template>
<style scoped>
.slide--auto {
    opacity: 0;
    transition: opacity 2s linear;
}

.slide--first {
    margin-top: 30vh;
}

.slide--last {
    margin-bottom: 10vh;
}

.cell__abs {
    position: absolute;
    top: 100%;
    transition: opacity 1s linear;
}
</style>
