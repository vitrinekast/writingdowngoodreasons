<script setup>
import Frame from "@/components/Frame.vue";
import Page from "@/components/Page.vue";
</script>
<template>
    <Page type="fit">
        <div class="grid">
            <Frame class="cell cell--w-3" mask="ch-1_frame_5a-2" outline="ch-1_frame_5a-2">
                <img src="@assets/ch-1_frame_5a-1/frame_asset.png" alt="" class="frame__asset">
            </Frame>

            <Frame class="cell cell--w-3" type="filled" mask="ch-1_frame_5a-2" outline="ch-1_frame_5a-2">
                <p class="frame__text">The cold feels safe. It's melancholic and calm.</p>
            </Frame>

            <Frame class="cell cell--w-4" type="filled" mask="ch-1_frame_5a-3" outline="ch-1_frame_5a-3">
                <p class="frame__text">The snow crunches shoftly. Under your boots, besides that it's
                    quiet.
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
</template>