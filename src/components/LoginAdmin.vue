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
      <br>
       <v-tabs 
        color="white"
      slider-color="#f25d13"
       fixed-tabs>
    <v-tab>
     Login
    </v-tab>

    <v-tab-item>
        <v-card flat>
      
           <br><br>
      <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="Lemail"
      :rules="LemailRules"
      label= "E-mail"
      color="#f25d13"
      required
    ></v-text-field>
        <v-text-field
        hint="At least 8 characters"
        type="password"
      v-model="Lpassword"
      :rules="LpasswordRules"
      label= "Password"
      color="#f25d13"
      required
    ></v-text-field>
  <br><br>
    <v-btn
    large
    @click= "Login"
      dark
      color="#f25d13">
      LOGIN
    </v-btn>
  </v-form>

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
          Lemail : '',
          Lpassword: '',
         
      LemailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      LpasswordRules: [
        v => !!v || 'Password is required',
      ],  
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
       this.Susername = '',
       this.Spassword = '',
       this.Semail = ''
      },
            Login(e){
          firebase.auth().signInWithEmailAndPassword(this.Lemail,this.Lpassword)
          .then( user => {
              alert("You are Logged in");
              this.$router.go({ path: '/' })
          },
          err => {
              alert(err.message);
          }
          );


       e.preventDefault();
       
      }
    }
  }
</script>





<style scoped>
.content { padding: 20px 0px 80px 0px; background: white;}
.content-box {box-shadow: 1px 5px 30px -3px #e4e4e4;padding: 50px 50px 50px 50px; width:500px;}



@media (max-width: 991px) {
  .content { padding: 20px 70px 70px 70px; background: white;}
.content-box {box-shadow: 1px 5px 30px -3px #e4e4e4;padding: 50px 15px 50px 15px; width:auto;}

}

@media (max-width: 767px) {
 .content { padding: 20px 0px 40px 0px; background: white;}
.content-box {box-shadow: 1px 5px 30px -3px #e4e4e4;padding: 50px 15px 50px 15px; width:auto;}

}

@media (max-width: 479px) {
.content { padding: 20px 20px 40px 20px; background: white;}
.content-box {box-shadow: 1px 5px 30px -3px #e4e4e4;padding: 50px 15px 50px 15px; width:auto;}



}
</style>
