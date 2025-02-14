<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { getFeed, partidas } from '@/api/scorebat.ts';
import { onMounted } from 'vue';
import CardFeed from '@/components/CardFeed.vue';

onMounted(getFeed);
</script>

<template>
    <VContainer>
      <VRow no-gutters>
        <VCol
          v-for="(partida, index) in partidas"
          :key="index"
          cols="12"
          md="4"
        >
          <CardFeed
            :title="partida.title"
            :competition="partida.competition"
            :matchviewUrl="partida.matchviewUrl"
            :competitionUrl="partida.competitionUrl"
            :thumbnail="partida.thumbnail"
            :date="partida.date"
          />
        </VCol>
      </VRow>
    </VContainer>
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
