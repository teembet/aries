import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations } from 'vuexfire'
import createEasyFirestore from 'vuex-easy-firestore'
import { Order1Module } from './Menu001.js'
import { DetailsModule } from './Menu001.js'
import { MainModule } from './Menu001.js'
import { SoupModule } from './Menu001.js'
import { SwallowsModule } from './Menu001.js'
import { SidesModule } from './Menu001.js'
import { DrinksModule } from './Menu001.js'
import { easyFirestore } from './Menu001.js'
Vue.use(Vuex)


  export const store = new Vuex.Store({
    plugins: [easyFirestore],
    mutations: {...firebaseMutations},
    modules: {
      MainModule,
      SoupModule,
      SwallowsModule,
      SidesModule,
      DrinksModule,
      Order1Module,
      DetailsModule

    }
  })
  
  store.dispatch('MainModule/openDBChannel')
  store.dispatch('SoupModule/openDBChannel')
  store.dispatch('SwallowsModule/openDBChannel')
  store.dispatch('SidesModule/openDBChannel')
  store.dispatch('DrinksModule/openDBChannel')
  store.dispatch('Order1Module/openDBChannel')
  store.dispatch('DetailsModule/openDBChannel')