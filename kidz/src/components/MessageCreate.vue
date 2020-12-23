<template>
  <div class="xs-8 md-4 lg-2">
    <h4>{{ kidzStatus }}</h4>
    <v-form class="xs-8 md-4 lg-2 form-headings"> 
      <v-text-field
        v-model="message_to"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="subject"
        label="Subject"
        required
      ></v-text-field>

      <v-textarea
        clearable
        clear-icon="mdi-close-circle"
        label="Email Content"
        value="This is clearable text."
      ></v-textarea>
    </v-form>
    <v-btn  color="cyan"  dark elevation="2" @click="postMessage()">Send Message</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "entry-create",
  data() {
    return {
      message_to: "",
      subject: "",
      message_content: "",
      kidzStatus: " Write Message!",
    };
  },
  methods: {
    postMessage() {
      this.kidzStatus = "Creating Message!";
      axios
        .request({
          url: "http://127.0.0.1:5000/api/message",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          data: {
            loginToken: cookies.get("loginToken"),
            message_to: this.message_to,
            subject: this.subject,
            message_content: this.message,
          },
        })
        .then((response) => {
          console.log(response);
          this.kidzStatus = "Message Sent!";
        })
        .catch((error) => {
          console.log(error);
          this.kidzStatus = "Failed to send message";
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

.form-headings{
  text-align: center;
  color: #0096af;
  font-family: Garamond, serif;
  font-size: 28px;
  margin-right: 2vh;
  margin-left: 2vh;
}
</style>