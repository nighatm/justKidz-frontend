<template>
  <v-app class="blue lighten-4">
    <Navbar/>
   
    <v-content>
      <router-view> </router-view>
    

    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";


export default {
  name: "App",

   components: {
    Navbar,
   
  },

  
};
</script>
<style scoped>
.heading-style{
 align-content: center;
 color: aliceblue;
}

</style>