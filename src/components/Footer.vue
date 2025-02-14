<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const socialMedia = [
  { id: 1, icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/jardson-alan/' },
  { id: 2, icon: 'mdi-github', link: 'https://github.com/jardsonalan' },
  { id: 3, icon: 'mdi-gmail', link: 'mailto:contato.jardsonalan@gmail.com' }
];

</script>

<template>
  <VContainer>
    <VRow>
      <VCol class="d-flex justify-space-between align-center">
        <div>
          <VBtn
            class="ma-2"
            v-for="social in socialMedia"
            :key="social.id"
            :icon="social.icon"
            variant="text"
            color="green-accent-3"
            :href="social.link"
            target="_blank"
          />
        </div>
        <span>&copy; Copyright: <a href="https://github.com/jardsonalan" target="_blank">Jardson Alan</a></span>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #00E676;
}
</style>
