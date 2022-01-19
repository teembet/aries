<template>
  <div class = "home-pack">
   <div class="home-div" text-xs-center>
        
         <v-layout row wrap>
        <v-flex xs12 sm6 md6>
        <v-card flat class="home-col-1">
            <v-flex class="bike" xs12 sm12 md12>
         <center><img  src="../assets/bik2.gif" height = "80" alt=""></center>
         </v-flex>
         <div>
            <h1 class="home-header">We deliver to your doorstep</h1>
         <p class="home-sub-header">Order tasty foods online from your favorite restaurants</p>
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
          <center><img class="home-image" src="../assets/foodie.png" alt=""></center>
        </v-card>
      </v-flex>
         </v-layout>
     </div> 


     <div class="home-res">
    <strong>TOP RESTAURANTS</strong> 
       </div>

          <div class="home-con">
         <v-layout row wrap >
    <v-flex xs12 sm6 md3 lg3 class="res-post" v-for="book in getDetails" :key="book.id">
    <div @click = "addEmail(book)" class="res-title">
              <router-link
           :to="{
           name: 'Vendor',
           params: {Ref: book.Ref}
            }">   <v-card class="res-card" flat>
        
         <v-img
              :src="book.src"
              height="150"
            ></v-img>

            <div class="res-details">
               <p class="res-name" >{{ book.Name }}</p>

                <span class="res-description">{{ book.Bio }}</span>    
            </div>
            
        <v-card-actions>
        <v-chip>{{ book.Location }}</v-chip>
          <v-spacer></v-spacer>
          <v-rating readonly v-model="book.Ratings" small color = "#f25d13" background-color="#f25d13"></v-rating>
        </v-card-actions>
      </v-card> </router-link></div>
    </v-flex>
  </v-layout>
    </div>

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
import db from './firebaseinit.js'
import { mapGetters } from 'vuex'
import {  firebaseinit } from './firebaseinit.js'
import firebase from 'firebase'
export default {
  data(){
        return{
          Details: [],
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
   created(){
  db.collection('Details').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
             const data = {
            'Name' : doc.data().Name,
           'Bio' : doc.data().Bio,
           'Location' : doc.data().Location,
           'Ratings' : doc.data().Ratings,
          'Ref' : doc.data().Ref,
          'src' : doc.data().src,
             }
             this.Details.push(data)
          })
        }
      )
},
   methods:{
     addEmail(book){
       this.VEmail = book.Email
      this.$store.commit('addEmail', this.VEmail)
   }
  }
}
</script>
<style scoped>
.sales-anim {height:400px;}
.anim-pack {text-align: center;}
.footer-img {height:350px}
   .sales-anim {height:400px;}
.bike {text-align: center;}
      .animation-sec {margin-top:100px;padding-right: 100px;}
      .anim-header {font-size:50px;color: #f25d13;}
      .anim-sub-header{font-size:16px;color: #8a8a8a;padding:20px 20px 20px 0px;}
      .anim-col-1{padding-top:20px;padding-right:20px;}
.btn-a {text-decoration: none;}
.btn-a a {text-decoration: none;}
.res-title{ color:rgb(46, 46, 46); text-decoration: none;}
.res-title a { color:rgb(46, 46, 46); text-decoration: none;}
.res-details {padding:20px 10px 0px 15px;}
.res-name {font-size:18px;text-align:left;display: block;padding: 0px;}
.res-description {font-size:13px;color: #8a8a8a;display:block;}
.res-post {padding-right: 10px; padding-left : 10px;margin-top: 30px;margin-bottom: 30px;}
.res-card {border-radius: 20px;box-shadow: 1px 5px 30px -3px #e6e6e6;}
.home-image {height:500px;}
.home-pack {background: white; }
 .home-div {padding-left:0px; padding-right: 0px;}
 .home-header {font-size:43px;color: #f25d13;}
 .home-sub-header{font-size:16px;color: #8a8a8a;}
 .home-col-1{padding-top:70px;padding-left:80px;}
 .home-res {font-size:25px;text-align: center;padding-top:20px; margin-top: 20px;margin-bottom:10px;}
 .home-con {padding:20px 70px 20px 70px;}
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

}

@media (max-width: 767px) {

}

@media (max-width: 479px) {
  .sales-anim {height:300px;}
 .anim-pack {text-align: center;}
.footer-img {height:250px}
   .sales-anim {height:300px;}
.bike {text-align: center;}
      .animation-sec {margin-top:0px;padding-right: 0px;}
      .anim-header {font-size:30px;color: #f25d13;}
      .anim-sub-header{font-size:14px;color: #8a8a8a;padding:20px 0px 20px 0px;}
      .anim-col-1{padding-left:20px;padding-right:20px;padding-top:20px;}
.btn-a {text-decoration: none;}
.btn-a a {text-decoration: none;}
.res-title{ color:rgb(46, 46, 46); text-decoration: none;}
.res-title a { color:rgb(46, 46, 46); text-decoration: none;}
.res-details {padding:20px 10px 0px 15px;}
.res-name {font-size:18px;text-align:left;display: block;padding: 0px;}
.res-description {font-size:13px;color: #8a8a8a;display:block;}
.res-post {padding-right: 10px; padding-left : 10px;margin-top: 30px;margin-bottom: 30px;}
.res-card {border-radius: 20px;box-shadow: 1px 5px 30px -3px #e6e6e6;}
.home-pack {background: white; }
.home-image {height:250px;}
 .home-div {padding-left:20px; padding-right: 20px;}
 .home-header {font-size:35px;color: #f25d13;}
 .home-sub-header{font-size:14px;color: #8a8a8a;}
 .home-col-1{padding-top:30px;padding-left:0px;}
 .home-res {font-size:25px;text-align: center;padding-top:20px; margin-top: 20px;margin-bottom:10px;}
 .home-con {padding:20px 20px 20px 20px;}
  .res-header {font-size:30px;color: #ffffff;}
      .res-sub-header{font-size:14px;color: #ffffff;}
      .res-col-1{padding-top:60px;}
       .res-banner {
         padding: 80px 10px 0px 10px;;
         margin: 50px 10px 70px 10px;
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



 <div class="container-fluids">
                    <div class="row">
                        <div class="col-sm-1 px-1 left-content">
                            <div class="py-2 sticky-top flex-grow-1">
                                <div class="">
                                        <a href="" class="side-link">
                                                <ion-icon class = "left-content-icons" name="paper"></ion-icon>
                                                <br>
                                                <p class="left-content-text">News</p>
                                               </a>
                                               <a href="" class="side-link">
                                                    <ion-icon class = "left-content-icons" name="pulse"></ion-icon>
                                                    <br>
                                                    <p class="left-content-text">Entertainment</p>
                                                   </a>
                                                   <a href="" class="side-link">
                                                        <ion-icon class = "left-content-icons" name="football"></ion-icon>
                                                        <br>
                                                        <p class="left-content-text">Sports</p>
                                                       </a>
                                                       <a href="" class="side-link">
                                                            <ion-icon class = "left-content-icons" name="barcode"></ion-icon>
                                                            <br>
                                                            <p class="left-content-text">Technology</p>
                                                           </a>
                                                           <a href="" class="side-link">
                                                                <ion-icon class = "left-content-icons" name="people"></ion-icon>
                                                                <br>
                                                                <p class="left-content-text">Politics</p>
                                                               </a>
                                                               <a href="" class="side-link">
                                                                    <ion-icon class = "left-content-icons" name="bookmark"></ion-icon>
                                                                    <br>
                                                                    <p class="left-content-text">Opinion</p>
                                                                   </a>
                                                                   <a href="" class="side-link">
                                                                        <ion-icon class = "left-content-icons" name="chatbubbles"></ion-icon>
                                                                        <br>
                                                                        <p class="left-content-text">Gists</p>
                                                                       </a>
                                                                       <a href="" class="side-link">
                                                                            <ion-icon class = "left-content-icons" name="shirt"></ion-icon>
                                                                            <br>
                                                                            <p class="left-content-text">Fashion</p>
                                                                           </a>
                                                                           <a href="" class="side-link">
                                                                                <ion-icon class = "left-content-icons" name="briefcase"></ion-icon>
                                                                                <br>
                                                                                <p class="left-content-text">Jobs</p>
                                                                               </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm main-content" id="main">
                                <div class="card news-card">
                                        <div class="card-body">
                                          <h6 class="card-title">What Is Your Favourite Nigerian Meal And How Do You Prepare It?<span class="badge card-span">New</span></h6>
                                          <p class="card-text">Nigeria is home to some of the most exotic cuisines in Africa and the world at large. Ranging from ...</p>
                                          <span class="badge badge-pill badge-light card-badge">Sport</span>
                                          <span class="badge badge-pill badge-light card-badge">- Henry Oladeji</span>
                                          <span class="badge badge-pill badge-light card-badge-float">6th Sep, 2019</span>
                                        </div>
                                </div>
                                <div class="card news-card">
                                        <div class="card-body">
                                          <h6 class="card-title">Lionel Messi is named the Best FIFA Men's Player at #TheBestAwards 2019 <span class="badge card-span">New</span></h6>
                                          <p class="card-text">Barcelona Star and Argentina Player Lionel Messi has finally win yet another individual Awards since the...</p>
                                          <span class="badge badge-pill badge-light card-badge">Sport</span>
                                          <span class="badge badge-pill badge-light card-badge">- Henry Oladeji</span>
                                          <span class="badge badge-pill badge-light card-badge-float">6th Sep, 2019</span>
                                        </div>
                                </div>
                                <div class="card news-card">
                                        <div class="card-body">
                                          <h6 class="card-title">BBNaija: Tacha Tells Housemate That She's Bigger Than The Owner Of BBNaija Show<span class="badge card-span">New</span></h6>
                                          <p class="card-text">Big Brother Naija, BBNaija, housemate, Tacha again on Sunday boasted to fellow housemates about her stay in the reality show.Tacha,...</p>
                                          <span class="badge badge-pill badge-light card-badge">Sport</span>
                                          <span class="badge badge-pill badge-light card-badge">- Henry Oladeji</span>
                                          <span class="badge badge-pill badge-light card-badge-float">6th Sep, 2019</span>
                                        </div>
                                </div>
                                <div class="card news-card">
                                        <div class="card-body">
                                          <h6 class="card-title">How My Brother Becomes My Enemy<span class="badge card-span">New</span></h6>
                                          <p class="card-text">My younger brother, always have my back just as i also have his back from our childhood to adulthood. After finishing up my secondary School...</p>
                                          <span class="badge badge-pill badge-light card-badge">Sport</span>
                                          <span class="badge badge-pill badge-light card-badge">- Henry Oladeji</span>
                                          <span class="badge badge-pill badge-light card-badge-float">6th Sep, 2019</span>
                                        </div>
                                </div>
                                <div class="card news-card">
                                        <div class="card-body">
                                          <h6 class="card-title">South Africa must pay for xenophobia<span class="badge card-span">New</span></h6>
                                          <p class="card-text">AS more of our stranded nationals who have responded to the call by the Federal Government to voluntarily return home continue to arrive...</p>
                                          <span class="badge badge-pill badge-light card-badge">Sport</span>
                                          <span class="badge badge-pill badge-light card-badge">- Henry Oladeji</span>
                                          <span class="badge badge-pill badge-light card-badge-float">6th Sep, 2019</span>
                                        </div>
                                </div>
                                <div class="card news-card">
                                        <div class="card-body">
                                          <h6 class="card-title">Lionel Messi is named the Best FIFA Men's Player at #TheBestAwards 2019 <span class="badge card-span">New</span></h6>
                                          <p class="card-text">Barcelona Star and Argentina Player Lionel Messi has finally win yet another individual Awards since the...</p>
                                          <span class="badge badge-pill badge-light card-badge">Sport</span>
                                          <span class="badge badge-pill badge-light card-badge">- Henry Oladeji</span>
                                          <span class="badge badge-pill badge-light card-badge-float">6th Sep, 2019</span>
                                        </div>
                                </div>
                                <div class="card news-card">
                                        <div class="card-body">
                                          <h6 class="card-title">Lionel Messi is named the Best FIFA Men's Player at #TheBestAwards 2019 <span class="badge card-span">New</span></h6>
                                          <p class="card-text">Barcelona Star and Argentina Player Lionel Messi has finally win yet another individual Awards since the...</p>
                                          <span class="badge badge-pill badge-light card-badge">Sport</span>
                                          <span class="badge badge-pill badge-light card-badge">- Henry Oladeji</span>
                                          <span class="badge badge-pill badge-light card-badge-float">6th Sep, 2019</span>
                                        </div>
                        </div>
                        <br><br>
                        <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-center">
                                  <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                  </li>
                                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                                  <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                  </li>
                                </ul>
                              </nav>
                        <br><br>
                        <div class="footer">
                           <p>© 2019 Naijaswift - All right reserved.</p>     
                           <p>Disclaimer: Every member of Naijaswift is solely responsible for what they post</p>     
                        </div>
                        </div>
                        <div class="col-sm-3 ads-content" id="main">
                                <div class="ad-card1"></div>
                                <div class="ad-card2"></div>
                                <div class="ad-card3"></div>
                                <div class="ad-card4"></div>
                        </div>