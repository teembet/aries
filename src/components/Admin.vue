<template>
<div class="add-menu" >
    <div v-if = "currentUser">
    <v-tabs
      v-model="active"
      color="white"
      slider-color="#f25d13"
      show-arrows
      fixed centered
      class="tabs"
    >
      <v-tab ripple>Menu Management</v-tab>
       <v-tab ripple>Orders</v-tab>
       
       <v-tab-item>
         <v-card flat>
           <br><br>
            <v-layout row wrap>
        <v-flex xs12 sm6 md6>
        <v-card flat class="admin-col-1">
        <new-menu></new-menu>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-card flat>
          <v-toolbar> <h3> {{ currentUser }} </h3>
            <v-spacer></v-spacer>
            <v-btn dark color="#f25d13" class="nav-btn" @click= "logout"> Logout </v-btn></v-toolbar>
           
     
        <menu-list></menu-list>
        </v-card>
      </v-flex>
         </v-layout>
         </v-card>
       </v-tab-item>
       <v-tab-item>
          <v-card flat>
            <br><br>
             <div class="orders">
              <order></order>
         </div>
         </v-card>
       </v-tab-item>
       
      </v-tabs>
  </div> 

    <div v-else>
    <login></login>
  </div>   
</div>
</template>
<script>
import db from './firebaseinit.js';
import firebase from 'firebase';
import { error } from 'util';
import MenuList from "./MenuList.vue"
import NewMenu from "./NewMenu.vue"
import Order from "./Order.vue"
import login from "./LoginAdmin.vue"
export default {
  data(){
    return{
      currentUser: null
    }
  },
    components:{
    'menu-list' : MenuList,
    'new-menu' : NewMenu,
    'order' : Order,
    'login' : login
    },
    created () {
                  if(firebase.auth().currentUser){
                this.currentUser = firebase.auth().currentUser.email;
            }
    },
    methods:{
       logout(){
           firebase.auth().signOut()
           .then(() => {
               this.$router.go({ path: '/admin' })
               
           });
       }
    }
}
</script>



<style scoped>
.order-title {font-size: 25px;}
.orders {padding: 0px 50px 0px 50px;}
.add-menu {padding: 30px 10px 30px 10px;background: white;}
.admin-col-1 {padding: 0px 50px 0px 50px;}


    @media (max-width: 991px) {
         .order-title {font-size: 25px;}
.orders {padding: 0px 50px 0px 50px;}
.add-menu {padding: 30px 10px 30px 10px;background: white;}
.admin-col-1 {padding: 0px 50px 0px 50px;}

    }

    @media (max-width: 767px) {
      .order-title {font-size: 25px;}
.orders {padding: 0px 50px 0px 50px;}
.add-menu {padding: 30px 10px 30px 10px;background: white;}
.admin-col-1 {padding: 0px 50px 0px 50px;}

    }

     @media (max-width: 479px) {
     .order-title {font-size: 25px;}
.orders {padding: 0px 0px 0px 0px;}
.add-menu {padding: 30px 10px 30px 10px;background: white;}
.admin-col-1 {padding: 0px 0px 0px 0px;}

     }
</style>
