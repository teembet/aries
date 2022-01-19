<template>
<div> 
    <v-data-table
    :headers="headers"
    :items="Basket"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">
    <v-btn fab dark color="#f25d13" depressed class="meal-btn" @click="increaseQ(props)">
    <p>+</p>
    </v-btn>
     <span>{{ props.item.Quantity }}</span>
      <v-btn fab dark color="#f25d13" depressed class="meal-btn" @click="decreaseQ(props)">
    <p>-</p>
    </v-btn>
    </td>

      <td class="text-xs-left">{{ props.item.Name }}</td>
      <td class="text-xs-left">₦ {{ props.item.Price * props.item.Quantity}}</td>
     
    </template>
   
  </v-data-table><br> 
  <div v-if= "Basket.length > 0">
     <div class="order-info">
       
        <v-chip>+Pack: ₦50</v-chip>
    <v-chip>+Delivery Fee: ₦50</v-chip> 
     <v-chip>Order total:  ₦{{ total }}</v-chip>
     </div>
         <br>
    

 
   <center>
      <v-btn block color="#f25d13" dark depressed @click= "addOrder">Place Order</v-btn>
   
   </center>
   </div>
     <v-dialog
      v-model="dialog"
      max-width="350"
     
    >
   
      <v-card class="dialog">
        <v-btn icon dark @click="dialog = false">
            <v-icon color="#f25d13" class="close">close</v-icon>
          </v-btn>
        <v-progress-linear :indeterminate="true" color="#f25d13"></v-progress-linear> 
         
         <v-chip class="chip"> <h3>Ref: {{ orderId }}</h3> </v-chip>
        <v-chip class="chip"> <h3>Fullname: {{ user }}</h3> </v-chip>
        <v-chip class="chip"> <h3>Restaurant: {{ Res }} </h3> </v-chip>
        <v-chip class="chip"> <h3>Order Total: ₦{{ total }}</h3> </v-chip>
           <br>
            <v-text-field
      v-model="Address"
      label= "Hii!! where do you want it delivered to you"
      color="#f25d13"
      required
    ></v-text-field>
   <center>
     <v-btn block color="#f25d13" dark  depressed @click="payOD" >Pay on Delivery</v-btn>
            <Rave
       :is-production="false"
       style-class="paymentbtn"
       :email="currentUser"
       :amount="total"
       :reference="reference"
       :rave-key="raveKey"
       :callback="callback"
       :close="close"
       currency="NGN"
   >
  
<v-btn block color="#f25d13" class="order-btn" @click="payCard"  depressed  dark>Pay with Card</v-btn>
  </Rave>
   </center>
     
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
     
</template>

<script>
import { mapGetters } from 'vuex'
import Rave from 'vue-ravepayment';
import db from './firebaseinit.js'
import {  firebaseinit } from './firebaseinit.js'
import firebase from 'firebase'
const API_publicKey = "FLWPUBK-1dd73144af1fa85706b7770f09bcc2ea-X";
export default {
     props : ['Basket', 'Res'],
        components: {
        Rave
    },
     data () {
      return {
        Date: new Date(),
        orderTotal: '',
        paymentStatus: 'Pending',
        deliveryStatus: 'In transit',
        orderId: '',
        user: '',
        Address: '',
        paymentType:'',
        dialog: false,
        raveKey: "FLWPUBK-1dd73144af1fa85706b7770f09bcc2ea-X",
          email: "aliasgbolly@yahoo.com",
          amount: 5000,
        headers: [
          {
            text: 'Quantity',
            align: 'left',
            sortable: false,
            value: 'Quantity'
          },
          { text: 'Item', value: 'Item' },
          { text: 'Total', value: 'Total' },
         
        ],
        currentUser: null,
        phone : null

      }
     },
     computed:{
        ...mapGetters ([
             'getDetails',
             'getVendorEmail'
         ]),

        reference(){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( let i=0; i < 10; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      },
         total(){  
           var totalp = 0;
           var tot = 0
           for( var items in this.Basket ){
             var singleItem = this.Basket[items];
             totalp += singleItem.Quantity * singleItem.Price;
             tot = totalp + 100
             this.orderTotal = tot
           }
           return tot;
           
         }
     },
     created(){
            if(firebase.auth().currentUser){
              
                this.isLoggedin = true;
                this.currentUser = firebase.auth().currentUser.email;
                      db.collection('users').where('Email', '==', this.currentUser).get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
            this.user = doc.data().Fullname,
            this.phone = doc.data().PhoneNumber
          })
              } 
      )
            }
     },
     methods :{
            generate(){
         var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    this.orderId = text;
     },
       payOD(){ 
        db.collection('Menu001').doc(this.getVendorEmail).collection('Orders').add({
                       PhoneNumber: this.phone,
                        Date: this.Date,
                        Vendor: this.Res,
                        Email: this.currentUser,
                       Customer: this.user,
                     OrderId: this.orderId,
                     Address: this.Address,
                     PaymentType: 'Pay on Delivery',
                     DeliveryStatus: this.deliveryStatus,
                     PaymentStatus: 'Pending',
                     OrderTotal: this.orderTotal,
                     AllOrders: this.Basket
                       })
                        db.collection('users').doc(this.currentUser).collection('Orders').add({
                          PhoneNumber: this.phone,
                          Date: this.Date,
                          Vendor: this.Res,
                        Email: this.currentUser,
                       Customer: this.user,
                     OrderId: this.orderId,
                     Address: this.Address,
                     PaymentType: 'Pay on Delivery',
                     DeliveryStatus: this.deliveryStatus,
                     PaymentStatus: 'Pending',
                     OrderTotal: this.orderTotal,
                     AllOrders: this.Basket
                       })
           
            this.$router.push({path: '/success'})
          },
          payCard(){
            this.paymentType = 'Debit Card'
          },
         callback: function(response){
        console.log(response)
           if (
                    response.tx.chargeResponseCode == "00" ||
                    response.tx.chargeResponseCode == "0"
                ) {
                     db.collection('Menu001').doc(this.getVendorEmail).collection('Orders').add({
                       PhoneNumber: this.phone,
                       Date: this.Date,
                       Vendor: this.Res,
                        Email: this.currentUser,
                       Customer: this.user,
                     OrderId: this.orderId,
                     Address: this.Address,
                     PaymentType: 'Debit Card',
                     DeliveryStatus: this.deliveryStatus,
                     PaymentStatus: 'Paid',
                     OrderTotal: this.orderTotal,
                     AllOrders: this.Basket
                       })
                        db.collection('users').doc(this.currentUser).collection('Orders').add({
                          PhoneNumber: this.phone,
                          Date: this.Date,
                          Vendor: this.Res,
                        Email: this.currentUser,
                       Customer: this.user,
                     OrderId: this.orderId,
                     Address: this.Address,
                     PaymentType: 'Debit Card',
                     DeliveryStatus: this.deliveryStatus,
                     PaymentStatus: 'Paid',
                     OrderTotal: this.orderTotal,
                     AllOrders: this.Basket
                       })
                   this.$router.push({path: '/success'});
                } else {
                    this.$router.push({path: '/failed'})
                }

      },
      close: function(){
        console.log("Payment closed")
      },
       removeItem(props){
    this.Basket.splice(this.Basket.indexOf(props), 1);
    },
       increaseQ(props){
     props.item.Quantity++;
    },
    decreaseQ(props){
    props.item.Quantity--;
    if(props.item.Quantity == 0){
     this.removeItem(props);
    }
    },
    addOrder(){

      if(this.currentUser == null ){
              this.$router.push({ path: '/loginsignup' })
            }
            else {
            this.dialog = true;  
             this.generate()
            }
     


  
      }
     }
}
</script>
 
<style scoped>
.close {font-size:40px;}
.chip {background:#f25d13; color: white }
.dialog{ padding: 30px 20px 30px 20px;}
.order-info {text-align: center;}
.order-btn {margin-top:20px; width: 310px;}
.meal-btn {width: 20px;height: 20px;}

     @media (max-width: 991px) {
       .order-info {text-align: center;}
.order-btn {margin-top:20px; width: 310px;}
.meal-btn {width: 20px;height: 20px;}

     }
     @media (max-width: 767px) {
       .order-info {text-align: left;}
.order-btn {margin-top:20px; width: 290px;}
.meal-btn {width: 20px;height: 20px;}

     }
      @media (max-width: 479px) {
        .order-info {text-align: left;}
.order-btn {margin-top:20px; width: 290px;}
.meal-btn {width: 20px;height: 20px;}

      }
</style>
