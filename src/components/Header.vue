<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps({
  title: String
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <h1>{{ title }}</h1>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
h1 {
  color: #00E676;
}
</style>
