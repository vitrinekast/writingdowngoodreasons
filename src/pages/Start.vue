<script setup>
import Page from "@/components/Page.vue";
import { Transition, computed, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showIntro = ref(true);
const outlineImg = ref()
const maskImg = ref()

const maskSrc = computed(() => {
  return import(`@assets/ch-intro/frame_mask.svg`).then(image => {
    maskImg.value = `url('${image.default}')`;
  })
});

const outlineSrc = computed(() => {
  return import(`@assets/ch-intro/frame_outline.svg`).then(imageImports => {
    console.log(imageImports.default);
    outlineImg.value = imageImports.default
  });
});

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}


</script>

<template>


  <main>
    <Transition name="intro">
      <Page type="fixed" v-if="showIntro">
        <div class="intro frame">
          <img v-if="outlineSrc" class="frame__outline" :src="outlineImg" alt="" />
          <span v-if="maskSrc" style="display: none;"></span>
          <img class="frame__asset frame__background" src="@assets/ch-intro/intro_bergen.webp" alt="">

          <img class="frame__asset intro__text intro__text--top" src="@assets/ch-intro/intro_top.webp" alt="">
          <img class="frame__asset intro__text intro__text--middle" src="@assets/ch-intro/intro_middle.webp" alt="">
          <img class="frame__asset intro__text intro__text--bottom" src="@assets/ch-intro/intro_bottom.webp" alt="">
          <div>

            <router-link @click="toggleFullScreen" class="button frame__button"
              to="/chapter-1/page-1">Begin and go fullscreen</router-link>
          </div>
        </div>

      </Page>
    </Transition>
  </main>

</template>
