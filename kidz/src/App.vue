<template>
  <v-app class="blue lighten-4">
    <Navbar/>
    <!-- <Footer/> -->
    <!-- <signup/> -->
    <!-- <menu-page/> -->
    <v-content>
      <router-view> </router-view>
    

    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
// import Signup from './views/Signup.vue';
// import Footer from "./components/Footer.vue";
// import MenuPage from "./components/Menu.vue";

export default {
  name: "App",

   components: {
    Navbar,
      // Signup,
    // Footer,

    // MenuPage,
  },

  
};
</script>
<style scoped>
.heading-style{
 align-content: center;
 color: aliceblue;
}

</style>