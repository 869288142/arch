import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "reflect-metadata";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";
import { myContainer } from "./entities";
const ninja = myContainer.get<Warrior>(TYPES.Warrior);
console.log(ninja.fight());
console.log(ninja.sneak());

createApp(App).use(createPinia()).mount("#app");




