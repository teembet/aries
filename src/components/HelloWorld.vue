       this.getUser = firebase.auth().currentUser.email;
     db.collection('Menu001').doc(this.getVendorEmail).collection('Mainmeals').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data = {
              'Id' : doc.id,
              'Name' : doc.data().Name,
              'Price' : doc.data().Price
           }
           this.MainMeals.push(data)
          })
        } 
      )
        db.collection('Menu001').doc(this.getVendorEmail).collection('Soup').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data = {
              'Id' : doc.id,
              'Name' : doc.data().Name,
              'Price' : doc.data().Price
           }
           this.Soup.push(data)
          })
        } 
      )
        db.collection('Menu001').doc(this.getVendorEmail).collection('Swallows').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data = {
              'Id' : doc.id,
              'Name' : doc.data().Name,
              'Price' : doc.data().Price
           }
           this.Swallows.push(data)
          })
        } 
      )
        db.collection('Menu001').doc(this.getVendorEmail).collection('Sides').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data = {
              'Id' : doc.id,
              'Name' : doc.data().Name,
              'Price' : doc.data().Price
           }
           this.Sides.push(data)
          })
        } 
      )
        db.collection('Menu001').doc(this.getVendorEmail).collection('Drinks').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data = {
              'Id' : doc.id,
              'Name' : doc.data().Name,
              'Price' : doc.data().Price
           }
           this.Drinks.push(data)
          })
        } 
      )