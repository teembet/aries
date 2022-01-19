<template>
   <div class="success-content">
     <center> 
         <v-icon class="success-icon" color="#d40b0b">mood_bad</v-icon>
         <br>
    <h1>Oops!! Something went Wrong </h1>
    <div class="pm">
         <router-link to="/help" >
     <p >if you have any questions or complains, click this link</p>
    </router-link>
    </div>
   
    <br>
    <v-btn color="#f25d13" dark @click= "tryAgain">Try Again</v-btn>
    </center> 
   </div> 
</template>
<script>
export default {
    methods: {
        tryAgain(){
            this.$router.go(-1)
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
