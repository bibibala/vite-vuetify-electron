<template>
  <v-tabs slider-color="primary" align-tabs="center" fixed-tabs v-model="tab">
    <v-tab :to="item.text" v-for="(item, index) in items" :key="index">
      {{ item.text }}
    </v-tab>
  </v-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tab = ref(0);

const items = [{ text: "Home", icon: "mdi-clock" }];
</script>

<style scoped></style>
