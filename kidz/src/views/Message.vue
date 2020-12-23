<template>
  <div class="xs-8 md-4 lg-2">
    <br /><br />
    <v-simple-table class="xs-12 md-4 lg-2 tab-align" height="400px">
      <v-row>
        <v-col>
          <v-container>
            <v-card>
              <v-toolbar color="cyan" dark>
                <v-toolbar-title>Message Center</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <message-create class="mr-3 hidden-xs-only" />
              <message-create
                class="hidden-sm-and-up"
                style="max-width: 330px"
              />
              <br />
            </v-card>
          </v-container>
        </v-col>
        <v-col> </v-col>
        <v-col class="mr-3 hidden-sm-and-down">
          <v-img
            width="400px"
            height="400"
            src="https://image.shutterstock.com/z/stock-vector-cartoon-grandpa-with-joyful-kids-and-message-banner-vector-illustration-673842838.jpg"
          />
        </v-col>
      </v-row>
    </v-simple-table>

    <v-row class="mr-3 hidden-xs-only">
      <v-btn color="#00796B" dark x-large elevation="2" @click="getMessage()"
        >Check Messages <v-icon>mouse</v-icon></v-btn
      >
    </v-row>
    <v-row class="hidden-sm-and-up">
      <v-btn color="#00796B" dark medium elevation="2" @click="getMessage()"
        >Get Messages
      </v-btn>
    </v-row>
    <br />

    <v-simple-table class="xs-12 md-4 lg-2 tab-align" height="300px">
      <thead background-color="pink">
        <tr>
          <th style="background-color: #00e5ff" class="text-left">
            <v-icon> schedule </v-icon>
          </th>
          <th style="background-color: #00e5ff" class="text-left">Subject</th>
          <th style="background-color: #00e5ff" class="text-left">Message</th>
          <th style="background-color: #00e5ff" class="text-left">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="messageObject in messages" :key="messageObject.id">
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
    <footer-page />
  </div>
</template>

<script>
import axios from "axios";
import MessageCreate from "../components/MessageCreate.vue";
import MessageDelete from "../components/MessageDelete.vue";
import FooterPage from "../components/Footer.vue";
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
    MessageDelete,
    FooterPage,
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
          url: "https:/justkidz.ml/api/message",
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
* {
  margin: 0;
  padding: 0;
}
.tab-align {
  text-align: justify;
  margin-right: 2vh;
  margin-left: 2vh;
}
</style>