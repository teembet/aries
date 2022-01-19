<template>
    <div class="help">
       <v-layout row wrap>
               <v-flex xs12 sm12 md8 class="help-sec">
                   <h1 class="help-h1">Help & FAQ</h1>
                   <br>
                   <br>
                   <h2 class="help-h2">Top Questions</h2>
                   <br>
                   <br>
                   <v-expansion-panel>
    <v-expansion-panel-content>
      <div slot="header" ><h2> Where is my order </h2></div>
      <v-card>
        <v-card-text>
            <h3>
    After you place your order, we send it directly to the restaurant, which starts preparing it immediately.

Our restaurants do everything they can to get your food delivered as quickly as possible. However, sometimes restaurants receive very large amount of orders, or drivers get stuck in heavy traffic - this unfortunately might cause delays.

If the amount of time you’ve waited has exceeded the estimated delivery time, you can contact us and we’ll look into what’s going on.</h3>
    </v-card-text>
     </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
   <v-expansion-panel>
    <v-expansion-panel-content>
      <div slot="header" ><h2> How to Order at Ariss </h2></div>
      <v-card>
        <v-card-text>
            <h3>
                It is really easy, as easy as 1, 2, :
                <br>
1. Choose what you would like: Pick a restaurant and select items you’d like to order. 
<br>
2. Checkout: Enter your exact delivery address, payment method and your phone number. Always make sure that you enter the correct phone number to help us contact you regarding your order, if needed.
<br>
Now sit back, relax, and we’ll get your food delivered to your doorstep.
            </h3>
       </v-card-text>
     </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
     <v-expansion-panel>
    <v-expansion-panel-content>
      <div slot="header" ><h2> I need to cancel or change my order! How can I do this? </h2></div>
      <v-card>
        <v-card-text>
            <h3> Please give us a call as soon as possible, we can let the restaurant know before it starts preparing your order.

If you would like to cancel your order after it has been confirmed with the restaurant, please call our support team so that we can check if the restaurant has begun preparation. If the restaurant has begun preparing the food, we will be unable to issue a full refund for the order. With regards to any refund of a payment you have made online, please contact Ariss and not the restaurant.
            </h3>
       </v-card-text>
     </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
   <v-expansion-panel>
    <v-expansion-panel-content>
      <div slot="header" ><h2> How can I pay for my order? </h2></div>
      <v-card>
        <v-card-text>
            <h3> All our restaurants accept cash on delivery. In addition, there are various online payment methods available. You can check which payment methods are accepted at each restaurant by going to the ‘Info’ tab on the restaurant’s page.
<br>
<em> Cash on Delivery</em>
<br>
Select ‘Cash on Delivery’ on the checkout page and pay the driver at your doorstep when you receive your order.          </h3>
       </v-card-text>
     </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
               </v-flex>
               <v-flex xs12 sm12 md4>
                   <v-card class="box">
                      <h2 class = "head-text">Contact our customer service</h2>
                      <br>
                      <div><p class= "sub-text"><v-icon color="#f25d13">chat</v-icon> Live Chat </p> </div>
                       <br>
                       <div><p class= "sub-text"><v-icon color="#f25d13">mail</v-icon> support@ariss.com </p> </div>
                       <br>
                       <div><p class= "sub-text"><v-icon color="#f25d13">phone</v-icon> +2349027264336 </p> </div>
                   </v-card>
                  <br>
                   <v-card class="box">
                      <h2 class = "head-text">Are a restaurant?</h2>
                      <br>
                      <div><p class= "sub-text">
                          Do you want your restaurant listed on Ariss? Are you already our partner and have questions regarding our service?
                       <br>
                        You can always send an email to:
            <br>
                       <div><p class= "sub-text"><v-icon color="#f25d13">mail</v-icon> support@arissapp.com.ng </p> </div>
                     </div>
                       
                      
                   </v-card>
               </v-flex>
       </v-layout>
    </div>
</template>
<style scoped>
.help-sec {padding: 0px 30px 0px 30px;}
.head-text {color: #f25d13;}
.sub-text {font-size: 18px; }
.box {padding: 20px;}
.help {background: white; padding: 50px 100px  50px 100px;}
.help-h1 {font-size: 40px;color: #f25d13 }
.help-h2 {font-size: 25px;}

 @media (max-width: 991px) {
      .help-sec {padding: 0px 0px 20px 0px;}
.head-text {color: #f25d13;}
.sub-text {font-size: 18px; }
.box {padding: 10px;}
.help {background: white; padding: 20px 20px  20px 20px;}
.help-h1 {font-size: 40px;color: #f25d13 }
.help-h2 {font-size: 25px;}
    }
    @media (max-width: 767px) {
       .help-sec {padding: 0px 0px 20px 0px;}
.head-text {color: #f25d13;}
.sub-text {font-size: 18px; }
.box {padding: 10px;}
.help {background: white; padding: 20px 20px  20px 20px;}
.help-h1 {font-size: 40px;color: #f25d13 }
.help-h2 {font-size: 25px;}
    }
    @media (max-width: 479px) {
  .help-sec {padding: 0px 0px 20px 0px;}
.head-text {color: #f25d13;}
.sub-text {font-size: 18px; }
.box {padding: 10px;}
.help {background: white; padding: 20px 20px  20px 20px;}
.help-h1 {font-size: 40px;color: #f25d13 }
.help-h2 {font-size: 25px;}
    }
</style>
