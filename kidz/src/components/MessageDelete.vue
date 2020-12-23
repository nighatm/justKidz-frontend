<template>
  <div>
    <v-btn @click="deleteMessage()" elevation="2">Delete</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "message-delete",
  props: {
    messageId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    deleteMessage: function () {
      axios
        .request({
          url: "https:/justkidz.ml/api/message",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: cookies.get("loginToken"),
            messageId: this.messageId,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>