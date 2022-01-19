<template>
    <div>
          <v-flex xs12 sm12 md12>
          <v-text-field
          color="#f25d13"
            label="Name of Food"
            v-model= "name"
          ></v-text-field>
        </v-flex>
          <v-flex xs12 sm12 md12>
          <v-text-field
          color="#f25d13"
            label="Price(₦)"
            v-model= "price"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12 d-flex>
        <v-select
        color="#f25d13"
          :items="items"
          label="Category"
          v-model="category"
        ></v-select>
      </v-flex>
        <v-btn @click= "addMenu" block color="#f25d13" dark class="order-btn" depressed>Add Menu</v-btn>
        
    </div>
</template>

<script>
import db from './firebaseinit.js'
import firebase from 'firebase'
  export default {
    data: () => ({
      items: ['Mainmeals','Soup','Swallows','Sides', 'Drinks'],
      name: '',
      price: 0,
      category: '',
      snackbar: false,
      currentUser: null
    }),
     created () {
                  if(firebase.auth().currentUser){
                this.currentUser = firebase.auth().currentUser.email;
            }
    },
    methods:{
      addMenu(){
        if(this.category == 'Mainmeals'){
         db.collection('Menu001').doc(this.currentUser).collection('Mainmeals').add({
          Name: this.name,
        Price: this.price
       })
       .then( 
         
        docRef => window.location.reload())
       .catch(error => console.log(err))
         this.snackbar = true;
        this.resetForm();
  
       
        }
        else if(this.category == 'Soup'){
        db.collection('Menu001').doc(this.currentUser).collection('Soup').add({
          Name: this.name,
        Price: this.price
       })
       .then(docRef => window.location.reload())
       .catch(error => console.log(err))

        this.snackbar = true
        this.resetForm()
        }

        else if(this.category == 'Swallows'){
        db.collection('Menu001').doc(this.currentUser).collection('Swallows').add({
          Name: this.name,
        Price: this.price
       })
       .then(docRef => window.location.reload())
       .catch(error => console.log(err))

        this.snackbar = true
        this.resetForm()
        }
         else if(this.category == 'Sides'){
        db.collection('Menu001').doc(this.currentUser).collection('Sides').add({
          Name: this.name,
        Price: this.price
       })
       .then(docRef => window.location.reload())
       .catch(error => console.log(err))

        this.snackbar = true
        this.resetForm()
        }
        else if(this.category == 'Drinks'){
        db.collection('Menu001').doc(this.currentUser).collection('Drinks').add({
          Name: this.name,
        Price: this.price
       })
       .then(docRef => window.location.reload())
       .catch(error => console.log(err))

        this.snackbar = true
        this.resetForm()
        }
            
      },
       resetForm () {
       this.name = '';
      this.price = '';
      },
    }
  }
</script>
<style scoped>
</style>
