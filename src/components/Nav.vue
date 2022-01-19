<template>

<div>
  
   <v-toolbar color="white" height="80" flat>
   <router-link to="/" >  <v-toolbar-title><img src="../assets/logoaries.svg" class="logo" alt="" width="70px"></v-toolbar-title>
   </router-link>
     <v-spacer></v-spacer>
     <v-icon style = "float:right;font-size:40px;color:#f25d13;margin-top:20px;" @click.stop="drawer = !drawer"  
                         class = "hidden-md-and-up">menu</v-icon> 
    <ul class = "hidden-sm-and-down">
      <router-link to="/" ><li  class="nav-link"> <p class= "linka">Home </p> </li> </router-link>
      <router-link to="/restaurants" ><li  class="nav-link"> <p class= "linka">Restaurants</p> </li> </router-link>
      <router-link to="/help" ><li  class="nav-link"> <p class= "linka">Help</p> </li> </router-link>
    
      <router-link to="/loginsignup" ><li v-if=" !isLoggedin" class="nav-link">
   <v-btn color="#f25d13" dark class="nav-btn" > Login/SignUp  </v-btn>  </li></router-link>
 <li  v-if=" isLoggedin" class="nav-link"> <span class="email black-text" ><div> 
   <v-avatar
          :size= 30
          color="grey lighten-4"
        ><div class= "photo">
           <img src= "../assets/user.png" alt="" width="30px" height="30px" >
        </div>
        
        </v-avatar>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >    
      <v-btn flat slot="activator"><strong> {{ user }} </strong></v-btn>
      <v-card flat>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
             <div class= "photo">
           <img src= "../assets/user.png" alt="" width="30px" height="30px" >
        </div>
        
     
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title> {{ user }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ currentUser }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click="fav = !fav"
              >
                <v-icon>favorite</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>
   
        <v-list >
          <v-list-tile @click=" $router.push({path: '/dashboard'})  ">
           <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile>

          <v-list-tile @click="logout">
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
  </div>
  </span> </li> 
            </ul>
  </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
    
     <center>
       
       <div class = "nav-mobile">
         <div>
         <span class="email black-text" v-if="isLoggedin"> <v-avatar
          :size= 50
          color="grey lighten-4"
        >
        <div class= "photo">
           <img src= "../assets/user.png" alt="" width="50px" >
        </div>
        </v-avatar>
         </span> 
       </div> 
        <br>
        <h3> {{ user }} </h3>
       <div class= "nav-mobile-link" >  <router-link to="/" ><strong>Home</strong> </router-link> </div>
        <div class= "nav-mobile-link" ><router-link to="/restaurants" ><strong>Restaurants</strong> </router-link></div>
       <div class= "nav-mobile-link" v-if="isLoggedin" ><router-link to="/dashboard" ><strong>Dashboard</strong> </router-link></div>
            <div class= "nav-mobile-link" >  <router-link to="/help" ><strong>Help</strong> </router-link> </div>
                <div v-if="!isLoggedin">
                   <router-link to="LoginSignup" >
                <v-btn color= "#f25d13" dark class="log-btn"> Login/SignUp  </v-btn> </router-link> 
                </div>
                <div v-if="isLoggedin">
                  
                <v-btn color= "#f25d13" dark class="log-btn"  @click= "logout"> Logout </v-btn> 
                </div>
                </div>
     </center>
       
    </v-navigation-drawer>
 
</div>
 
</template>

<script>
import db from './firebaseinit.js'
import {  firebaseinit } from './firebaseinit.js'
import firebase from 'firebase'

export default {
     data(){
      return{
        fav: true,
      menu: false,
      message: false,
      hints: true,
           photo: '',
          isLoggedin : false,
          currentUser : '',
          user: '',
            drawer: null,
        items: [
          { title: 'Home', icon: 'home' },
          { title: 'About', icon: 'question_answer' },
          { title: 'Blog', icon: 'message' },
          { title: 'Our Programmes', icon: 'dashboard' },
          { title: 'Podcasts', icon: 'mic' },
          { title: 'Contact Us', icon: 'phone' }
        ]
      }
    },
    created(){
            if(firebase.auth().currentUser){
              
                this.isLoggedin = true;
                this.currentUser = firebase.auth().currentUser.email;
                 db.collection('users').where('Email', '==', this.currentUser).get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
            this.user = doc.data().Fullname
          })
        } 
      )
            }
    },
    methods:{
       logout(){
           firebase.auth().signOut()
           .then(() => {
               this.$router.go({ path: this.$router.path })
           });
       }
    }
}
</script>


<style scoped>
.nav-link {display: inline-block;margin-right: 40px;
              margin-top: 20px;color:#f25d13 ; }
 .nav-link a{color:#f25d13; text-decoration: none; }
   .nav-link :hover {color: #272727; transition: all 1s; }
  .logo {margin-top:20px;margin-left :50px;}

  .photo {width: 30px; height: 30px;}
  .linka { font-size: 15px;}
 .log-btn  {color: white; text-decoration: none; }
 .log-btn a{color: white; text-decoration: none; }
.nav-mobile-link {font-size: 25px; margin: 20px 0px 20px 0px;}
.nav-mobile-link a {color: rgb(36, 36, 36); text-decoration: none;}
.nav-mobile-link :hover {color: #f25d13; transition: all 1s; }
.nav-mobile { padding: 40px 0px 40px 0px}


 @media (max-width: 991px) {
 .nav-link {display: inline-block;margin-right: 40px;
              margin-top: 20px;color:#f25d13 ; }
 .nav-link a{color:#f25d13; text-decoration: none; }
   .nav-link :hover {color: #272727; transition: all 1s; }
  .logo {margin-top:20px;margin-left :0px;}
 }

 @media (max-width: 767px) {
.nav-link {display: inline-block;margin-right: 40px;
              margin-top: 20px;color:#f25d13 ; }
 .nav-link a{color:#f25d13; text-decoration: none; }
   .nav-link :hover {color: #272727; transition: all 1s; }
  .logo {margin-top:20px;margin-left :0px;}
 }

 @media (max-width: 479px) {
.nav-link {display: inline-block;margin-right: 40px;
              margin-top: 20px;color:#f25d13 ; }
 .nav-link a{color:#f25d13; text-decoration: none; }
   .nav-link :hover {color: #272727; transition: all 1s; }
  .logo {margin-top:20px;margin-left :0px;}
 }
</style>
