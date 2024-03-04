import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { goodsServiceToken } from "./shared/contants/token";
import { GoodsService } from "./page/index/services";
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
const app = createApp(App)

app.provide(/* key */ goodsServiceToken, /* value */ GoodsService)
app.use(createPinia()).mount("#app");



