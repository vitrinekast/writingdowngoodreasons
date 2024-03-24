<script setup lang="ts">
import { BEM } from '../utils';

const props = defineProps({
  type: { type: String, required: false },
  size: { type: String, required: false }
})
</script>

<template>
  <section class="page">
    <div :class="`container ${BEM('container', props.size)} `">
      <slot></slot>
    </div>
  </section>
</template>

