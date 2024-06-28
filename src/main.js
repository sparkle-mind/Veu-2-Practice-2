import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// -------- filter start ---------
Vue.filter("Ucase",function(val){
   return val.toUpperCase();
})

// ---- filter for rupees to dollar converter   
Vue.filter("Converter",(amount)=>{
    return amount * 82;
})

// ---- filter for em  to px converter  
Vue.filter("EmToPixel",(val)=>{
      return val * 16
})

// -------- filter end ---------
new Vue({
  render: h => h(App),
}).$mount('#app')
