<template>
    <div style="background:white">
        <div class="banner" text-xs-center>
        
         <v-layout row wrap>
        <v-flex xs12 sm6 md6>
        <v-card flat class="banner-col-1">
            <v-flex class="bike" xs12 sm12 md12>
         <center><img  src="../assets/bik2.gif" height = "80" alt=""></center>
         </v-flex>
         <div>
            <h1 class="banner-header">We deliver to your doorstep</h1>
         <p class="banner-sub-header">Order tasty foods online from your favorite restaurants</p>
          <v-flex xs12 sm12 md12>
          <v-text-field
            label="Hii there, Looking for something ??"
            color="#f25d13"
          ></v-text-field>
        </v-flex>
        <v-btn color="#f25d13" dark depressed large>SEARCH</v-btn>
        
         </div>
        
        </v-card>

      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-card flat>
          <center><img class="banner-image" src="../assets/foodie.png" alt=""></center>
        </v-card>
      </v-flex>
         </v-layout>
     </div>  
       <div class="top-news">
    <strong>TOP RESTAURANTS</strong> 
       </div>
  
        
      
    <div class="content">
         <v-layout row wrap >
    <v-flex xs12 sm6 md3 lg3 class="res" v-for="book in getDetails" :key="book.id">
      <v-card class="res-res" flat>
        
         <v-img
              :src="book.src"
              height="150"
            ></v-img>

            <div class="vendor-details">
              <div @click = "addEmail(book)" class="title">
              <router-link
           :to="{
           name: 'Vendor',
           params: {Ref: book.Ref}
            }">  <p class="vendor-name" >{{ book.Name }}</p> </router-link></div>

                <span class="description">{{ book.Bio }}</span>    
            </div>
            
        <v-card-actions>
        <v-chip>{{ book.Location }}</v-chip>
          <v-spacer></v-spacer>
          <v-rating readonly v-model="book.Ratings" small color = "#f25d13" background-color="#f25d13"></v-rating>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
    </div>
    <br><br>
    <center> 
      <div class="btn-a">
    <router-link to="/restaurants" > <v-btn large color="#f25d13" dark>LOAD MORE</v-btn> </router-link> </div>
    </center>

  <div class="animation-sec" >
             
         <v-layout row wrap>
             <v-flex xs12 sm6 md6>
        <v-card flat>
          <img class = "sales-anim" src="../assets/sales2.gif"  alt="">
        </v-card>
      </v-flex>
        <v-flex xs12 sm6 md6 class="text-xs-center">
        <v-card flat class="anim-col-1">
         <h1 class="anim-header">Speedy delivery to your doorstep</h1>
         <p class="anim-sub-header">Hungry?? worry no more, Order your favorite food from Restaurants near you and track its delivery to your doorstep</p>
        <div class="route-btn">
          <div class="btn-a">
        <router-link to="/restaurants" >    <v-btn large color="#f25d13" dark depressed>Order Now</v-btn> </router-link>
        </div>
         </div>
        </v-card>

      </v-flex>
      
         </v-layout>
     </div> 
    
     <div class="res-banner" >
         <h1 class="res-header">Are you a Restaurant owner ??</h1>
         <p class="res-sub-header">Join lots other restaurants who benefit 
from having their menus on Aries</p>
<div class="btn-a">
   <router-link to="/help" >       <v-btn style = "color:#f25d13" color="white" large depressed>Get Started</v-btn> </router-link>
  
</div>
     </div> 
    <center> <img src="../assets/food2.png" alt="" class="footer-img"></center>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    data(){
        return{
           rating: 4 ,
           VEmail: 'made'
        }
      
    },
     computed:{
         ...mapGetters ([
             'getDetails',
             'getVendorEmail'
         ]),
   },
   methods:{
     addEmail(book){
       this.VEmail = book.Email
      this.$store.commit('addEmail', this.VEmail)
   }
  }
  }
</script>

<style>
.res {padding-right: 10px; padding-left : 10px;margin-top: 30px;}
.res-res {border-radius: 20px;box-shadow: 1px 5px 30px -3px #e6e6e6;}
.btn-a {text-decoration: none;}
.btn-a a {text-decoration: none;}

.title{ color:rgb(46, 46, 46); text-decoration: none;}
.title a { color:rgb(46, 46, 46); text-decoration: none;}
.route-btn {text-decoration: none; }
.route-btn a {text-decoration: none; }
.anim-pack {text-align: center;}
.footer-img {height:350px}
   .sales-anim {height:400px;}
  .banner-image {height:500px;}
  .banner {padding-left:0px; padding-right: 0px;}
 .banner-header {font-size:43px;color: #f25d13;}
 .banner-sub-header{font-size:16px;color: #8a8a8a;}
 .banner-col-1{padding-top:70px;padding-left:80px;}
  .top-news {font-size:25px;text-align: center;padding-top:20px; margin-top: 20px;margin-bottom:10px;}
 .post-snippet {color:grey;padding-left: 20px;padding-right: 20px;text-align: justify;}
      .post-card {border-radius: 20px;box-shadow: 1px 5px 30px -3px #e6e6e6;}
      .post {padding-right: 10px; padding-left : 10px;margin-top: 30px;}
      .content { padding:20px 70px 20px 70px;}
      .vendor-name {font-size:18px;text-align:left;display: block;padding: 0px;}
      .description {font-size:13px;color: #8a8a8a;display:block;}
      .vendor-details {padding:20px 10px 0px 15px;}
      .bike {text-align: center;}
      .animation-sec {margin-top:100px;padding-right: 100px;}
      .anim-header {font-size:50px;color: #f25d13;}
      .anim-sub-header{font-size:16px;color: #8a8a8a;padding:20px 20px 20px 0px;}
      .anim-col-1{padding-top:20px;padding-right:20px;}
      .res-owners-sec {margin-top:100px;text-align: center;}
      .res-header {font-size:40px;color: #ffffff;}
      .res-sub-header{font-size:16px;color: #ffffff;}
      .res-col-1{padding-top:60px;}
       .res-banner {
         padding: 100px;
         margin: 50px 100px 70px 100px;
  height: 350px;
  text-align: center;
  background-image: -webkit-linear-gradient(270deg, rgba(252, 136, 41, 0.918), rgba(252, 136, 41, 0.918)), url('../assets/image.jpg');
  background-image: linear-gradient(180deg,   rgba(252, 136, 41, 0.918),  rgba(252, 136, 41, 0.918)), url('../assets/image.jpg');
  
  background-size: auto, cover;
  background-repeat: repeat, no-repeat;
  background-attachment: scroll, scroll;
  border-radius: 30px;

  
}
@media (max-width: 991px) {
  .btn-a {text-decoration: none;}
.btn-a a {text-decoration: none;}
   .route-btn {text-decoration: none; }
.route-btn a {text-decoration: none; }
   .anim-pack {text-align: center;}
  .footer-img {height:250px}
  .sales-anim {height:300px;}
   .banner-image {height:400px;}
  .banner {padding-left:20px; padding-right: 20px;}
 .banner-header {font-size:35px;color: #f25d13;}
 .banner-sub-header{font-size:15px;color: #8a8a8a;}
 .banner-col-1{padding-top:30px;padding-left:0px;}
 .top-news {font-size:25px;text-align: center;padding-top:20px; margin-top: 20px;margin-bottom:10px;}
 .post-snippet {color:grey;padding-left: 20px;padding-right: 20px;text-align: justify;}
      .post-card {border-radius: 20px;box-shadow: 1px 5px 30px -3px #e6e6e6;}
      .post {padding-right: 10px; padding-left : 10px;margin-top: 30px;}
      .content { padding:20px 20px 20px 20px;}
      .vendor-name {font-size:18px;text-align:left;display: block;padding: 0px;}
      .description {font-size:13px;color: #8a8a8a;display:block;}
      .vendor-details {padding:20px 10px 0px 15px;}
      .bike {text-align: center;}
      .animation-sec {margin-top:0px;padding-right:0px;}
      .anim-header {font-size:30px;color: #f25d13;}
      .anim-sub-header{font-size:14px;color: #8a8a8a;padding:20px 0px 20px 0px;}
      .anim-col-1{padding-left:20px;padding-right:20px;padding-top:20px;}
      .res-owners-sec {margin-top:100px;text-align: center;}
      .res-header {font-size:40px;color: #ffffff;} 
      .res-sub-header{font-size:16px;color: #ffffff;}
      .res-col-1{padding-top:60px;}
       .res-banner {
         display: none;
         padding: 100px;
         margin: 50px 100px 70px 100px;
  height: 350px;
  text-align: center;
  background-image: -webkit-linear-gradient(270deg, rgba(252, 136, 41, 0.918), rgba(252, 136, 41, 0.918)), url('../assets/image.jpg');
  background-image: linear-gradient(180deg,   rgba(252, 136, 41, 0.918),  rgba(252, 136, 41, 0.918)), url('../assets/image.jpg');
  
  background-size: auto, cover;
  background-repeat: repeat, no-repeat;
  background-attachment: scroll, scroll;
  border-radius: 30px;
}
}

@media (max-width: 767px) {
  .btn-a {text-decoration: none;}
.btn-a a {text-decoration: none;}
  .route-btn {text-decoration: none; }
.route-btn a {text-decoration: none; }
   .anim-pack {text-align: center;}
  .footer-img {height:250px}
  .sales-anim {height:300px;}
   .banner-image {height:400px;}
  .banner {padding-left:20px; padding-right: 20px;}
 .banner-header {font-size:35px;color: #f25d13;}
 .banner-sub-header{font-size:15px;color: #8a8a8a;}
 .banner-col-1{padding-top:30px;padding-left:0px;}
 .top-news {font-size:25px;text-align: center;padding-top:20px; margin-top: 20px;margin-bottom:10px;}
 .post-snippet {color:grey;padding-left: 20px;padding-right: 20px;text-align: justify;}
      .post-card {border-radius: 20px;box-shadow: 1px 5px 30px -3px #e6e6e6;}
      .post {padding-right: 10px; padding-left : 10px;margin-top: 30px;}
      .content { padding:20px 20px 20px 20px;}
      .vendor-name {font-size:18px;text-align:left;display: block;padding: 0px;}
      .description {font-size:13px;color: #8a8a8a;display:block;}
      .vendor-details {padding:20px 10px 0px 15px;}
      .bike {text-align: center;}
      .animation-sec {margin-top:0px;padding-right:0px;}
      .anim-header {font-size:30px;color: #f25d13;}
      .anim-sub-header{font-size:14px;color: #8a8a8a;padding:20px 0px 20px 0px;}
      .anim-col-1{padding-left:20px;padding-right:20px;padding-top:20px;}
      .res-owners-sec {margin-top:100px;text-align: center;}
      .res-header {font-size:40px;color: #ffffff;} 
      .res-sub-header{font-size:16px;color: #ffffff;}
      .res-col-1{padding-top:60px;}
       .res-banner {
         display: none;
         padding: 100px;
         margin: 50px 100px 70px 100px;
  height: 350px;
  text-align: center;
  background-image: -webkit-linear-gradient(270deg, rgba(252, 136, 41, 0.918), rgba(252, 136, 41, 0.918)), url('../assets/image.jpg');
  background-image: linear-gradient(180deg,   rgba(252, 136, 41, 0.918),  rgba(252, 136, 41, 0.918)), url('../assets/image.jpg');
  
  background-size: auto, cover;
  background-repeat: repeat, no-repeat;
  background-attachment: scroll, scroll;
  border-radius: 30px;
}
 
}

@media (max-width: 479px) {
  .btn-a {text-decoration: none;}
.btn-a a {text-decoration: none;}
  .route-btn {text-decoration: none; }
.route-btn a {text-decoration: none; }
  .anim-pack {text-align: center;}
  .footer-img {height:250px}
  .sales-anim {height:300px;}
   .banner-image {height:250px;}
  .banner {padding-left:20px; padding-right: 20px;}
 .banner-header {font-size:35px;color: #f25d13;}
 .banner-sub-header{font-size:15px;color: #8a8a8a;}
 .banner-col-1{padding-top:30px;padding-left:0px;}
 .top-news {font-size:25px;text-align: center;padding-top:20px; margin-top: 20px;margin-bottom:10px;}
 .post-snippet {color:grey;padding-left: 20px;padding-right: 20px;text-align: justify;}
      .post-card {border-radius: 20px;box-shadow: 1px 5px 30px -3px #e6e6e6;}
      .post {padding-right: 10px; padding-left : 10px;margin-top: 30px;}
      .content { padding:20px 20px 20px 20px;}
      .vendor-name {font-size:18px;text-align:left;display: block;padding: 0px;}
      .description {font-size:13px;color: #8a8a8a;display:block;}
      .vendor-details {padding:20px 10px 0px 15px;}
      .bike {text-align: center;}
      .animation-sec {margin-top:0px;padding-right:0px;}
      .anim-header {font-size:30px;color: #f25d13;}
      .anim-sub-header{font-size:14px;color: #8a8a8a;padding:20px 0px 20px 0px;}
      .anim-col-1{padding-left:20px;padding-right:20px;padding-top:20px;}
      .res-owners-sec {margin-top:100px;text-align: center;}
      .res-header {font-size:40px;color: #ffffff;} 
      .res-sub-header{font-size:16px;color: #ffffff;}
      .res-col-1{padding-top:60px;}
       .res-banner {
         display: none;
         padding: 100px;
         margin: 50px 100px 70px 100px;
  height: 350px;
  text-align: center;
  background-image: -webkit-linear-gradient(270deg, rgba(252, 136, 41, 0.918), rgba(252, 136, 41, 0.918)), url('../assets/image.jpg');
  background-image: linear-gradient(180deg,   rgba(252, 136, 41, 0.918),  rgba(252, 136, 41, 0.918)), url('../assets/image.jpg');
  
  background-size: auto, cover;
  background-repeat: repeat, no-repeat;
  background-attachment: scroll, scroll;
  border-radius: 30px;
}


}
      
</style>