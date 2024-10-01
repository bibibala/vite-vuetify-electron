import { createApp } from 'vue';
import App from './App.vue';
import vuetify from '@/plugins/vuetify';
import routes from '@/router/index';
import '@/assets/style/bar.css';

const app = createApp(App);

app.use(vuetify);
app.use(routes);

app.mount('#app').$nextTick(() => {
  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message);
  });
});
