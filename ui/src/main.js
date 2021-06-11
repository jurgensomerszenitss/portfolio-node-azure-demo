import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { store } from './store/store';
import routes from './routes';

Vue.config.productionTip = false

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.use(VueRouter);



var vm = new Vue({
  router,
  store: store,
  methods : {
    syncRouter : function() {
      this.$router.afterEach(() => {
          store.dispatch('onRouteChanged', this.$router );
      });
    }
  },
  render: h => h(App),
}).$mount('#app')
 
vm.syncRouter();