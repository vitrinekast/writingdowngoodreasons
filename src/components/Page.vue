<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <section class="page">
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

