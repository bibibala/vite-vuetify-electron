<script setup lang="ts"></script>

<template>
  <v-sheet class="pa-5" height="100%">
    <v-row>
      <v-col cols="12">
        <slot name="tool"></slot>
      </v-col>
      <v-col cols="12">
        <slot name="search"></slot>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <slot name="body"></slot>
      </v-col>
      <v-col cols="12">
        <slot></slot>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style scoped></style>
