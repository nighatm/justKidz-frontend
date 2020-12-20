<template>
  <div>
    <v-btn @click="deleteActivity()" elevation="2">Delete Activity</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "activity-delete",
  props: {
    activityId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    deleteActivity: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/activity",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: cookies.get("loginToken"),
            activityId: this.activityId,
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