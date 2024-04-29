<script setup>
import Frame from "@/components/Frame.vue";
import Page from "@/components/Page.vue";
import { Transition, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showIntro = ref(true);


const onClick = () => {
  showIntro.value = false;
  setTimeout(() => {
    router.push("/chapter-1");
  }, (4000));

}

</script>

<template>

  <nav class="nav">
    <router-link to="/chapter-1">chapter 1</router-link>
    <router-link to="/chapter-2">chapter 2</router-link>
    <router-link to="/test">test</router-link>
    <router-link to="/">start</router-link>
  </nav>
  <main>
    <Transition name="intro">
      <Page type="fixed" v-if="showIntro">
        <div class="frame">
          <img class="frame__asset" src="@assets/ch-intro/asset--trimmed.webp" alt="">

          <a class="button frame__button" @click="onClick">Begin</a>
        </div>
      </Page>
    </Transition>
  </main>

</template>

<style scoped>
.nav {
  position: fixed;
}


.intro-enter-active,
.intro-leave-active {
  transition: all 4s ease;
}

.intro-enter-from,
.intro-leave-to {
  opacity: 0;
  transform: scale(10);
}
</style>
