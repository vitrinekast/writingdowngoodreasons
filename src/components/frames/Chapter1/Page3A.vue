<script setup>
import Frame from "@/components/Frame.vue";
import Page from "@/components/Page.vue";
import IceBox from "../../iceBox.vue";
import { bus } from "../../../helpers/eventBus";
import { onMounted, ref } from "vue";

const brokenIces = ref([]);

bus.on('brokenIce', (e) => {
    brokenIces.value.push(e.id);
})


</script>
<template>
    <Page type="fit">
        <div class="grid">
            <Frame class="cell cell--w-3" mask="ch-1-p-1_frame_5a-2" outline="ch-1-p-1_frame_5a-2">
                <img loading='lazy' src="@assets/ch-1-p-1_frame_5a-1/frame_asset.webp" alt="" class="frame__asset">
            </Frame>

            <Frame class="cell cell--w-3" mask="ch-1-p-1_frame_5a-2" outline="ch-1-p-1_frame_5a-2"
                :nudge="brokenIces.length > 0 && brokenIces?.indexOf('3A1') === -1">
                <IceBox name="3A1" />
                <img loading='lazy' src="@assets/ch-1-p-1_frame_5a-2/frame_asset.webp" alt="" class="frame__asset-text">
            </Frame>

            <Frame class="cell cell--w-4" mask="ch-1-p-1_frame_5a-3" outline="ch-1-p-1_frame_5a-3"
                :nudge="brokenIces?.indexOf('3A2') === -1">
                <IceBox name="3A2" />
                <img loading='lazy' src="@assets/ch-1-p-1_frame_5a-3/frame_asset.webp" alt="" class="frame__asset-text">
            </Frame>
            <Frame class="cell cell--w-2" mask="ch-1-p-1_frame_5a-4" outline="ch-1-p-1_frame_5a-4">
                <img loading='lazy' src="@assets/ch-1-p-1_frame_5a-4/frame_asset.webp" alt="" class="frame__asset">
            </Frame>

            <Frame class="cell cell--w-3" mask="ch-1-p-1_frame_5a-5" outline="ch-1-p-1_frame_5a-5">
                <img loading='lazy' src="@assets/ch-1-p-1_frame_5a-5/frame_asset.webp" alt="" class="frame__asset">
            </Frame>

            <Frame class="cell cell--w-3" mask="ch-1-p-1_frame_5a-6" outline="ch-1-p-1_frame_5a-6">
                <img loading='lazy' src="@assets/ch-1-p-1_frame_5a-6/frame_asset.webp" alt="" class="frame__asset">
            </Frame>

        </div>
    </Page>
</template>