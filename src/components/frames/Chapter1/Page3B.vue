<script setup>
import Frame from "@/components/Frame.vue";
import Page from "@/components/Page.vue";
import { ref } from "vue";
import { bus } from "@/helpers/eventBus";
import { useAudioStore } from "@/store/audio";
import IceBox from "@/components/iceBox.vue";

const showBirdAway = ref(false);
const audio = useAudioStore();

const onBird = () => {
    bus.emit('playSample', "bird");
}

const brokenIces = ref([]);

bus.on('brokenIce', (e) => {
    brokenIces.value.push(e.id);
})

</script>

<template>
    <Page type="fit">
        <div class="grid">
            <Frame class="cell--w-6" mask='ch-1-p-1_frame_5b-1' outline="ch-1-p-1_frame_5b-1">
                <img  src="@assets/ch-1-p-1_frame_5b-1/frame_asset.jpg" alt="" class="frame__asset">
            </Frame>
            <Frame class=" cell--w-3" mask='ch-1-p-1_frame_5b-2' outline="ch-1-p-1_frame_5b-2">
                <img  src="@assets/ch-1-p-1_frame_5b-2/frame_asset.webp" alt="" class="frame__asset">
            </Frame>
            <Frame class="cell--w-3" mask='ch-1-p-1_frame_5b-3' outline="ch-1-p-1_frame_5b-3" @mouseover="onBird"
                @mouseleave="showBirdAway = false" type="hoverable">
                <img  src="@assets/ch-1-p-1_frame_5b-3/frame_asset.webp" alt="" class="frame__asset">

                <Transition name="fade-asset">
                    <img  src="@assets/ch-1-p-1_frame_5b-3/frame-3--asset-step2.webp" alt=""
                        v-if="showBirdAway" class="frame__asset--hover">
                </Transition>
            </Frame>

            <Frame class="cell cell--w-4 " mask='ch-1-p-1_frame_5b-4' outline="ch-1-p-1_frame_5b-4" :nudge="brokenIces?.indexOf('3B1') === -1">
                <IceBox name="3B1" />
                <img  src="@assets/ch-1-p-1_frame_5b-4/frame_asset.webp" alt="" class="frame__asset-text">
            </Frame>

            <Frame class=" cell--w-2 " mask='ch-1-p-1_frame_5b-3' outline="ch-1-p-1_frame_5b-5">
                <img  src="@assets/ch-1-p-1_frame_5b-5/frame_asset.webp" alt="" class="frame__asset">
            </Frame>

        </div>
    </Page>
</template>