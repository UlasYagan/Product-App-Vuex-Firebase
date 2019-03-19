import Vue from "vue";
import Vuex from 'vuex';
import product from './modules/product';


//Load Vuex
Vue.use(Vuex);

//Create store

export default new Vuex.Store({
   modules: {
    product
   }

});







