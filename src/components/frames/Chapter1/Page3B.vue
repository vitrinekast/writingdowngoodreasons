<script setup>
import Frame from "@/components/Frame.vue";
import Page from "@/components/Page.vue";
import { ref } from "vue";
import { audioBus } from "../../../helpers/eventBus";
import { useAudioStore } from "../../../store/audio";
import IceBox from "../../iceBox.vue";

const showBirdAway = ref(false);
const audio = useAudioStore();

const onBird = () => {
    audioBus.emit('playSample', "audio__bird");
}

</script>

<template>
    <Page type="fit">
        <div class="grid">
            <Frame class="cell--w-6" mask='ch-1-p-1_frame_5b-1' outline="ch-1-p-1_frame_5b-1">
                <img loading='lazy' src="@assets/ch-1-p-1_frame_5b-1/frame_asset.jpg" alt="" class="frame__asset">
            </Frame>
            <Frame class=" cell--w-3" mask='ch-1-p-1_frame_5b-2' outline="ch-1-p-1_frame_5b-2">
                <img loading='lazy' src="@assets/ch-1-p-1_frame_5b-2/frame_asset.webp" alt="" class="frame__asset">
            </Frame>
            <Frame class="cell--w-3" mask='ch-1-p-1_frame_5b-3' outline="ch-1-p-1_frame_5b-3" @mouseover="onBird"
                @mouseleave="showBirdAway = false" type="hoverable">
                <img loading='lazy' src="@assets/ch-1-p-1_frame_5b-3/frame_asset.webp" alt="" class="frame__asset">

                <Transition name="fade-asset">
                    <img loading='lazy' src="@assets/ch-1-p-1_frame_5b-3/frame-3--asset-step2.webp" alt=""
                        v-if="showBirdAway" class="frame__asset--hover">
                </Transition>
            </Frame>

            <Frame class="cell cell--w-4 " mask='ch-1-p-1_frame_5b-4' outline="ch-1-p-1_frame_5b-4">
                <IceBox />
                <img loading='lazy' src="@assets/ch-1-p-1_frame_5b-4/frame_asset.webp" alt="" class="frame__asset-text">
            </Frame>

            <Frame class=" cell--w-2 " mask='ch-1-p-1_frame_5b-5' outline="ch-1-p-1_frame_5b-5">
                <img loading='lazy' src="@assets/ch-1-p-1_frame_5b-5/frame_asset.webp" alt="" class="frame__asset">
            </Frame>

        </div>
    </Page>
</template>