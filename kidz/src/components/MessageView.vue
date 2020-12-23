<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="800">
        <v-card-title class="white--text mt-8">
          Inbox
          <v-avatar size="56">
          </v-avatar>   
        </v-card-title>
        <v-timeline align-top dense>
        </v-timeline>
          <h3>{{ messageObject.message_to }}</h3>
          <h3>{{ messageObject.subject }}</h3>
          <h3>{{ messageObject.message }}</h3>
          <h3>{{ messageObject.message_from }}</h3>
          <message-delete v-if="isOwned" :messageId="messageObject.id" />
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import MessageDelete from "../components/MessageDelete.vue";
import cookies from "vue-cookies";
export default {
  name: "message-get",
  components: {
    MessageDelete,
  },

  props: {
    messageObject: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOwned: cookies.get("user") == this.messageObject.userId,
      message_to: this.messageObject.message_to,
      subject: this.messageObject.subject,
      message: this.messageObject.message,
      message_from: this.message_from,
    };
  },

  methods: {
    updateMessage(newMessageto, newSubject, newMessage) {
      this.message_to = newMessageto;
      this.subject = newSubject;
      this.message = newMessage;
    },
  },
};
</script>

<style scoped>
.entry-container {
  margin: 20px;
}
</style>