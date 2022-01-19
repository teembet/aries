<template>
<div>
   <table id="customers">
  <tr>
    <th>Order Ref</th>
    <th>Food Item</th>
    <th>Prize</th>
    <th>Quantity</th>
    <th>Customer</th>
    <th>Phone Number</th>
    <th>Address</th>
    <th>Payment Type</th>
    <th>Payment Status</th>
    <th>Order Total</th>
    <th>Delivery Status</th>
  </tr>
   <tbody v-for= "(order, index) in WOrders " :key="order.id">
     <br>
     <strong>Date: {{ order.Date }}</strong>
     <br>
    <strong><em>Order Number: {{ index + 1 }} </em></strong>
    <tr v-for= "item in order.AllOrders" :key="item.id">
       <td> {{ order.OrderId }} </td>
   <td> {{ item.Name }} </td>
    <td>₦{{ item.Price }}</td>
  <td>{{ item.Quantity }}</td>
   <td>{{ order.Customer }}</td>
    <td>{{ order.PhoneNumber }}</td>
    <td>{{ order.Address }}</td>
     <td>{{ order.PaymentType }}</td>
      <td>{{ order.PaymentStatus }} <v-btn color="#f25d13" flat dark @click= "payStatus(order)">Change</v-btn></td>
       <td>{{ order.OrderTotal }}</td>
        <td>{{ order.DeliveryStatus }} <v-btn  color="#f25d13" flat dark @click= "delStatus(order)">Change</v-btn></td>

  </tr>
   </tbody>
 

</table>
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
        deliveryStatus: '',
        paymentStatus: '',
        WOrders : [],
        MyOrders: ['a','b','c'],   
          headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Quantity', value: 'Quantity' },
          { text: 'Price (g)', value: 'Price' },
          { text: 'Total (g)', value: 'Total' }
        ],
        
      }
    },
     computed:{
         ...mapGetters ([
             'getOrder1',
             'getOrderNo'
         ]),
   },
   filters: {
    reverse: function (array) {
      return array.slice().reverse()
    }
  },

     created(){
     if(firebase.auth().currentUser){
                this.currentUser = firebase.auth().currentUser.email;
                  db.collection('users').where('Email', '==', this.currentUser).get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
            this.user = doc.data().Fullname
          })
        } 
      )
    db.collection('Menu001').doc(this.currentUser).collection('Orders').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
            const data = {
              "PhoneNumber" : doc.data().PhoneNumber,
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
     methods:{
       payStatus(order){
         if(order.PaymentStatus == 'Pending'){
       db.collection('Menu001').doc(this.currentUser).collection('Orders').where('OrderId', '==', order.OrderId).get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
            doc.ref.update(
            {
             PaymentStatus: 'Paid',
            }
            )
       .catch(error => console.log(err))
        })
        }
           )
           db.collection('users').doc(order.Email).collection('Orders').where('OrderId', '==', order.OrderId).get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
            doc.ref.update(
            {
             PaymentStatus: 'Paid',
            }
            ).then(docRef => window.location.reload()) 
       .catch(error => console.log(err))
        })
        }
           )
         }
         else{
           alert('This User has Paid Already')
         }
       },
       delStatus(order){
         if( order.DeliveryStatus == 'In transit'){
         db.collection('Menu001').doc(this.currentUser).collection('Orders').where('OrderId', '==', order.OrderId).get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
            doc.ref.update(
            {
             DeliveryStatus: 'Delivered',
            }
            )
       .catch(error => console.log(err))
        })
        }
           )
            db.collection('users').doc(order.Email).collection('Orders').where('OrderId', '==', order.OrderId).get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
            doc.ref.update(
            {
             DeliveryStatus: 'Delivered',
            }
            ).then(docRef => window.location.reload())
       .catch(error => console.log(err))
        })
        }
           )
           
           }
           else{
             alert('The Order has been Delivered')
           }
           }
     }
}
</script>

<style scoped>
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #f25d13;
  color: white;
}
</style>
