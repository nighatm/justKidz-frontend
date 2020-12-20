<template>
  <div class="container">
    <v-container>
    <v-row justify="space-around">
      <v-card width="2000">
        <v-toolbar color="cyan" dark>
          <v-toolbar-title>Message Center</v-toolbar-title>

          <v-spacer></v-spacer>

          
            <!-- <v-icon>mdi-magnify</v-icon> -->
             <v-btn elevation="2"  @click="getMessage()">Check Messages</v-btn>
      
        </v-toolbar>
<message-create/>
  </v-card>
    </v-row>
  </v-container>
        <!-- <v-img
          height="10%"
          src="https://image.shutterstock.com/z/stock-vector-cartoon-grandpa-with-joyful-kids-and-message-banner-vector-illustration-673842838.jpg"
        /> -->
    <!-- <h1>Message Center</h1> -->
    
    <v-toolbar color="cyan" dark>
          <v-toolbar-title>Inbox</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>

        <v-img
          height="150px"
          src="https://image.shutterstock.com/z/stock-vector-cartoon-grandpa-with-joyful-kids-and-message-banner-vector-illustration-673842838.jpg"
        />

    <div v-for="message in messages" :key="message.id">
      <message-view :messageObject="message"> </message-view>
    </div>
     <footer-page/>
  </div>
 
</template>




<script>
import axios from "axios";
import MessageCreate from "../components/MessageCreate.vue"
import MessageView from "../components/MessageView.vue";
import FooterPage from "../components/Footer.vue";
import cookies from "vue-cookies"
export default {
  name: "message-page",
  data() {
    return {
      messages: [],
    };
  },
  components: {
    MessageCreate,
    MessageView,
    FooterPage,
  },
  mounted: function () {
    this.getMessage();
  },
  methods: {
    getMessage: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/message",
          method: "GET",

          headers: {
            "Content-Type": "application/json",
            "loginToken": cookies.get("loginToken"),
          },
        })
        .then((response) => {
          console.log(response);
          this.messages = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.container {
  margin: 20px;
}
</style>