import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    products:[
        {name:"陈厂长",price:4000},
        {name:"陈拓海",price:2000},
        {name:"陈地主",price:1400},
        {name:"陈抠门",price:1000}
      ]
  },
  getters:{
    saleProducts: (state) =>{
      var saleProducts = state.products.map(product =>{
        return{
          name:"**"+ product.name +"**",
          price: product.price /2
        };
      });
      return saleProducts;
    }
  }
});