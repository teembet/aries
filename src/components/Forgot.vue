<template>
    <div>
      <div class= "content">
      <center> <v-card class= "content-box">
      <v-flex
        xs12
        sm6
        md8
        align-center
        justify-center
        layout
        text-xs-center
      >
        <v-avatar
          :size= 120
          color="grey lighten-4"
        >
         <img src="../assets/user.png" alt="" width="50px" >
        </v-avatar>
      </v-flex>
       <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="success"
    >
      <span>Registration successful!</span>
      <v-icon dark>check_circle</v-icon>
    </v-snackbar>
      <br>
       <v-tabs fixed-tabs
        slider-color="#f25d13">
    <v-tab>
     Forgot Password
    </v-tab>
    <v-tab-item>
        <v-card flat>
      
           <br><br>
      <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="Lemail"
      label= "E-mail"
      color="#f25d13"
      required
    ></v-text-field>
  <br><br>
    <v-btn
    large
    @click= "verify"
      :disabled="!valid"
      style="color:white;background:#f25d13;">
      SEND
    </v-btn>
  </v-form>
  <br>
   <router-link to="/loginsignup"><p class="forgot">Dont have an account?? Click here</p></router-link> 
        </v-card>
      </v-tab-item>
       
  </v-tabs>
      
        </v-card>
        </center> 
            </div>
    
    </div>
</template>

<script>
import db from './firebaseinit.js';
import firebase from 'firebase';
import { error } from 'util';
  export default {
    data () {
      return {
           date: new Date(),
          valid: false,
          snackbar: false,
          Lemail : ''
      } 
    },
    computed: {
      progress () {
        return Math.min(100, this.Spassword.length * 10)
      },
      color () {
        return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
      }
    },
    methods: {
        clear () {
       this.Sname = '',
       this.Spassword = '',
       this.Semail = '',
       this.Smatric = '',
       this.Sdepart = '',
       this.Sphone = ''
      },
        verify(){
            firebase.auth().sendPasswordResetEmail(this.Lemail).then(function() {
  // Email sent
  alert("Password reset link has been sent to your mail")
  this.snackbar = true
}).catch(function(error) {
  // An error happened.
  this.snackbar = true
});
        }
    }
  }
</script>





<style scoped>
.forgot {color: #f25d13; text-decoration: underline;}
.content { padding: 80px 0px 80px 0px; background: white;}
.content-box {box-shadow: 1px 5px 30px -3px #e4e4e4;padding: 50px 50px 50px 50px; width:500px;}



@media (max-width: 991px) {
  .content { padding: 70px 70px 70px 70px; background: white;}
.content-box {box-shadow: 1px 5px 30px -3px #e4e4e4;padding: 50px 15px 50px 15px; width:auto;}

}

@media (max-width: 767px) {
 .content { padding: 40px 0px 40px 0px; background: white;}
.content-box {box-shadow: 1px 5px 30px -3px #e4e4e4;padding: 50px 15px 50px 15px; width:auto;}

}

@media (max-width: 479px) {
.content { padding: 40px 20px 40px 20px; background: white;}
.content-box {box-shadow: 1px 5px 30px -3px #e4e4e4;padding: 50px 15px 50px 15px; width:auto;}



}
</style>
