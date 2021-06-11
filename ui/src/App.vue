<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script> 
import Header from './components/Header.vue';
import { store } from './store/store';

import { mapGetters } from "vuex";

export default {
  name: 'App',
  components: {
    Header
  },
  computed:{
    ...mapGetters({
    })
  },
  methods : {   
    syncRouter : function() {
      this.$router.afterEach(() => {
          store.dispatch('onRouteChanged', this.$router );
      });
    }
  }
}
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

div.page {
  margin:20px;
}
</style>
