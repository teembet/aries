<template>
<div class="content">
   
    <v-flex xs12 sm12 md12 hidden-sm-and-down>
        <v-card class="content-box" > 
            <center>
            <div class="details-tracking">
              <v-layout row wrap>          
            <v-flex xs12 sm12 md3>
            <h3>TRACKING CODE</h3>
            <br>
            {{ OrderId }}
            </v-flex>
            <v-flex xs12 sm12 md3>
                 <h3>RESTAURANT</h3>
                 <br>
            {{ this.Vendor }}
            </v-flex >
            <v-flex xs12 sm12 md3>
             <h3>PAYMENT STATUS</h3>
               <br>
            {{ PaymentStatus }}
            </v-flex>
            
            <v-flex xs12 sm12 md3>
            <h3>DELIVERY STATUS</h3>
              <br>
            {{ DeliveryStatus }}
            </v-flex>
              </v-layout></div></center>
            <v-stepper class="stepper">
    <v-stepper-header>
      <v-stepper-step
        complete
        step="1"
        color="#f25d13"
      >
       <h3>Confirmed Order</h3> 
      </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step
      color="#f25d13"
        complete
        step="2"
      >
      <h3> Order in transit </h3>

      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        step="3"
      >
      <h3>Delivered</h3>  
      </v-stepper-step>
    </v-stepper-header>
  </v-stepper>
  <center><img  src="../assets/bik2.gif" height = "80" alt=""></center>
  <v-progress-linear :indeterminate="true" color="#f25d13"></v-progress-linear>
  </v-card>
    </v-flex>
  <br><br>
  <div>

 <v-stepper  vertical class="hidden-md-and-up" >
     <v-progress-linear :indeterminate="true" color="#f25d13"></v-progress-linear>
    <v-stepper-step complete step="1" color="#f25d13">
     Confirmed Order
    </v-stepper-step>

    <v-stepper-content step="1">
    
    </v-stepper-content>

    <v-stepper-step complete step="2" color="#f25d13">Order in transit</v-stepper-step>
 <v-stepper-content step="2">
    
    </v-stepper-content>

    <v-stepper-step  step="3" >Delivered</v-stepper-step>

    
  <center><img  src="../assets/bik2.gif" height = "80" alt=""></center>
  <div class="mobile">
      <center>
          <h3>TRACKING CODE</h3>
      
            {{ OrderId }}
            <br>
            <br>
           <h3>RESTAURANT</h3>
           
            {{ Vendor }}
            <br>
            <br>
            <h3>PAYMENT STATUS</h3>
      
            {{ PaymentStatus }}
            <br>
            <br>
            <h3>DELIVERY STATUS</h3>
      
            {{ DeliveryStatus }}
            <br>
      </center>
      
  </div>
  </v-stepper>
        
  </div>
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
          OrderId: '',
          Vendor: '',
          PaymentStatus: '',
          DeliveryStatus: '',
          currentUser: '',
          

        e6: 1
      }
    },
      created(){
            this.currentUser = firebase.auth().currentUser.email;
            this.fetchData();
            if(this.DeliveryStatus == "Delivered"){
        alert("It works")
      }
            
            
      },
         
   watch: {
    '$route' : 'fetchData'
  },
  computed:{
       
  },
   methods: {
     fetchData(){
       db.collection('users').doc(this.currentUser).collection('Orders').where('OrderId', '==', this.$route.params.Ref).get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
            this.Vendor = doc.data().Vendor,
            this.Date = doc.data().Date,
             this.Address = doc.data().Address,
             this.AllOrders = doc.data().AllOrders,
             this.Customer = doc.data().Customer,
             this.DeliveryStatus = doc.data().DeliveryStatus,
             this.Email = doc.data().Email,
             this.OrderId = doc.data().OrderId,
             this.OrderTotal =  doc.data().OrderTotal,
             this.PaymentStatus = doc.data().PaymentStatus,
             this.PaymentType = doc.data().PaymentType

           })
        }
      )
        
    }
   
}
}
</script>

<style>
.mobile {background:#f25d13 ;color: white; padding: 10px;}
.details-tracking {background: #f25d13;padding: 10px 0px 10px 0px;color:white;}
.stepper {margin:30px;}
.head-bar {background: rgb(245, 245, 245);}
    .content {padding:100px;}
    .content-box {padding: 0px 0px 0px 0px;}

    @media (max-width: 991px) {
        .mobile {background:#f25d13 ;color: white; padding: 10px;}
.details-tracking {background: #f25d13;padding: 10px 0px 10px 0px;color:white;}
        .stepper {margin:10px;}
.head-bar {background: rgb(245, 245, 245);}
    .content {padding:10px;}
    .content-box {padding: 0px 0px 0px 0px;}
    }
    @media (max-width: 767px) {
        .mobile {background:#f25d13 ;color: white; padding: 10px;}
.details-tracking {background: #f25d13;padding: 10px 0px 10px 0px;color:white;}
        .stepper {margin:0px;}
.head-bar {background: rgb(245, 245, 245);}
    .content {padding:100px;}
    .content-box {padding: 0px 0px 0px 0px;}
    }
    @media (max-width: 479px) {
        .mobile {background:#f25d13 ;color: white; padding: 10px;}
.details-tracking {background: #f25d13;padding: 10px 0px 10px 0px;color:white;}
        .stepper {margin:0px;}
.head-bar {background: rgb(245, 245, 245);}
    .content {padding:10px;}
    .content-box {padding: 0px 0px 0px 0px;}
    }
</style>