<script setup lang="ts">
import { computed, ref } from 'vue';
import { BEM } from '../utils';

const outlineImg = ref()
const maskImg = ref()
const props = defineProps({
  size: { type: String, required: false },
  type: { type: String, require: false },
  mask: { type: String, require: false },
  outline: { type: String, require: false }
})

const maskSrc = computed(() => {
  return props.mask ? import(`@assets/${props.mask}/frame_mask.svg`).then(image => {
    maskImg.value = `url('${image.default}')`;
  }) : false
});

const outlineSrc = computed(() => {
  return props.outline ? import(`@assets/${props.outline}/frame_outline.svg`).then(imageImports => {
    outlineImg.value = imageImports.default
  }) : false
});

</script>

<template>
  <div :class="`frame ${BEM('frame', props.size)} ${BEM('frame', props.type)} ${props.mask ? 'frame--masked' : ''}`">

    <img v-if="outlineSrc" class="frame__outline" :src="outlineImg" alt="">
    <span v-if="maskSrc"></span>
    <slot></slot>

  </div>
</template>

<style scoped>
.frame--masked {
  --mask-url: v-bind(maskImg);
}
</style>
