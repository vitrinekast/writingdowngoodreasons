<script setup>
import Frame from "@/components/Frame.vue";
</script>

<template>
    <Frame type="fit" mask="frame_2/frame_mask.svg" outline="frame_2/frame_outline">
        <img class="f-s-snow__text" src="@assets/frame_2/frame_text.svg">
        <div class="f-s-snow__snow-wrapper">
            <img class="f-s-snow__snow" src="@assets/frame_2/frame_snow.png" alt="">
        </div>
        <img class="f-s-snow__person" src="@assets/frame_2/frame_person.png" alt="">
        <img class="frame__background" src="@assets/frame_2/frame_background.png" alt="">
    </Frame>
</template>

<style scoped></style>
