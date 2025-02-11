<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps({
  title: String,
  competition: String,
  matchviewUrl: String,
  competitionUrl: String,
  thumbnail: String,
  date: String,
  videos: Array,
})
</script>

<template>
  <VCard class="bg-grey-darken-4 ma-2 pa-2 rounded-lg">
    <VImg
      class="rounded-lg"
      :src="thumbnail"
    />
    <VCardTitle class="text-center font-weight-bold">{{ title }}</VCardTitle>
    <VCardSubtitle class="text-center">{{ competition }} - {{ date?.split('T')[0].split('-')[2] }}/{{ date?.split('T')[0].split('-')[1] }}/{{ date?.split('T')[0].split('-')[0] }}</VCardSubtitle>
    <div class="d-flex justify-space-around pa-2 mt-3">
      <a :href="matchviewUrl" target="_blank">Resultado</a>
      <VDivider vertical/>
      <a :href="competitionUrl" target="_blank">Competição</a>
    </div>
  </VCard>
</template>

<style lang="scss" scoped>
$a-color: #00E676;
$a-hover-color: #00C853;

a {
  text-decoration: none;
  transition: .3s;
  color: $a-color;
}

a:hover {
  color: $a-hover-color;
}
</style>
