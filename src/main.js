// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store/store.js'
import './components/firebaseinit'
import firebase from 'firebase'

import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll)

Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false


router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

/* eslint-disable no-new */
let app;

firebase.auth().onAuthStateChanged( user => {
   if(!app){

    app = new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
   }

});