import Vue from 'vue';
import App from './App';
import MyHello from "./MyHello.vue";

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: MyHello },
  { path: '/bar', component: App }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')