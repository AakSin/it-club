import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
Vue.config.productionTip = false;

// Importing Components
import Home from './components/Home/Home.vue';
import AboutUs from './components/AboutUs/AboutUs.vue';
import Events from './components/Events/EventsGrid.vue';

Vue.use(VueRouter);
Vue.use(Vuex);
const router = new VueRouter({
  mode:'history',
  routes:[
    {path:"/",component:Home},
    {path:"/events",component:Events},
    {path:"/aboutus",component:AboutUs},
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
