<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';
</script>

<template>
  <PageLayout>
    <template #search>
      <v-text-field
        placeholder="search"
        density="compact"
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </template>
    <template #body>
      <div class="text-primary">hello world</div>
    </template>
  </PageLayout>
</template>

<style scoped></style>
