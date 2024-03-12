<script setup>
import Page from "@/components/Page.vue";
import Frame from "@/components/Frame.vue";
import { register } from 'swiper/element/bundle';
import { ref } from "vue";

register();
const currentAudio = ref("");
const spaceBetween = 10;
const onProgress = (e) => {
    const [swiper, progress] = e.detail;
    console.log(progress)
};

const onSlideChange = (e) => {
    console.log('slide changed')
}

</script>

<template>

    <main>
        
        <button @click="currentAudio = 'waterfall'">play an audio file</button>
        <button @click="currentAudio = 'rivier'">play another one</button>
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

        <Page size="sm">
            <h2>I've always found great</h2>
            <Frame size="sm">
                <img class="frame__asset" src="@assets/ch-1_frame_3/asset--trimmed.png" alt="">
            </Frame>
            <h2>comfort in the cold</h2>
        </Page>

        <Page type="fit">
            <div class="frame">
                <img class="frame__asset" src="@assets/ch-1_frame_4/asset--trimmed.png" alt="">
            </div>
        </Page>


        <section class="page--spread">
            <Page>
                <div class="grid">
                    <Frame class="cell cell--w-3" mask="ch-1_frame_5a-2" outline="ch-1_frame_5a-2">
                        <img src="@assets/ch-1_frame_5a-1/frame_asset.png" alt="" class="frame__asset">

                    </Frame>

                    <Frame class="cell cell--w-3" type="filled" mask="ch-1_frame_5a-2" outline="ch-1_frame_5a-2">
                        <p class="frame__text">The cold feels safe. It's melancholic and calm.</p>
                    </Frame>

                    <Frame class="cell cell--w-4" type="filled" mask="ch-1_frame_5a-3" outline="ch-1_frame_5a-3">
                        <p class="frame__text">The snow crunches shoftly. Under your boots, besides that it's quiet.
                            Sounds
                            are
                            muffled under the blanket of snow, a frozen whisper in the stillness.</p>
                    </Frame>

                    <Frame class="cell cell--w-2" mask="ch-1_frame_5a-4" outline="ch-1_frame_5a-4">
                        <img src="@assets/ch-1_frame_5a-4/frame_asset.png" alt="" class="frame__asset">
                    </Frame>

                    <Frame class="cell cell--w-3" mask="ch-1_frame_5a-5" outline="ch-1_frame_5a-5">
                        <img src="@assets/ch-1_frame_5a-5/frame_asset.png" alt="" class="frame__asset">f
                    </Frame>

                    <Frame class="cell cell--w-3" mask="ch-1_frame_5a-6" outline="ch-1_frame_5a-6">
                        <img src="@assets/ch-1_frame_5a-6/frame_asset.png" alt="" class="frame__asset">
                    </Frame>


                </div>
            </Page>

            <Page>
                <div class="grid">
                    <Frame class="cell--w-6" mask='ch-1_frame_5b-1' outline="ch-1_frame_5b-1">
                        <img src="@assets/ch-1_frame_5b-1/frame_asset.png" alt="" class="frame__asset">
                    </Frame>
                    <Frame class=" cell--w-3 " mask='ch-1_frame_5b-2' outline="ch-1_frame_5b-2">
                        <img src="@assets/ch-1_frame_5b-2/frame_asset.png" alt="" class="frame__asset">
                    </Frame>
                    <Frame class=" cell--w-3 f-bird-away " mask='ch-1_frame_5b-3' outline="ch-1_frame_5b-3">
                        <img src="@assets/ch-1_frame_5b-3/frame_asset.png" alt="" class="frame__asset">
                    </Frame>

                    <Frame class="cell cell--w-4 " mask='ch-1_frame_5b-4' type="filled" outline="ch-1_frame_5b-4">
                        <p class="frame__text">it gives me a glass like clarity that I only experience when the air is
                            crisp. The hush of a snow covered landscape creates a comforting sense of tranquility and
                            isolation</p>
                    </Frame>

                    <Frame class=" cell--w-2 " mask='ch-1_frame_5b-5' outline="ch-1_frame_5b-5">
                        <img src="@assets/ch-1_frame_5b-5/frame_asset.png" alt="" class="frame__asset">
                    </Frame>

                </div>
            </Page>
        </section>
    </main>
</template>

<style scoped></style>
