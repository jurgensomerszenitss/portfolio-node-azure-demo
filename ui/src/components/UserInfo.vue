<template>
    <div class="page">
        <h1>User Info</h1>
        <div class="content">
            <div>
                <h5>First name : </h5>
                {{info.givenName}}
            </div>

             <div>
                <h5>Last name : </h5>
                {{info.surname}}
            </div>

            <div>
                <h5>Display name : </h5>
                {{info.displayName}}
            </div>

            <div>
                <h5>Mail : </h5>
                {{info.mail}}
            </div>

            <div>
                <h5>Job title : </h5>
                {{info.jobTitle}}
            </div>

            <div>
                <h5>Mobile phone : </h5>
                {{info.mobilePhone}}
            </div>

            <div>
                <h5>Office location : </h5>
                {{info.officeLocation}}
            </div>
        </div>
        
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserService from '../services/user.service';


export default {
  name: 'UserInfo',
  computed : {
      ...mapGetters({  
           info:"userInfo"
    }),
  },
  props: {
    },
    methods:{
        load() {
            var userService = new UserService();
            userService.getInfo();
        }
    },
    mounted() {
        this.load();
    }
}
</script>
 
<style scoped>
 
 div.content {
     text-align: left;
 }

 h5 {
    display: inline-block;
    width: 200px;
    text-align: right;
 }
</style>
