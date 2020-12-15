<template>
  <v-app class="blue lighten-4">
    <Navbar/>
    <signup/>

    <v-content>
      <router-view> </router-view>
    <!-- <Footer/> -->

    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Signup from './views/Signup.vue';
// import Footer from "./components/Footer.vue";

export default {
  name: "App",

   components: {
    Navbar,
      Signup,
    // Footer,
  },

  
};
</script>
