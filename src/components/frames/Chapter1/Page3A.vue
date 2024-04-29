<script setup>
import Frame from "@/components/Frame.vue";
import Page from "@/components/Page.vue";
</script>
<template>
    <Page type="fit">
        <div class="grid">
            <Frame class="cell cell--w-3" mask="ch-1_frame_5a-2" outline="ch-1_frame_5a-2">
                <img loading='lazy' src="@assets/ch-1_frame_5a-1/frame_asset.png" alt="" class="frame__asset">
            </Frame>

            <Frame class="cell cell--w-3" mask="ch-1_frame_5a-2" outline="ch-1_frame_5a-2">
                <img loading='lazy' src="@assets/ch-1_frame_5a-2/frame_asset.png" alt="" class="frame__asset">
            </Frame>

            <Frame class="cell cell--w-4" mask="ch-1_frame_5a-3" outline="ch-1_frame_5a-3">
                <img loading='lazy' src="@assets/ch-1_frame_5a-3/frame_asset.png" alt="" class="frame__asset">
            </Frame>
            <Frame class="cell cell--w-2" mask="ch-1_frame_5a-4" outline="ch-1_frame_5a-4">
                <img loading='lazy' src="@assets/ch-1_frame_5a-4/frame_asset.png" alt="" class="frame__asset">
            </Frame>

            <Frame class="cell cell--w-3" mask="ch-1_frame_5a-5" outline="ch-1_frame_5a-5">
                <img loading='lazy' src="@assets/ch-1_frame_5a-5/frame_asset.png" alt="" class="frame__asset">f
            </Frame>

            <Frame class="cell cell--w-3" mask="ch-1_frame_5a-6" outline="ch-1_frame_5a-6">
                <img loading='lazy' src="@assets/ch-1_frame_5a-6/frame_asset.png" alt="" class="frame__asset">
            </Frame>

        </div>
    </Page>
</template>