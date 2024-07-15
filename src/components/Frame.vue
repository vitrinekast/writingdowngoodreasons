<script setup lang="ts">
import { computed, ref, onMounted, reactive } from 'vue';
import { BEM } from '../utils';

const props = defineProps({
  size: { type: String, required: false },
  type: { type: String, require: false },
  mask: { type: String, require: false },
  outline: { type: String, require: false }
})

const outlineImg = ref()

const styleObject = reactive({

})

onMounted(() => {
  console.log(`the component is now mounted.`, styleObject);

  if (props.mask) {
    import(`@assets/${props.mask}/frame_mask.svg`).then(image => {
      styleObject['mask-image'] = `url('${image.default}')`;
    });
  }

  if (props.outline) {
    import(`@assets/${props.outline}/frame_outline.svg`).then(imageImports => {
      outlineImg.value = imageImports.default
    })
  }

});

</script>

<template>
  <div :class="`frame ${BEM('frame', props.size)} ${BEM('frame', props.type)} ${props.mask ? 'frame--masked' : ''}`"  :style="styleObject">
    <img v-if="props.outline" class="frame__outline" :src="outlineImg" alt="" />
    <slot></slot>

  </div>
</template>



<style scoped>
.frame--masked {
  mask-size: 100% 100%;
}
</style>