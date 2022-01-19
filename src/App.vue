<template>
  <v-app>
    <app-nav></app-nav>
    <v-content>
    
      <router-view/>
    
    </v-content>
    <app-footer></app-footer>
    <div  class = "hidden-md-and-up"> Active: {{ bottomNav }}</div>

    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="white"
      style ="position: fixed;"
      class = "hidden-md-and-up"
    >
   <v-btn
        color="#f25d13"
        flat
        value="recent"
        @click="toHome"
      >
        <v-icon>home</v-icon>
      </v-btn> 

<v-btn
        color="#f25d13"
        flat
        value="favorites"
        @click="toStore"
      >
        <v-icon>store</v-icon>
      </v-btn> 

   <v-btn
        color="#f25d13"
        flat
        value="nearby"
        @click="toDash"
      >
       <v-icon>person</v-icon>
      </v-btn>

  <v-btn
        color="#f25d13"
        flat
        value="contact"
        @click="toHelp"
      >
        <v-icon>error_outline</v-icon>
      </v-btn> 
    </v-bottom-nav>
  </v-app>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Cart from './components/Cart.vue'

export default {
  
  components:{
    'app-nav' : Nav,
    'app-footer': Footer,
     'app-cart' : Cart
  },
  data(){
    return{
      dialog: false,
      bottomNav: 'recent'
    }
  },
  methods:{
    toHome(){
      this.$router.push({ path: '/'})
    },
    toStore(){
this.$router.push({ path: '/restaurants'})
    },
    toDash(){
this.$router.push({ path: '/dashboard'})
    },
    toHelp(){
this.$router.push({ path: '/help'})
    }
  }
}
</script>
