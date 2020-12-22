<template>
  <div class="container">
    <v-container>
      <v-row justify="space-around">
        <v-card width="2000">
          <v-toolbar color="cyan" dark>
            <v-toolbar-title>Message Center</v-toolbar-title>
            <v-spacer></v-spacer>
           
          </v-toolbar>
          <message-create />
          <br>
        </v-card>
      </v-row>
    </v-container>
    <br>
    <!-- <v-img
          height="10%"
          src="https://image.shutterstock.com/z/stock-vector-cartoon-grandpa-with-joyful-kids-and-message-banner-vector-illustration-673842838.jpg"
        /> -->
    <!-- <h1>Message Center</h1> -->

    <!-- <v-toolbar color="cyan" dark>
      <v-toolbar-title>Inbox</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-img
      height="150px"
      src="https://image.shutterstock.com/z/stock-vector-cartoon-grandpa-with-joyful-kids-and-message-banner-vector-illustration-673842838.jpg"
    /> -->
     <v-btn  color="#00796B"  dark x-large elevation="2" @click="getMessage()">Check Messages  <v-icon>mouse</v-icon></v-btn>
      <br> <br />
<v-simple-table height="300px" >

      <thead background-color="pink">
        <tr>
          <th style="background-color: #00E5FF" class="text-left">MessageId</th>
          <th style="background-color: #00E5FF" class="text-left"><v-icon> schedule </v-icon></th>
          <th style="background-color: #00E5FF" class="text-left">Subject</th>
          <th style="background-color: #00E5FF" class="text-left">Message</th>
          <th style="background-color: #00E5FF" class="text-left">Delete</th>

        </tr>
      </thead>
         <tbody>
       <tr v-for="messageObject in messages" :key="messageObject.id">
          <td>{{ messageObject.id }}</td>
          <td>{{ messageObject.createdAt }}</td>
          <td>{{ messageObject.subject }}</td>
          <td>{{ messageObject.message }}</td>
          <td>
            <message-delete
              v-if="isOwned(messageObject.userId)"
              :messageId="messageObject.id"
            />
          </td>
          </tr>
          </tbody>
       </v-simple-table>      
       <!-- <footer-page /> -->
  </div>
</template>




<script>
import axios from "axios";
import MessageCreate from "../components/MessageCreate.vue";
import MessageDelete from "../components/MessageDelete.vue";
// import MessageView from "../components/MessageView.vue";
// import FooterPage from "../components/Footer.vue";
import cookies from "vue-cookies";
export default {
  name: "message-page",
  data() {
    return {
      messages: [],
    };
  },
  components: {
    MessageCreate,
    // MessageView,
    MessageDelete,
    // FooterPage,
  },
  mounted: function () {
    this.getMessage();
  },
  methods: {

     isOwned: function (messageId) {
      return cookies.get("user") == messageId;
    },
    getMessage: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/message",
          method: "GET",

          headers: {
            "Content-Type": "application/json",
            loginToken: cookies.get("loginToken"),
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
  color:
}
</style>