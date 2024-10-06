<script setup lang="ts">
import { computed, ref, onMounted, reactive } from 'vue';
import { BEM } from '../helpers/utils';

const props = defineProps({
  size: { type: String, required: false },
  type: { type: String, require: false },
  mask: { type: String, require: false },
  outline: { type: String, require: false }
})

const outlineImg = ref()

const styleObject = reactive({
  // transform: 'rotate(0deg)',
})

const setNewPos = () => {
  const offset1 = 5;
  const offset2 = 2;
  // styleObject.transform = `rotate(${Math.random() * offset2 - offset2}deg) translate(${Math.random() * offset1 - offset2}px, ${Math.random() * offset1 - offset2}px) scale(1)`;
  // setTimeout(setNewPos, Math.random() * 10000 + 1000);

}


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

  setTimeout(setNewPos, 1000);

});

</script>

<template>
  <div :class="`frame ${BEM('frame', props.size)} ${BEM('frame', props.type)} ${props.mask ? 'frame--masked' : ''}`"
    :style="styleObject">
    <img v-if="props.outline" class="frame__outline" :src="outlineImg" alt="" />
    <slot></slot>

  </div>
</template>



<style scoped>
.frame {
  transition: transform 7s;
}

.frame--masked {
  mask-size: 100% 100%;
}
</style>