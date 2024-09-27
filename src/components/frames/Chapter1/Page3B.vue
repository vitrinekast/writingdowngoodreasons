<script setup>
import Frame from "@/components/Frame.vue";
import Page from "@/components/Page.vue";
import { Transition, onMounted, ref } from "vue";
import { usePreloadStore } from "../../../store/preload";

const showBirdAway = ref(false);

const preloadStore = usePreloadStore();


onMounted(() => {
    console.log("mounted");
    preloadStore.incrementWaitlist(5);
});
</script>

<template>
    <Page type="fit">
        <div class="grid">
            <Frame class="cell--w-6" mask='ch-1-p-1_frame_5b-1' outline="ch-1-p-1_frame_5b-1">
                <img  @load="preloadStore.oneDoneWaiting()" src="@assets/ch-1-p-1_frame_5b-1/frame_asset.jpg" alt="" class="frame__asset">
            </Frame>
            <Frame class=" cell--w-3" mask='ch-1-p-1_frame_5b-2' outline="ch-1-p-1_frame_5b-2">
                <img  @load="preloadStore.oneDoneWaiting()" src="@assets/ch-1-p-1_frame_5b-2/frame_asset.webp" alt="" class="frame__asset">
            </Frame>
            <Frame class="cell--w-3" mask='ch-1-p-1_frame_5b-3' outline="ch-1-p-1_frame_5b-3" @mouseover="showBirdAway = true"
                @mouseleave="showBirdAway = false" type="hoverable">
                <img  @load="preloadStore.oneDoneWaiting()" src="@assets/ch-1-p-1_frame_5b-3/frame_asset.webp" alt="" class="frame__asset">

                <Transition name="fade-asset">
                    <img  @load="preloadStore.oneDoneWaiting()" src="@assets/ch-1-p-1_frame_5b-3/frame-3--asset-step2.webp" alt=""
                        v-if="showBirdAway" class="frame__asset--hover">
                </Transition>
            </Frame>

            <Frame class="cell cell--w-4 " mask='ch-1-p-1_frame_5b-4' outline="ch-1-p-1_frame_5b-4">
                <img  @load="preloadStore.oneDoneWaiting()" src="@assets/ch-1-p-1_frame_5b-4/frame_asset.webp" alt="" class="frame__asset-text">
            </Frame>

            <Frame class=" cell--w-2 " mask='ch-1-p-1_frame_5b-5' outline="ch-1-p-1_frame_5b-5">
                <img  @load="preloadStore.oneDoneWaiting()" src="@assets/ch-1-p-1_frame_5b-5/frame_asset.webp" alt="" class="frame__asset">
            </Frame>

        </div>
    </Page>
</template>