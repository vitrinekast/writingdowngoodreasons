<script setup lang="ts">
</script>

<template>
  <header>
    <nav class="nav">
      <router-link to="/chapter-1">chapter 1</router-link>
      <router-link to="/chapter-2">chapter 2</router-link>
      <router-link to="/test">test</router-link>
      <router-link to="/">start</router-link>
    </nav>
  </header>

  <router-view></router-view>

</template>

<style scoped>
.nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: fixed;
}
</style>
