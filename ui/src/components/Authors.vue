<template>
    <div class="page">
       <table>
           <thead>
               <tr>
                   <th>Last name</th>
                   <th>First name</th>
                   <th>address</th>
                   <th>city</th>
                   <th>state</th>
               </tr>
           </thead>
           <tbody>
                <tr v-for="author in list" :key="author.au_id">
                    <td>{{author.au_lname}}</td>
                    <td>{{author.au_fname}}</td>
                    <td>{{author.address}}</td>
                    <td>{{author.city}}</td>
                    <td>{{author.state}}</td>
                </tr>
           </tbody>
        </table>
        
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import AuthorsService from '../services/authors.service';


export default {
  name: 'Authors',
  computed : {
       ...mapGetters({  
           list:"authorsList"
    }),
  },
  props: {
    },
    methods:{
        load() {
            var authorsService = new AuthorsService();
            authorsService.getList();
        }
    },
    mounted(){
        this.load();
    }
}
</script>
 
<style scoped>
 
 table {
     margin:20px;
 }

thead {
    background-color: lightblue;
}

 th {
     text-align: left;
     font-weight: bold;
     padding: 5px;
     min-width: 150px;
 }

 td {
     text-align: left;
     padding: 5px;
 }
</style>
