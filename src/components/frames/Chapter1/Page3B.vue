<script setup>
import Frame from "@/components/Frame.vue";
import Page from "@/components/Page.vue";
import { Transition, ref } from "vue";

const showBirdAway = ref(false);

</script>

<template>
    <Page type="fit">
        <div class="grid">
            <Frame class="cell--w-6" mask='ch-1_frame_5b-1' outline="ch-1_frame_5b-1">
                <img src="@assets/ch-1_frame_5b-1/frame_asset.png" alt="" class="frame__asset">
            </Frame>
            <Frame class=" cell--w-3" mask='ch-1_frame_5b-2' outline="ch-1_frame_5b-2">
                <img src="@assets/ch-1_frame_5b-2/frame_asset.png" alt="" class="frame__asset">
            </Frame>
            <Frame class="cell--w-3" mask='ch-1_frame_5b-3' outline="ch-1_frame_5b-3" @mouseover="showBirdAway = true" @mouseleave="showBirdAway = false" type="hoverable">
                <img src="@assets/ch-1_frame_5b-3/frame_asset.png" alt="" class="frame__asset">
                
                <Transition name="fade-asset">
                    <img src="@assets/ch-1_frame_5b-3/frame-3--asset-step2.png" alt="" v-if="showBirdAway" class="frame__asset--hover">
                </Transition>
            </Frame>

            <Frame class="cell cell--w-4 " mask='ch-1_frame_5b-4'  outline="ch-1_frame_5b-4">
                <img src="@assets/ch-1_frame_5b-4/frame_asset.png" alt="" class="frame__asset">
            </Frame>

            <Frame class=" cell--w-2 " mask='ch-1_frame_5b-5' outline="ch-1_frame_5b-5">
                <img src="@assets/ch-1_frame_5b-5/frame_asset.png" alt="" class="frame__asset">
            </Frame>

        </div>
    </Page>
</template>