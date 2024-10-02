<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';

function load() {
  window.ipcRenderer.loadDll(1);
  window.ipcRenderer.invokeResponse(async (_, res) => {
    console.log(res);
  });
}
</script>

<template>
  <PageLayout>
    <template #body>
      <v-btn @click="load">Load DLL</v-btn>
    </template>
  </PageLayout>
</template>

<style scoped></style>
