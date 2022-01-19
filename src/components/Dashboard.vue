<template>
    <div class="dashboard">
   <v-tabs
      v-model="active"
      color="white"
      slider-color="#f25d13"
      show-arrows
      fixed centered
      class="tabs"
    >
      <v-tab ripple>Order History</v-tab>
       <v-tab ripple>Account Settings</v-tab>

       <v-tab-item>
         <div v-if= "WOrders.length > 0">
       <v-layout row wrap>
         <v-flex xs12 sm6 md3 lg3 class="post" v-for=" order in WOrders " :key = "order.id">
           <v-card class="post-card">
             <v-card-actions>
            <v-chip color="#f25d13" style="color: white"> <h3>₦{{ order.OrderTotal }}</h3></v-chip> 
            <v-spacer></v-spacer>
            <v-icon color="#f25d13" >date_range</v-icon>
            <h4 class="order-date">{{ order.Date }}</h4>
             </v-card-actions>
                   <v-list two-line>

               <template v-for= "(item, index) in order.AllOrders" >
            <v-list-tile class="food-slot" :key="index" avatar ripple   >
              <v-list-tile-content>
                <v-list-tile-title class="food-name">{{ item.Name }}</v-list-tile-title>
                <v-list-tile-sub-title class="portion-text">₦{{ item.Price }}</v-list-tile-sub-title>
                
              </v-list-tile-content>
            
              <v-list-tile-action>
              <h4 class="food-name">{{ item.Quantity }} </h4>  
              </v-list-tile-action>
            </v-list-tile>
     
               </template>
               
        </v-list>
              <v-card-actions class="footer-order">
                <v-btn flat>
                <v-icon color="#f25d13" class="ship-icon">local_shipping</v-icon>
            <h4>{{ order.DeliveryStatus }}</h4></v-btn>
            <v-spacer></v-spacer>
            <div class="btn-a">
          <router-link
           :to="{
           name: 'Track',
           params: {Ref: order.OrderId}
            }"> 
           <v-btn outline color="#f25d13" dark >Track Order</v-btn></router-link> </div>
             </v-card-actions>
             
             
           </v-card>
         </v-flex>
         </v-layout>
         </div>
         <div v-else>
           <br>
           <br>
           <br>
            <center><h1>Wow!! you haven't ordered any food yet??</h1> 
            <br><br>
            <v-btn color="#f25d13" dark @click="toRes">Order Now</v-btn></center>
         </div>
       </v-tab-item>
       <v-tab-item>
       <v-flex xs12 sm12>
      <v-card class= "content-box">
          <h2 class="hidden-sm-and-down">UPDATE PROFILE</h2>
           <v-snackbar
      v-model="snackbar"
      absolute
      right
      color="success"
    >
      <span>Operation Successful</span>
      <v-icon dark>check_circle</v-icon>
    </v-snackbar>
    <v-form ref="form" @submit.prevent= "submit" >
      <v-container grprojectId-list-xl fluprojectId>
        <v-layout wrap>
          <v-flex xs12 sm6>
            <v-text-field
              v-model= "name"
            :rules= "rules.name"
              color="#f25d13"
              label="Full Name"
              required
            ></v-text-field>
          </v-flex>
            <v-flex xs12 sm6>
               <v-text-field
              v-model= "depart"
              :rules= "rules.depart"
              color="#f25d13"
              label="Department"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
               <v-select
              v-model="Shostel"
                 :items="hostel"
             color="#f25d13"
              label="Hostel"
               required
    ></v-select>
          </v-flex>
          <v-flex xs12 sm6>
               <v-text-field
              v-model= "phone"
              :rules= "rules.number"
              color="#f25d13"
              label="Phone Number"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
      <br>
      <br>
      <v-card-actions>
        <v-btn flat >Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="#f25d13"
          type="submit"
          dark
        >UPDATE PROFILE</v-btn>
      </v-card-actions>
    
    </v-form> 
  </v-card>
    </v-flex>  
       </v-tab-item>

      </v-tabs>
    </div>
</template>

<script>
import db from './firebaseinit.js'
import { mapGetters } from 'vuex'
import {  firebaseinit } from './firebaseinit.js'
import firebase from 'firebase'
export default {
     data () {
      return {
        currentUser: '',
        phone: '',
        snackbar: false,
        hostel:['Male Silver 1','Male Silver 2','Male Silver 3','Female Silver 1','Female Bronze','Male Hall'],
        number : '',
         name: '',
        depart: '', 
        Shostel: '',
        rules: {
          name: [val => (val || '').length > 0 || 'This field is required'],
           depart: [val => (val || '').length > 0 || 'This field is required'],
              number: [val => (val || '').length > 0 || 'This field is required'],
              
        },
        WOrders : [],

    
      }
    },
    created(){
     if(firebase.auth().currentUser){
                this.currentUser = firebase.auth().currentUser.email;
                  db.collection('users').where('Email', '==', this.currentUser).get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
            this.name = doc.data().Fullname,
            this.phone = doc.data().PhoneNumber,
            this.depart = doc.data().Department,
            this.Shostel = doc.data().Hostel
          })
        } 
      )
    db.collection('users').doc(this.currentUser).collection('Orders').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
            const data = {
              'Date' : doc.data().Date,
             'Address': doc.data().Address,
             'AllOrders': doc.data().AllOrders,
             'Customer': doc.data().Customer,
             'DeliveryStatus': doc.data().DeliveryStatus,
             'Email': doc.data().Email,
             'OrderId': doc.data().OrderId,
             'OrderTotal': doc.data().OrderTotal,
             'PaymentStatus': doc.data().PaymentStatus,
             'PaymentType': doc.data().PaymentType,
           }
           this.WOrders.push(data)
          })
        } 
      )
      
     }
     },
      watch: {
    '$route' : 'fetchData'
  },
  methods:{
    toRes(){
      this.$router.push({ path: '/restaurants'})
    },
     submit () {
           db.collection('users').where('Email', '==', this.currentUser).get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
            doc.ref.update(
            {
              Fullname : this.name,
              Hostel : this.Shostel,
              Department : this.depart,
              PhoneNumber: this.phone,
            }
            )
       .then(docRef => this.$router.push('/dashboard'))
       .catch(error => console.log(err))

        this.snackbar = true
      

      })
        }
           )},

  }
}
</script>

<style scoped>
.btn-a {text-decoration: none;}
.btn-a a {text-decoration: none;}

.footer-order {background: rgb(250, 250, 250);}
.ship-icon {font-size: 25px;margin-right:10px;}
.food-name {color: rgb(73, 73, 73);font-size: 14px}
.portion-text {font-size: 10px;}
.order-date {color: rgb(209, 209, 209);font-size: 13px; width:135px;overflow: hidden; text-overflow: ellipsis;white-space: nowrap}
.content-box {padding: 50px 50px 50px 50px;}
 .post-card {border-radius: 20px;box-shadow: 1px 5px 30px -3px #e6e6e6;}
      .post {padding-right: 10px; padding-left : 10px;margin-top: 30px;margin-bottom: 30px;}
.dashboard {background: white; padding: 30px 50px 50px 50px;}


    @media (max-width: 991px) {
      .btn-a {text-decoration: none;}
.btn-a a {text-decoration: none;}

               .footer-order {background: rgb(250, 250, 250);}
.ship-icon {font-size: 25px;margin-right:10px;}
.food-name {color: rgb(73, 73, 73);font-size: 14px}
.portion-text {font-size: 10px;}
.order-date {color: rgb(209, 209, 209);font-size: 13px; width:135px;overflow: hidden; text-overflow: ellipsis;white-space: nowrap}
.content-box {padding: 10px;}
 .post-card {border-radius: 20px;box-shadow: 1px 5px 30px -3px #e6e6e6;}
      .post {padding-right: 10px; padding-left : 10px;margin-top: 20px;margin-bottom: 20px;}
.dashboard {background: white; padding: 30px 10px 10px 10px;}
      
    }
       @media (max-width: 767px) {
         .btn-a {text-decoration: none;}
.btn-a a {text-decoration: none;}

                  .footer-order {background: rgb(250, 250, 250);}
.ship-icon {font-size: 25px;margin-right:10px;}
.food-name {color: rgb(73, 73, 73);font-size: 14px}
.portion-text {font-size: 10px;}
.order-date {color: rgb(209, 209, 209);font-size: 13px; width:135px;overflow: hidden; text-overflow: ellipsis;white-space: nowrap}
.content-box {padding: 10px;}
 .post-card {border-radius: 20px;box-shadow: 1px 5px 30px -3px #e6e6e6;}
      .post {padding-right: 10px; padding-left : 10px;margin-top: 20px;margin-bottom: 20px;}
.dashboard {background: white; padding: 30px 10px 10px 10px;}
       }
         @media (max-width: 479px) {
           .btn-a {text-decoration: none;}
.btn-a a {text-decoration: none;}

           .footer-order {background: rgb(250, 250, 250);}
.ship-icon {font-size: 25px;margin-right:10px;}
.food-name {color: rgb(73, 73, 73);font-size: 14px}
.portion-text {font-size: 10px;}
.order-date {color: rgb(209, 209, 209);font-size: 13px; width:135px;overflow: hidden; text-overflow: ellipsis;white-space: nowrap}
.content-box {padding: 10px;}
 .post-card {border-radius: 20px;box-shadow: 1px 5px 30px -3px #e6e6e6;}
      .post {padding-right: 10px; padding-left : 10px;margin-top: 20px;margin-bottom: 20px;}
.dashboard {background: white; padding: 30px 10px 10px 10px;}

         }
</style>
