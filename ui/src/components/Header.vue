<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link   to="/">
        <a class="navbar-brand" href="#">iBot</a>
        </router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-if="isAuthenticated">              
                 <router-link to="/authors"> 
                    <a class="nav-link" v-bind:class="{active : currentRoute == '/authors'}" href="#" >Authors</a>
                </router-link>
            </li>
             <li class="nav-item" v-if="isAuthenticated">               
                 <router-link to="/user" > 
                    <a class="nav-link" v-bind:class="{active : currentRoute == '/user'}" href="#" >User</a>
                </router-link>
            </li>
            <li class="nav-item" v-if="!isAuthenticated">
              <a class="nav-link" href="#" v-on:click="login()">Log in</a>
            </li>  
             <li class="nav-item" v-if="isAuthenticated">
              <a class="nav-link" href="#" v-on:click="logout()">Log out</a>
            </li>            
          </ul>
      </div>
    </nav> 
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AuthService from '../services/auth.service';


export default {
  name: 'Header',
  computed:{
    ...mapGetters({
      isAuthenticated:"isAuthenticated",
      currentRoute:"currentRoute"
    })  
  },
  methods : {
    login() {
      this.authService = new AuthService();
      this.authService.signIn();
    },
    logout() {
      this.$router.push('/');
      this.authService = new AuthService();
      this.authService.signOut();
    }
  }
}
</script>

<style>  
</style>
