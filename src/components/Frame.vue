<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: { type: String, required: false },
  type: { type: String, require: false },
  mask: { type: String, require: false },
  outline: { type: String, require: false },
})

const outlineSrc = computed(() => {
  const path = new URL('@/assets/images/', import.meta.url);
  return `${path}/${props.outline}`
});

const maskSrc = computed(() => {
  const path = new URL('@/assets/images/', import.meta.url);
  return `url('${path}/${props.mask}')`;
});

const BEM = (base, modifier) => {
  return modifier ? `${base}--${modifier}` : '';
}

</script>

<template>
  <div :class="`frame ${BEM('frame', props.size)} ${BEM('frame', props.type)} ${props.mask ? 'frame--masked' : ''}`">
    <img v-if="outline" class="frame__outline" :src="outlineSrc" alt="">
    <slot></slot>

  </div>
</template>

<style scoped>
.frame--masked {
  --mask-url: v-bind(maskSrc);
}
</style>
