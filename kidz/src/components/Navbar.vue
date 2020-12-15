<template>
  <v-card class="overflow-hidden">
    <v-app-bar
     absolute
      color="#00796B"
      dark
      shrink-on-scroll
    >
     <v-toolbar-items>
       <v-img width="180" src="../assets/logoJKF.png" alt="logoImg"/> 

     </v-toolbar-items>



      <v-spacer></v-spacer>

      <v-btn icon class="mr-16">
        <v-icon class="mr-2">mdi-email</v-icon> Message
      </v-btn>

       <v-btn icon class="mr-16">
        <v-icon class="mr-2" >add_box</v-icon> Entry
      </v-btn>

      <v-btn icon class="mr-12">
        <v-icon class="mr-2" right>mdi-calendar</v-icon> Calendar
      </v-btn>

      <v-btn icon >
        <v-icon color="pink" class="mr-2" right>face</v-icon> 
      </v-btn>

      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="yellow"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs color="#EAC800 " align-with-title>
          <v-tab >Profile</v-tab>
          <v-tab>Journal</v-tab>
          <v-tab>Entries</v-tab>
          <v-tab>Reports</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      max-height="400"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'User Settings' },
        { title: 'Edit Profile' },
        { title: 'Logout' },
      ],
    }),
  }
</script>