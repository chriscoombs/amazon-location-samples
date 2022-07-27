import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import "@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css";
import "maplibre-gl-js-amplify/dist/public/amplify-geocoder.css";
import "maplibre-gl/dist/maplibre-gl.css";


import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-vue/styles.css';
Amplify.configure(awsconfig);

const app = createApp(App)
app.config.productionTip = false;
app.use(ElementPlus);
app.mount('#app')
