import db from './firebaseinit.js'

export const dbMainMealsRef = db.collection('MainMeals').get().then 
(querySnapshot => {
  querySnapshot.forEach(doc => {
    const data = {
     'Name' : doc.data().Name,
     'Price' : doc.data().Price,
    }
  })

})