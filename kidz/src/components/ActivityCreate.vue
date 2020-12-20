<template>
  <div>
    <h4>{{ kidzStatus }}</h4>
    
    <p>Enter Activity Type</p>
    <input
      type="text"
      placeholder="......"
      id="email-input"
      class="text-format"
      v-model="activityType"
    />
    <br />
    <p>Enter Activity Name</p>
    <input
      type="text"
      placeholder="....."
      id="email-input"
      class="text-format"
      v-model="activityName"
    />
    <br />
    <p>Enter Activity Description</p>
    <input
      type="text"
      placeholder="......"
      id="email-input"
      class="text-format"
      v-model="description"
    />
<br>
    <v-btn @click="postActivity()">Create Activity</v-btn>
    <br>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "activity-create",
  data() {
    return {
      activityType: "",
      activityName: "",
      description: "",
      kidzStatus: "Activity!",
    };
  },
  methods: {
    postActivity() {
      this.kidzStatus = "Entering Data!";
      axios
        .request({
          url: "http://127.0.0.1:5000/api/activity",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          data: {
            loginToken: cookies.get("loginToken"),
            activityType: this.activityType,
            activityName: this.activityName,
            description: this.description,
          },
        })
        .then((response) => {
          console.log(response);
          this.kidzStatus = "Data Entered!";
        })
        .catch((error) => {
          console.log(error);
          this.kidzStatus = "Failed to enter data";
        });
    },
  },
};
</script>

<style scoped>
</style>