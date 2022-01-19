<template>
<div>
<div class="vendor">

     <div class="ven-photo">
        <h1 class="ven-header">{{ this.Name }}</h1>
         <p class="ven-sub-header">Join lots other restaurants who benefit 
from having their menus on Aries</p>
     <v-rating readonly v-model = "Ratings"  color = "white" background-color="white">
     </v-rating>
  
     </div>
    <div>
    <v-tabs
      v-model="active"
      color="white"
      slider-color="#f25d13"
      show-arrows
      fixed centered
      class="tabs"
    >
      <v-tab ripple><a  class="tab-item" href="#main-meals" v-smooth-scroll="{ duration: 1000, offset: -50 }">Main Meals</a> </v-tab>
       <v-tab ripple><a class="tab-item" href="#soup" v-smooth-scroll="{ duration: 1000, offset: -50 }">Soup</a></v-tab>
        <v-tab ripple><a  class="tab-item" href="#swallows" v-smooth-scroll="{ duration: 1000, offset: -50 }">Swallows</a></v-tab>
         <v-tab ripple><a class="tab-item" href="#sides" v-smooth-scroll="{ duration: 1000, offset: -50 }">Sides</a></v-tab>
          <v-tab ripple><a  class="tab-item" href="#drinks" v-smooth-scroll="{ duration: 1000, offset: -50 }">Drinks</a></v-tab>
    </v-tabs>
  </div>
  
 <v-layout row wrap> 

        <v-flex xs12 sm6 md6>
         <v-card flat class="menu"> 
            <v-expansion-panel flat>
    <v-expansion-panel-content>
      <div slot="header" class="vendor-header" id="main-meals"> <strong> Main Meals</strong></div>
      <v-card>
       <v-list two-line>
            <v-list-tile
            class="food-slot"
              :key="item.title"
              avatar
              ripple
              v-for="item in MainMeals ">
              <v-list-tile-content>
                <v-list-tile-title class="food-name">{{ item.Name }}</v-list-tile-title>
                <v-list-tile-sub-title class="portion-text">₦{{ item.Price }}</v-list-tile-sub-title>
                
              </v-list-tile-content>
            
              <v-list-tile-action>
               
                 <v-btn fab dark color="#f25d13" depressed class="meal-btn" @click="Tobasket(item)">
                <p>+</p>
                </v-btn>
              </v-list-tile-action>

            </v-list-tile>
       </v-list>
        </v-card>
   
   
   
    </v-expansion-panel-content>
        <v-expansion-panel-content>
      <div slot="header" class="vendor-header" id="soup"><strong>Soup</strong></div>
      <v-card>
         <v-list two-line>
          <div>
            <v-list-tile
            class="food-slot"
              :key="item.title"
              avatar
              ripple
              v-for="item in Soup">
              <v-list-tile-content>
                <v-list-tile-title class="food-name">{{ item.Name }}</v-list-tile-title>
                <v-list-tile-sub-title class="portion-text">₦{{ item.Price }}</v-list-tile-sub-title>
                
              </v-list-tile-content>
            
              <v-list-tile-action>
               
                 <v-btn fab dark color="#f25d13" depressed class="meal-btn" @click="Tobasket(item)">
                <p>+</p>
                </v-btn>
              </v-list-tile-action>

            </v-list-tile>
      
          </div>
        </v-list>
        </v-card>
    </v-expansion-panel-content>
        <v-expansion-panel-content>
      <div slot="header" class="vendor-header" id="swallows"><strong>Swallows</strong></div>
      <v-card>
        <v-list two-line>
          <div>
            <v-list-tile
            class="food-slot"
              :key="item.title"
              avatar
              ripple
              v-for = "item in Swallows">
              <v-list-tile-content>
                <v-list-tile-title class="food-name">{{ item.Name }}</v-list-tile-title>
                <v-list-tile-sub-title class="portion-text">₦{{ item.Price }}</v-list-tile-sub-title>
                
              </v-list-tile-content>
            
              <v-list-tile-action>
               
                 <v-btn fab dark color="#f25d13" depressed class="meal-btn" @click="Tobasket(item)">
                <p>+</p>
                </v-btn>
              </v-list-tile-action>

            </v-list-tile>
      
          </div>
        </v-list>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content>
      <div slot="header" class="vendor-header" id="sides"><strong>Sides</strong></div>
      <v-card>
              <v-list two-line>
          <div>
            <v-list-tile
            class="food-slot"
              :key="item.title"
              avatar
              ripple
              v-for="item in Sides">
              <v-list-tile-content>
                <v-list-tile-title class="food-name">{{ item.Name }}</v-list-tile-title>
                <v-list-tile-sub-title class="portion-text">₦{{ item.Price }}</v-list-tile-sub-title>
                
              </v-list-tile-content>
            
              <v-list-tile-action>
               
                 <v-btn fab dark color="#f25d13" depressed class="meal-btn" @click="Tobasket(item)">
                <p>+</p>
                </v-btn>
              </v-list-tile-action>

            </v-list-tile>
      
          </div>
        </v-list>
      </v-card>
    </v-expansion-panel-content>
        <v-expansion-panel-content>
      <div slot="header" class="vendor-header" id="drinks"><strong>Drinks</strong></div>
      <v-card>
        <v-list two-line>
          <div>
            <v-list-tile
            class="food-slot"
              :key="item.title"
              avatar
              ripple
              v-for="item in getDrinks">
              <v-list-tile-content>
                <v-list-tile-title class="food-name">{{ item.Name }}</v-list-tile-title>
                <v-list-tile-sub-title class="portion-text">₦{{ item.Price }}</v-list-tile-sub-title>
                
              </v-list-tile-content>
            
              <v-list-tile-action>
               
                 <v-btn fab dark color="#f25d13" depressed class="meal-btn" @click="Tobasket(item)">
                <p>+</p>
                </v-btn>
              </v-list-tile-action>

            </v-list-tile> 
          </div>
        </v-list>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
        
      </v-card>

      </v-flex>
      <v-flex xs12 sm6 md6 class="hidden-sm-and-down">
        <v-card flat class="cart">
          
          <app-cart :Basket = 'basket' :Res = "Name"></app-cart>
          
        </v-card>
      </v-flex>
          <v-btn
         class = "hidden-md-and-up"
              absolute
              dark
              fab
             bottom
              right
              color="#f25d13"
              @click="dialog = true"
            >
              <v-icon>shopping_cart</v-icon>
            </v-btn>
 
        <v-dialog
      v-model="dialog"
      max-width="350"
      
    >
      <v-card class="dialog">
        <v-btn icon dark @click="dialog = false">
            <v-icon color="#f25d13" class="close">close</v-icon>
          </v-btn>
       <center> <v-icon width= "200px" color="#f25d13" class="cart-icon">shopping_cart</v-icon> </center> 
           <br>
<app-cart :Basket = 'basket' :Res = "Name" ></app-cart>
        <v-card-actions>  
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
         </v-layout>
</div>
 <v-layout>
  
      </v-layout>

  </div>
</template>

<script>
import db from './firebaseinit.js'
import {  firebaseinit } from './firebaseinit.js'
import firebase from 'firebase'
import { mapGetters } from 'vuex'
import Cart from './Cart.vue'
export default {
    
    data () {
      return {
        Name: '',
        Email: '',
        Ratings: 0,
        dialog: false,
       basket:[],
       restu: 'Gbolly',
       MainMeals: [],
       Soup: [],
       Swallows: [],
       Sides: [],
       Drinks: [],
       test:[],
    
          rating: 4 ,
        selected: [2],
        Emailma: '',
        getUser: ''
      }
    },
    created(){
           
     db.collection('Menu001').doc(this.getVendorEmail).collection('Mainmeals').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data = {
              'Id' : doc.id,
              'Name' : doc.data().Name,
              'Price' : doc.data().Price
           }
           this.MainMeals.push(data)
          })
        } 
      )
        db.collection('Menu001').doc(this.getVendorEmail).collection('Soup').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data = {
              'Id' : doc.id,
              'Name' : doc.data().Name,
              'Price' : doc.data().Price
           }
           this.Soup.push(data)
          })
        } 
      )
        db.collection('Menu001').doc(this.getVendorEmail).collection('Swallows').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data = {
              'Id' : doc.id,
              'Name' : doc.data().Name,
              'Price' : doc.data().Price
           }
           this.Swallows.push(data)
          })
        } 
      )
        db.collection('Menu001').doc(this.getVendorEmail).collection('Sides').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data = {
              'Id' : doc.id,
              'Name' : doc.data().Name,
              'Price' : doc.data().Price
           }
           this.Sides.push(data)
          })
        } 
      )
        db.collection('Menu001').doc(this.getVendorEmail).collection('Drinks').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data = {
              'Id' : doc.id,
              'Name' : doc.data().Name,
              'Price' : doc.data().Price
           }
           this.Drinks.push(data)
          })
        } 
      )
    },
      beforeRouteEnter (to, from, next) {
      db.collection('Details').where('Ref', '==', to.params.Ref).get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
            next(vm => {
               vm.Name = doc.data().Name
            vm.Email = doc.data().Email
            vm.Ratings = doc.data().Ratings
            })
           
          })
        }
      )

  },
  watch: {
    '$route' : 'fetchData'
  },
   computed:{
         ...mapGetters ([
             'getMain',
             'getSoup',
             'getSwallows',
             'getSides',
             'getDrinks',
             'getDetails',
             'getVendorEmail'
         ]),
   },
    components: {
      'app-cart' : Cart
    },

    methods: {
      fetchData(){
      db.collection('Details').where('Ref', '==', this.$route.params.Ref).get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
            this.Name = doc.data().Name
            this.Email = doc.data().Email
            this.Ratings = doc.data().Ratings

          })
        }
      )
        
    },
      toggle (index) {
        const i = this.selected.indexOf(index)

        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(index)
        }
      },
        
      Tobasket(item){
        this.basket.push({
          Name: item.Name,
          Price: item.Price,
          Quantity: 1
        })
      }

    }
}
</script>

<style scoped>
.close {font-size:40px;}
.cart-icon {font-size: 50px;}
.cart-btn {position: fixed; bottom: 9%;}
.dialog {padding: 50px;}
.food-slot {border-bottom: 1px solid rgb(241, 241, 241)}
.food-name {font-size: 15px;}
.bottom-icon {color:white;text-decoration: none;}
.tab-item {color: #f25d13;text-decoration: none; }
.vendor-header {font-size: 17px;}
.vendor {background:white;padding: 30px 100px 10px 100px;}
.cart {padding:20px 50px 20px 50px;}
.menu {padding:20px 0px 20px 0px;}
.meal-btn {width: 20px;height: 20px;}
.portion-text {color: rgb(209, 209, 209);font-size: 12px;}
 .res-owners-sec {margin-top:100px;text-align: center;}
      .res-col-1{padding-top:60px;}
      
.ven-header {font-size:35px;color: #ffffff;}
.ven-sub-header{font-size:14px;color: #ffffff;}
.ven-photo {  padding: 100px 0px 0px 0px;  margin: 0px 0px 20px 0px;height: 350px;text-align: center;
background-image: linear-gradient(180deg,   rgba(252, 136, 41, 0.918),  rgba(252, 136, 41, 0.918)), url('../assets/rees.jpg');
  
  background-size: auto, cover;
  background-repeat: repeat, no-repeat;
  background-attachment: scroll, scroll;
  border-radius: 30px;
}

@media (max-width: 991px) {
  .cart-btn {position: fixed; bottom: 8%;}
.dialog {padding: 30px 10px 20px 10px;}
.vendor-header {font-size: 17px;}
.vendor {background:white;padding: 30px 10px 10px 10px;}
.cart {padding:20px 50px 20px 50px;}
.menu {padding:20px 0px 20px 0px;}
.meal-btn {width: 20px;height: 20px;}
.portion-text {color: rgb(209, 209, 209);font-size: 12px;}
 .res-owners-sec {margin-top:100px;text-align: center;}

      .res-col-1{padding-top:60px;}
.ven-photo {  padding: 80px 10px 0px 10px;  margin: 0px 0px 20px 0px;height: 300px;text-align: center;
background-image: linear-gradient(180deg,   rgba(252, 136, 41, 0.918),  rgba(252, 136, 41, 0.918)), url('../assets/rees.jpg');
  
  background-size: auto, cover;
  background-repeat: repeat, no-repeat;
  background-attachment: scroll, scroll;
  border-radius: 30px;
}

}

@media (max-width: 767px) {

  .cart-btn {position: fixed; bottom: 8%;}
.dialog {padding: 30px 10px 20px 10px;}
.vendor-header {font-size: 17px;}
.vendor {background:white;padding: 30px 10px 10px 10px;}
.cart {padding:20px 50px 20px 50px;}
.menu {padding:20px 0px 20px 0px;}
.meal-btn {width: 20px;height: 20px;}
.portion-text {color: rgb(209, 209, 209);font-size: 12px;}
 .res-owners-sec {margin-top:100px;text-align: center;}

      .res-col-1{padding-top:60px;}
.ven-photo {  padding: 80px 10px 0px 10px;  margin: 0px 0px 20px 0px;height: 300px;text-align: center;
background-image: linear-gradient(180deg,   rgba(252, 136, 41, 0.918),  rgba(252, 136, 41, 0.918)), url('../assets/rees.jpg');
  
  background-size: auto, cover;
  background-repeat: repeat, no-repeat;
  background-attachment: scroll, scroll;
  border-radius: 30px;
}

 
}

@media (max-width: 479px) {
  .cart-btn {position: fixed; bottom: 8%;}
.dialog {padding: 30px 10px 20px 10px;}
.vendor-header {font-size: 17px;}
.vendor {background:white;padding: 30px 10px 10px 10px;}
.cart {padding:20px 50px 20px 50px;}
.menu {padding:20px 0px 20px 0px;}
.meal-btn {width: 20px;height: 20px;}
.portion-text {color: rgb(209, 209, 209);font-size: 12px;}
 .res-owners-sec {margin-top:100px;text-align: center;}

      .res-col-1{padding-top:60px;}
.ven-photo {  padding: 80px 10px 0px 10px;  margin: 0px 0px 20px 0px;height: 300px;text-align: center;
background-image: linear-gradient(180deg,   rgba(252, 136, 41, 0.918),  rgba(252, 136, 41, 0.918)), url('../assets/rees.jpg');
  
  background-size: auto, cover;
  background-repeat: repeat, no-repeat;
  background-attachment: scroll, scroll;
  border-radius: 30px;
}

}
</style>
