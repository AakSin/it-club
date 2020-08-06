import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        fcolor:"rgb(221, 220, 220)",
        bcolor:"black"
    },
    mutations:{
        changeThem(state){
            let tcolor= state.fcolor
            state.fcolor=state.bcolor
            state.bcolor=tcolor
        }
    }
})