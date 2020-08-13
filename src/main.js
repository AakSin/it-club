import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue';
import './plugins/bootstrap-vue'
import App from './App.vue';
import VueRouter from 'vue-router';
Vue.config.productionTip = false;
import AOS from 'aos'
import 'aos/dist/aos.css'


// Importing Components
import Home from './components/Home/Home.vue';
import AboutUs from './components/AboutUs/AboutUs.vue';
import Events from './components/Events/EventsGrid.vue';
import Results from './components/Results/Results.vue';
import Images from './components/Images/Images.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes:[
    {path:"/",component:Home},
    {path:"/events",component:Events},
    {path:"/aboutus",component:AboutUs},
    {path:"/results",component:Results},
    {path:"/images",component:Images},
  ]
})

new Vue({
  created () {
    AOS.init()
    AOS.init({
      mirror: true
    })
  },
  
  router,
  render: h => h(App),
}).$mount('#app')
