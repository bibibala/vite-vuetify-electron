<template>
  <v-app-bar app dark>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app dark>
    <v-list-item>
    </v-list-item>
    <v-spacer></v-spacer>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(true);
</script>

<style scoped></style>
