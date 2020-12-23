<template>
  <div>
    <v-card class="mr-3 hidden-xs-only" elevation="0">
      <v-app-bar color="#00796B" dark shrink-on-scroll>
        <v-toolbar-items>
          <!-- how to link the image to / -->
          <v-img
            id="kidz-logo"
            width="180"
            src="../assets/logoJKF.png"
            alt="logoImg"
          />
        </v-toolbar-items>

        <v-spacer></v-spacer>
        <v-btn to="/" icon class="mr-16">
          <v-icon class="mr-1">mdi-home</v-icon> Home
        </v-btn>

        <v-btn to="/message" icon class="mr-16">
          <v-icon class="mr-1">mdi-email</v-icon> Message
        </v-btn>

        <v-btn to="/calander" icon class="mr-16">
          <v-icon class="mr-1" right>mdi-calendar</v-icon> Calendar
        </v-btn>

        <v-btn to="/logout" icon class="mr-12">
          <v-icon class="mr-1" right>exit_to_app</v-icon> Signout
        </v-btn>
        <v-btn icon>
          <v-icon color="pink" class="mr-2" right>face</v-icon>
        </v-btn>

        <!-- <v-btn >
          <span>signout</span>
          <v-icon right> exit_to_app </v-icon>
        </v-btn> -->

        <template v-slot:extension>
          <v-tabs color="#EAC800 " align-with-title>
            <v-tab to="/login">Login</v-tab>
            <v-tab to="/profile">Profile</v-tab>
            <v-tab to="/activity">Activities</v-tab>
            <v-tab to="/entry">Entries</v-tab>
            <v-tab to="/report">Reports</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>

      <v-container> </v-container>
      <!-- </v-sheet> -->
      <!-- <footer-page/> -->
    </v-card>

   
    <div>
      

    <v-app-bar class="hidden-sm-and-up" color="#00796B" dark prominent>
      <v-app-bar-nav-icon ><v-img
                id="kidz-logo"
                width="55"
                src="../assets/logoJKF.png"
                alt="logoImg"/></v-app-bar-nav-icon>


      <v-spacer></v-spacer>

      <v-btn to="/" icon>
              <v-icon class="mr-1">mdi-home</v-icon>
            </v-btn>
            <v-btn to="/message" icon>
              <v-icon class="mr-1">mdi-email</v-icon>
            </v-btn>
            <v-btn to="/logout" icon class="mr-1">
              <v-icon class="mr-1" right>exit_to_app</v-icon>
            </v-btn>
            <v-btn to="/login" icon class="mr-1">
              <v-icon class="mr-1" right>login</v-icon>
            </v-btn>
           <template v-slot:extension>
           <v-tab><v-icon class="mr-8" to="/profile" medium>face</v-icon></v-tab>
            <v-tab to="/activity"> Activity</v-tab>
            <v-tab to="/entry">Entry</v-tab>
            <v-tab  to="/report">Report</v-tab>
        
        </template>  
    </v-app-bar>

          

    
    </div>
  </div>
</template>

    
 

<script>
// import FooterPage from "../components/Footer.vue";
// import EntryCreate from "../components/EntryCreate.vue"
// import HomeDrawer from "../components/Drawer.vue"

export default {
  name: "toolbar",
  components: {
    //  HomeDrawer
  },

  data: () => ({
     
    }),

    
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#kidz-logo {
  width: 50px;
}

@media only screen and (min-width: 670px) {
  #kidz-logo {
    width: 30%;
  }
}

@media only screen and (min-width: 1020px) {
  #kidz-logo {
    width: 15%;
  }
}
</style>