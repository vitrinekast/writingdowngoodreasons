<script setup lang="ts">
import { computed, ref, onMounted, reactive, watchEffect } from 'vue';
import { BEM } from '../helpers/utils';
import Nudge from './Nudge.vue';

const props = defineProps({
  size: { type: String, required: false },
  type: { type: String, required: false },
  mask: { type: String, required: false },
  nudge: { type: [String, Boolean], required: false },
  outline: { type: String, required: false }
})

const outlineImg = ref()

const styleObject = reactive({})


onMounted(() => {

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
  <div :class="`frame ${BEM('frame', props.size)} ${BEM('frame', props.type)} ${props.mask ? 'frame--masked' : ''}`">
    <img v-if="props.outline" class="frame__outline" :src="outlineImg" alt="" />
    <div :style="styleObject" class="things">
      <slot></slot>
    </div>
    <Nudge v-if="props.nudge" :nudge="props.nudge" />
  </div>
</template>



<style scoped>
.frame--masked .things {
  mask-size: 100% 100%;
}
</style>