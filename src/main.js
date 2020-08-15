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
import Highlights from './components/Highlights/Highlights.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes:[
    {path:"/",component:Home},
    {path:"/events",name:Events,component:()=>import(/*webpackChunkName:"events" */"./components/Events/EventsGrid.vue")},
    {path:"/aboutus",name:AboutUs,component:()=>import(/*webpackChunkName:"aboutus" */"./components/AboutUs/AboutUs.vue")},
    {path:"/results",name:Results,component:()=>import(/*webpackChunkName:"results" */"./components/Results/Results.vue")},
    {path:"/highlights",name:Highlights,component:()=>import(/*webpackChunkName:"highlights" */"./components/Highlights/Highlights.vue")},
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
