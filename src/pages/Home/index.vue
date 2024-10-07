<script setup lang="ts">
import { ref } from "vue";
import PageLayout from "../../components/PageLayout.vue";

const rootPath = ref("");
const keyValueList = ref([]);

function selectFiles(source: string) {
  window.ipcRenderer.select(source);
  window.ipcRenderer.selectOver(async (_, response) => {
    if (response) {
      rootPath.value = response.response.filePaths[0];
      console.time("readDirTimer"); // 开始计时
      keyValueList.value = await window.ipcRenderer.readDir(rootPath.value);
      console.timeEnd("readDirTimer"); // 结束计时并输出时间
    }
  });
}

const headers = [
  { title: "KEY", value: "name" },
  { title: "VALUE", value: "text" },
  { title: "路径", value: "from" },
];
</script>

<template>
  <PageLayout>
    <template #search>
      <v-text-field
        :model-value="rootPath"
        placeholder="folder"
        prepend-inner-icon="mdi-folder"
        readonly
      >
        <template #append>
          <v-btn @click="selectFiles('')">选择目录</v-btn>
        </template>
      </v-text-field>
    </template>
    <template #body>
      <v-data-table
        :headers="headers"
        :items="keyValueList"
        item-key="name"
      ></v-data-table>
    </template>
  </PageLayout>
</template>

<style scoped></style>
