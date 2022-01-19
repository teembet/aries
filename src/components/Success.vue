<template>
   <div class="success-content">
     <center> 
         <v-icon class="success-icon" color="#f25d13">check_circle</v-icon>
         <br>
    <h1>Your Order has been Received</h1>
    <div class="pm">
         <router-link to="/help" >
     <p >if you have any questions or complains, click this link</p>
    </router-link>
    </div>
   
    <br>
    <v-btn outline color="#f25d13" dark @click="Track">Track Order</v-btn>
    <v-btn color="#f25d13" dark @click="OrderAgain">Place Another Order</v-btn>
     
    </center> 
   </div> 
</template>
<script>
export default {
    methods:{
        OrderAgain(){
            this.$router.push({path: '/restaurants'})
        },
            Track(){
                this.$router.push({path: '/dashboard'})
            }
    }
}
</script>

<style scoped>
.success-icon {font-size: 100px;}
.success-content {background: white; padding: 50px;}
.pm {font-size: 15px; color: rgb(184, 184, 184)}
.pm a {color: rgb(184, 184, 184);text-decoration: none;}
h1 {font-size: 45px;}
   @media (max-width: 991px) {
     .success-icon {font-size: 70px;}
.success-content {background: white; padding: 50px;}
.pm {font-size: 15px; color: rgb(184, 184, 184)}
.pm a {color: rgb(184, 184, 184);text-decoration: none;}
h1 {font-size: 30px;}
     }
     @media (max-width: 767px) {
   .success-icon {font-size: 70px;}
.success-content {background: white; padding: 50px;}
.pm {font-size: 15px; color: rgb(184, 184, 184)}
.pm a {color: rgb(184, 184, 184);text-decoration: none;}
h1 {font-size: 30px;}
     }
      @media (max-width: 479px) {
   .success-icon {font-size: 70px;}
.success-content {background: white; padding: 50px;}
.pm {font-size: 15px; color: rgb(184, 184, 184)}
.pm a {color: rgb(184, 184, 184);text-decoration: none;}
h1 {font-size: 30px;}
      }
</style>
