<script setup lang="ts">

const props = defineProps({
  type: { type: String, required: false }
})
</script>

<template>
  <section class="page">
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

