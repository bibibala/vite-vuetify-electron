<script setup lang="ts">
import { ref } from 'vue';
import PageLayout from '@/components/PageLayout.vue';

const rootPath = ref('');

function selectFiles(source: string) {
  window.ipcRenderer.select(source);
  window.ipcRenderer.selectOver((event, args) => {
    console.log(event, args);
    if (args) {
      rootPath.value = args.response.filePaths[0];
      const res = window.ipcRenderer.readDir(rootPath.value);
      console.log(res);
      // 递归读res，直到返回为null证明是根目录
      // 读取 文件
      // ？？？？？
    }
  });
}
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
      <div class="text-primary">hello world</div>
    </template>
  </PageLayout>
</template>

<style scoped></style>
