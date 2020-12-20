<template>
  <v-card elevation="0" >
    <v-app-bar   color="#00796B" dark shrink-on-scroll>
      <!-- removed absolute form here -->
      <v-toolbar-items >
        <v-img width="180" src="../assets/logoJKF.png" alt="logoImg" />
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-btn icon class="mr-16">
        <v-icon class="mr-1">mdi-email</v-icon> Message
      </v-btn>

      <v-btn to="/calander" icon class="mr-16">
        <v-icon  class="mr-1" right>mdi-calendar</v-icon> Calendar
      </v-btn>

      <v-btn icon class="mr-12">
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
          <v-tab to="/profile">Profile</v-tab>
          <v-tab to="/activity">Activities</v-tab>
          <v-tab to="/entry">Entries</v-tab>
          <v-tab to="/report">Reports</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-container > 
    </v-container>
    <!-- </v-sheet> -->
            <!-- <footer-page/> -->

  </v-card>


</template>

<script>
// import FooterPage from "../components/Footer.vue";
// import EntryCreate from "../components/EntryCreate.vue"
export default {
 name: "toolbar",
 components: {
  //  EntryCreate,
 },
 
};
</script>