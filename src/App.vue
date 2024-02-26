<script setup lang="ts">
import Page from './components/Page.vue'
import Frame from './components/Frame.vue'
</script>

<template>
  <header>
    this is the header
  </header>
  <main>
    <Page msg="trol">
      <Frame msg="trol"> 
        <img class="f-s-snow__text" src="./assets/images/frame_2/frame_text.svg">
        <div class="f-s-snow__snow-wrapper">
          <img class="f-s-snow__snow" src="./assets/images/frame_2/frame_snow.png" alt="">
        </div>
        <img class="f-s-snow__person" src="./assets/images/frame_2/frame_person.png" alt="">
        <img class="frame__background" src="./assets/images/frame_2/frame_background.png" alt="">
        <img class="frame__outline" src="./assets/images/frame_2/frame_outline.svg" alt="">
      </Frame>
    </Page>

    <Page msg="trol">
      <h2>I've always found great</h2>
            <img class="frame__asset" src="./assets/images/frame_3/asset--trimmed.png" alt="">
            <h2>comfort in the cold</h2>
    </Page>
  </main>
</template>

<style scoped></style>
