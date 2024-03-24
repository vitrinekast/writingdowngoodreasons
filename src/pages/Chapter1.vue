<script setup>
import { register } from 'swiper/element/bundle';
import { Keyboard, Mousewheel, EffectCreative } from 'swiper/modules';
import { SwiperSlide } from 'swiper/vue';
import { isMobile } from '../utils';
import Frame from "@/components/Frame.vue";
import Page from "@/components/Page.vue";
import Page3A from "./Chapter1/Page3A.vue";
import Page3B from "./Chapter1/Page3B.vue";

import 'swiper/css';
import 'swiper/element/css/mousewheel';
import 'swiper/element/css/pagination';
import 'swiper/css/effect-creative';

const modules = [Keyboard, Mousewheel, EffectCreative];


register();

</script>

<template>

    <main>

        <swiper-container :speed="300" :slidesPerView="'auto'" :keyboard="true" :direction="'vertical'"
            :mousewheel="true" :pagination="true" :navigation="false" :effect="'creative'" :modules="modules"
            :creativeEffect="{
            prev: {
                shadow: true,
                translate: [0, 0, -400],
                opacity: 0
            },
            next: {
                translate: [0, '100%', 0],
            },
        }">

            <swiper-slide>
                <Page>
                    <Frame type="fit" mask="ch-1_frame_2" outline="ch-1_frame_2">
                        <img class="f-s-snow__text" src="@assets/ch-1_frame_2/frame_text.svg">
                        <div class="f-s-snow__snow-wrapper">
                            <img class="f-s-snow__snow" src="@assets/ch-1_frame_2/frame_snow.png" alt="">
                        </div>
                        <img class="f-s-snow__person" src="@assets/ch-1_frame_2/frame_person.png" alt="">
                        <img class="frame__background" src="@assets/ch-1_frame_2/frame_background.png" alt="">
                    </Frame>
                </Page>
            </swiper-slide>
            <swiper-slide>
                <Page size="sm">
                    <h2>I've always found great</h2>
                    <Frame size="sm">
                        <img class="frame__asset" src="@assets/ch-1_frame_3/asset--trimmed.png" alt="">
                    </Frame>
                    <h2>comfort in the cold</h2>
                </Page>
            </swiper-slide>
            <swiper-slide>
                <Page type="fit">
                    <div class="frame">
                        <img class="frame__asset" src="@assets/ch-1_frame_4/asset--trimmed.png" alt="">
                    </div>
                </Page>
            </swiper-slide>

            <swiper-slide v-if="!isMobile()">
                <section class="page--spread">
                    <Page3A />
                    <Page3B />
                </section>
            </swiper-slide>

            <swiper-slide v-if="isMobile()">
                <Page3A />
            </swiper-slide>
            <swiper-slide v-if="isMobile()">
                <Page3B />
            </swiper-slide>

        </swiper-container>





    </main>
</template>

<style scoped>
swiper-container,
.swiper-container {
    height: 100svh;
    overflow: hidden;
}

swiper-slide,
.swiper-slide {
    height: 100svh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e8e3d178;

}
</style>
