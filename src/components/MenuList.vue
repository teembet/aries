<template>
 <div>
   <v-data-iterator
      items= 1
      content-tag="v-layout"
      hide-actions
      row
      wrap
    >
      <v-flex
        slot="item"
        slot-scope="props"
        xs12
        sm12
        md12
        lg12
      >
        <v-card class="menu-list">
          <v-card-title class="subheading font-weight-bold">Main Meals</v-card-title>
          <v-divider></v-divider>
          <v-list dense v-for = "(item, index) in Main" :key="item['.key']">
            <v-list-tile>
              <v-list-tile-content>{{ item.Name }}</v-list-tile-content>
              <v-list-tile-content class="align-end">
                 <v-btn fab dark color="#f25d13" depressed class="meal-btn" @click="removeMain(item.Id,index)">
                <p>X</p>
                </v-btn>
              </v-list-tile-content>
            </v-list-tile>

          </v-list>
        </v-card>

          <v-card>
          <v-card-title class="subheading font-weight-bold">Soup</v-card-title>
          <v-divider></v-divider>
          <v-list dense v-for = "(item, index) in Soup" :key="item.id">
            <v-list-tile>
              <v-list-tile-content>{{ item.Name }}</v-list-tile-content>
              <v-list-tile-content class="align-end">
                 <v-btn fab dark color="#f25d13" depressed class="meal-btn" @click="removeSoup(item.Id,index)">
                <p>X</p>
                </v-btn>
              </v-list-tile-content>
            </v-list-tile>

          </v-list>
        </v-card>
                  <v-card>
          <v-card-title class="subheading font-weight-bold">Swallows</v-card-title>
          <v-divider></v-divider>
          <v-list dense v-for = "(item, index) in Swallows" :key="item.id">
            <v-list-tile>
              <v-list-tile-content>{{ item.Name }}</v-list-tile-content>
              <v-list-tile-content class="align-end">
                 <v-btn fab dark color="#f25d13" depressed class="meal-btn" @click="removeSwallows(item.Id,index)">
                <p>X</p>
                </v-btn>
              </v-list-tile-content>
            </v-list-tile>

          </v-list>
        </v-card>
         <v-card>
          <v-card-title class="subheading font-weight-bold">Sides</v-card-title>
          <v-divider></v-divider>
          <v-list dense v-for = "(item, index) in Sides" :key="item.id">
            <v-list-tile>
              <v-list-tile-content>{{ item.Name }}</v-list-tile-content>
              <v-list-tile-content class="align-end">
                 <v-btn fab dark color="#f25d13" depressed class="meal-btn" @click="removeSides(item.Id,index)">
                <p>X</p>
                </v-btn>
              </v-list-tile-content>
            </v-list-tile>

          </v-list>
        </v-card>
         <v-card>
          <v-card-title class="subheading font-weight-bold">Drinks</v-card-title>
          <v-divider></v-divider>
          <v-list dense v-for = "(item, index) in Drinks" :key="item.id">
            <v-list-tile>
              <v-list-tile-content>{{ item.Name }}</v-list-tile-content>
              <v-list-tile-content class="align-end">
                 <v-btn fab dark color="#f25d13" depressed class="meal-btn" @click="removeDrinks(item.Id,index)">
                <p>X</p>
                </v-btn>
              </v-list-tile-content>
            </v-list-tile>

          </v-list>
        </v-card>
      </v-flex>
      

    </v-data-iterator>
    
 </div>
</template>

<script>
import db from './firebaseinit.js';
import firebase from 'firebase';
import { error } from 'util';
  export default {
     data(){
       return{
       Main: [],
        Soup: [],
        Swallows: [],
          Sides: [],
          Drinks: [],
       currentUser: ''
       }
     },
  created(){
     if(firebase.auth().currentUser){
                this.currentUser = firebase.auth().currentUser.email;
    db.collection('Menu001').doc(this.currentUser).collection('Mainmeals').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data2 = {
              'Id' : doc.id,
              'Name' : doc.data().Name
           }
           this.Main.push(data2)
          })
        } 
      )
         db.collection('Menu001').doc(this.currentUser).collection('Soup').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data2 = {
             'Id' : doc.id,
              'Name' : doc.data().Name,
           }
           this.Soup.push(data2)
          })
        } 
      )
         db.collection('Menu001').doc(this.currentUser).collection('Swallows').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data2 = {
             'Id' : doc.id,
              'Name' : doc.data().Name,
           }
           this.Swallows.push(data2)
          })
        } 
      )   
      db.collection('Menu001').doc(this.currentUser).collection('Sides').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data2 = {
             'Id' : doc.id,
              'Name' : doc.data().Name,
           }
           this.Sides.push(data2)
          })
        } 
      )  
       db.collection('Menu001').doc(this.currentUser).collection('Drinks').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data2 = {
             'Id' : doc.id,
              'Name' : doc.data().Name,
           }
           this.Drinks.push(data2)
          })
        } 
      )
  }
  },
  methods:{
     removeMain(item, index){
        db.collection("Menu001").doc(this.currentUser).collection('Mainmeals').doc(item).delete().then(
          this.Main.splice(index, 1)
)
.catch(function(error) {
    console.error("Error removing document: ", error);
});
      },
           removeSoup(item, index){
        db.collection("Menu001").doc(this.currentUser).collection('Soup').doc(item).delete().then(
          this.Soup.splice(index, 1)
)
.catch(function(error) {
    console.error("Error removing document: ", error);
});
      },
           removeSwallows(item, index){
        db.collection("Menu001").doc(this.currentUser).collection('Swallows').doc(item).delete().then(
          this.Swallows.splice(index, 1)
)
.catch(function(error) {
    console.error("Error removing document: ", error);
});
      },
           removeSides(item, index){
        db.collection("Menu001").doc(this.currentUser).collection('Sides').doc(item).delete().then(
          this.Sides.splice(index, 1)
)
.catch(function(error) {
    console.error("Error removing document: ", error);
});
      },
           removeDrinks(item, index){
        db.collection("Menu001").doc(this.currentUser).collection('Drinks').doc(item).delete().then(
          this.Drinks.splice(index, 1)
)
.catch(function(error) {
    console.error("Error removing document: ", error);
});
      },
  }
  }
</script>

<style scoped>
.meal-btn {width: 20px;height: 20px;}
</style>
