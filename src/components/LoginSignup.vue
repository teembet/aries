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
     Login
    </v-tab>
     <v-tab>
      Signup
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
      :disabled="!valid"
      style="color:white;background:#f25d13;">
      LOGIN
    </v-btn>
  </v-form>
  <br>
 <router-link to="/forgot"><p class="forgot">Forgot Password??</p></router-link>  
        </v-card>
      </v-tab-item>
        <v-tab-item>
        <v-card flat>
         
         <br><br>
      <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="Sname"
      :rules="SnameRules"
      :counter="15"
      label= "Fullname"
      color="#f25d13"
      required
    ></v-text-field>
     <v-select
      v-model="Sgender"
      :items="gender"
      label="Gender"
      color="#f25d13"
      required
    ></v-select>
     <v-text-field
      v-model="Semail"
      :rules="SemailRules"
      label= "E-mail"
      color="#f25d13"
      required
    ></v-text-field>
      <v-text-field
       hint="At least 8 characters"
        type="password"
      v-model="Spassword"
      :rules="SpasswordRules"
      label= "Password"
      color="#f25d13"
      required
      loading
    >
      <v-progress-linear
        slot="progress"
        :value="progress"
        :color="color"
        height="7"
      ></v-progress-linear>
    </v-text-field>
     <v-text-field
      v-model="Smatric"
      color="#f25d13"
      label= "Matric No"
      required
    ></v-text-field>
     <v-text-field
      v-model="Sdepart"
      label= "Department"
      color="#f25d13"
      required
    ></v-text-field>
     <v-text-field
      v-model="Sphone" 
      label= "Phone Number"
      color="#f25d13"
      required
    ></v-text-field>
     <v-select
      v-model="Shostel"
      :items="hostel"
      color="#f25d13"
      label="Hostel"
      required
    ></v-select>
   
  <br><br>
    <v-btn
    large
      :disabled="!valid"
      @click="register"
      style="color:white;background:#f25d13">
      SIGNUP
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
      SnameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 15 characters',
      ],
      gender:['Male','Female','Others'],
      hostel:['Male Silver 1','Male Silver 2','Male Silver 3','Female Silver 1','Female Bronze','Male Hall'],
      Shostel: '',
      Sdepart:'',
      Smatric: '',
      Sorders: 'Joined Ariss',
      Sname: '',
      Shostel: '',
      Sgender: '',
      Sphone: '',
          Semail : '',
          Spassword: '',
      SemailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      SpasswordRules: [
        v => !!v || 'Password is required',
      ]
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
        register(e){
                     db.collection('users').doc(this.Semail).set({
          Fullname: this.Sname,
        Email: this.Semail, 
         Password: this.Spassword,
         Department: this.Sdepart,
      Hostel: this.Shostel,
      MatricNo: this.Smatric,
      PhoneNumber: this.Sphone,
      Gender: this.Sgender,
       })
       .then(
         firebase.auth().createUserWithEmailAndPassword(this.Semail,this.Spassword)
          .then( user => {
               this.snackbar = true
              this.clear();
              this.$router.go({ path: this.$router.path })
          },
          err => {
              alert(err.message);
          }
          )
       )
       .catch(error => console.log(err))
    e.preventDefault();
      },
            Login(e){
          firebase.auth().signInWithEmailAndPassword(this.Lemail,this.Lpassword)
          .then( user => {
              alert("You are Logged in");
              this.$router.go({ path: this.$router.path })
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
