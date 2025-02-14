<script setup lang="ts">
import Header from './components/Header.vue';
import Feed from './views/Feed.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header class="bg-grey-darken-4 pa-2 text-center">
    <Header
      title="Vue FootBall"
    />
  </header>

  <main>
    <Feed />
  </main>

  <footer class="bg-grey-darken-4">
    <Footer />
  </footer>
</template>

<style scoped>

</style>
