
import createEasyFirestore from 'vuex-easy-firestore'


export const DetailsModule = {
  firestorePath: "Details",
  firestoreRefType: 'collection',
  moduleName: 'DetailsModule',
  statePropName: 'Details',
  // your state
  state: {
   Details: [],
   VendorEmail: ''
  },
  
  getters : {
    getVendorEmail: state => state.VendorEmail,
    getDetails: state => state.Details,
    getEmail: state => state.Details.Email
},
mutations:{
  addEmail: (state, VendorEmail) => state.VendorEmail = VendorEmail
}
} 

 export const MainModule = {
    firestorePath: "Menu001/exceedinggrace@ariss.com/Mainmeals",
    firestoreRefType: 'collection',
    moduleName: 'MainModule',
    statePropName: 'Main',
    // your state
    state: {
     Main: []
    },
    
    getters : {
      getMain: state => state.Main
  }
  } 

  export const SoupModule = {
    firestorePath: "Menu001/exceedinggrace@ariss.com/Soup",
    firestoreRefType: 'collection',
    moduleName: 'SoupModule',
    statePropName: 'Soup',
    // your state
    state: {
     Soup: []
    },
    
    getters : {
      getSoup: state => state.Soup
  }
  } 
  
  export const SwallowsModule = {
    firestorePath: "Menu001/exceedinggrace@ariss.com/Swallows",
    firestoreRefType: 'collection',
    moduleName: 'SwallowsModule',
    statePropName: 'Swallows',
    // your state
    state: {
     Swallows: []
    },
    
    getters : {
      getSwallows: state => state.Swallows
  }
  } 
  export const SidesModule = {
    firestorePath: "Menu001/exceedinggrace@ariss.com/Sides",
    firestoreRefType: 'collection',
    moduleName: 'SidesModule',
    statePropName: 'Sides',
    // your state
    state: {
     Sides: []
    },
    
    getters : {
      getSides: state => state.Sides
  }
}

  export const DrinksModule = {
    firestorePath: "Menu001/drinks@ariss.com/Drinks",
    firestoreRefType: 'collection',
    moduleName: 'DrinksModule',
    statePropName: 'Drinks',
    // your state
    state: {
     Drinks: []
    },
    
    getters : {
      getDrinks: state => state.Drinks
  }
}

export const Order1Module = {
  firestorePath: "Orders",
  firestoreRefType: 'collection',
  moduleName: 'Order1Module',
  statePropName: 'Order1',
  // your state
  state: {
   Order1: []
  },
  
  getters : {
    
    getOrder1: state => state.Order1,
    getOrderNo: state => state.Order1.length
}
}



      
  export const easyFirestore = createEasyFirestore([MainModule,SoupModule,SwallowsModule,SidesModule,DrinksModule,Order1Module,DetailsModule], {logging: true})