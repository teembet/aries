<template>
    <div style="background:white">  
    <div class="content">
<br><br>
         <p>Browse projects across an array of topics and discipline</p>
         <v-flex xs12 sm12>
          <v-text-field
          color= "#f25d13"
            v-model="Filteredtext"
             prepend-inner-icon="search"
            solo
            label="Filter Restaurants"
            clearable
          ></v-text-field>
        </v-flex>
         <v-layout row wrap class="post-wrap">
    <v-flex xs12 sm6 md3 lg3 class="post" v-for="book in filtered" :key="book.id">
       <div @click = "addEmail(book)" class="res-title">
              <router-link
           :to="{
           name: 'Vendor',
           params: {Ref: book.Ref}
            }"> 
      <v-card flat class="post-card">
         <v-img
              :src="book.src"
              height="150"
            ></v-img>

            <div class="vendor-details">
                <p class="vendor-name">{{ book.Name }}</p> 
                <span class="description">{{ book.Bio }}</span>    
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
    <br>
    <center>   <v-btn large color="#f25d13" dark>LOAD MORE</v-btn></center>
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
           VEmail: 'made',
          Filteredtext : '',
           rating: 4 ,
           Details : []
        }
      
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
    computed:{
        ...mapGetters ([
             'getDetails',
             'getVendorEmail'
         ]),
      filtered(){
         const search = this.Filteredtext.toLowerCase().trim();

   if (!search) return this.Details;

   return this.Details.filter(c => c.Name.toLowerCase().indexOf(search) > -1);

      //  return this.Userprojects.filter(post => {
      //   return post.toLowerCase().includes(this.Filteredtext.toLowerCase())
      // });
    }
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
.res-title{ color:rgb(46, 46, 46); text-decoration: none;}
.res-title a { color:rgb(46, 46, 46); text-decoration: none;}
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
 
}

@media (max-width: 767px) {
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