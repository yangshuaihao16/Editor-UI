import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import DemoPreview from './components/DemoPreview.vue';
import EditorUI from '../packages/components';

import './assets/style/gg.css';

const app = createApp(App);

// install 组件
app.use(router);
app.use(ElementPlus);
app.use(EditorUI);

// 全局注册组件
app.component('DemoPreview', DemoPreview);

app.mount('#app');
