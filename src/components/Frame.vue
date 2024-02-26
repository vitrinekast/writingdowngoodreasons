<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="frame frame--1 frame--fit f-s-snow in-view">
      <slot></slot>
    </div>
</template>

