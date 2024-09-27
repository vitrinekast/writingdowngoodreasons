<script setup>
import Frame from "@/components/Frame.vue";
import Page from "@/components/Page.vue";
import { onMounted } from "vue";
import { usePreloadStore } from "../../../store/preload";

const preloadStore = usePreloadStore();


onMounted(() => {
    console.log("mounted");
    preloadStore.incrementWaitlist(6);
});
</script>
<template>
    <Page type="fit">
        <div class="grid">
            <Frame class="cell cell--w-3" mask="ch-1-p-1_frame_5a-2" outline="ch-1-p-1_frame_5a-2">
                <img  src="@assets/ch-1-p-1_frame_5a-1/frame_asset.webp" alt="" class="frame__asset"
                    @load="preloadStore.oneDoneWaiting()">
            </Frame>

            <Frame class="cell cell--w-3" mask="ch-1-p-1_frame_5a-2" outline="ch-1-p-1_frame_5a-2">
                <img  @load="preloadStore.oneDoneWaiting()" src="@assets/ch-1-p-1_frame_5a-2/frame_asset.webp" alt="" class="frame__asset-text">
            </Frame>

            <Frame class="cell cell--w-4" mask="ch-1-p-1_frame_5a-3" outline="ch-1-p-1_frame_5a-3">
                <img  @load="preloadStore.oneDoneWaiting()" src="@assets/ch-1-p-1_frame_5a-3/frame_asset.webp" alt="" class="frame__asset-text">
            </Frame>
            <Frame class="cell cell--w-2" mask="ch-1-p-1_frame_5a-4" outline="ch-1-p-1_frame_5a-4">
                <img  @load="preloadStore.oneDoneWaiting()" src="@assets/ch-1-p-1_frame_5a-4/frame_asset.webp" alt="" class="frame__asset">
            </Frame>

            <Frame class="cell cell--w-3" mask="ch-1-p-1_frame_5a-5" outline="ch-1-p-1_frame_5a-5">
                <img  @load="preloadStore.oneDoneWaiting()" src="@assets/ch-1-p-1_frame_5a-5/frame_asset.webp" alt="" class="frame__asset">f
            </Frame>

            <Frame class="cell cell--w-3" mask="ch-1-p-1_frame_5a-6" outline="ch-1-p-1_frame_5a-6">
                <img  @load="preloadStore.oneDoneWaiting()" src="@assets/ch-1-p-1_frame_5a-6/frame_asset.webp" alt="" class="frame__asset">
            </Frame>

        </div>
    </Page>
</template>