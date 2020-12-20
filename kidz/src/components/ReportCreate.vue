<template>
  <div>
    <h4>{{ kidzStatus }}</h4>
    <p>Enter Classroom : </p>
    <input
      type="text"
      placeholder="............"
      id="email-input"
      class="text-format"
      v-model="classroom"
    />
    <br />
    <p>Actions : </p>
    <input
      type="text"
      placeholder="Enter Title for Entry"
      id="email-input"
      class="text-format"
      v-model="title"
    />
    <v-btn @click="postReport()">Create Report</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "entry-create",
  data() {
    return {
      classroom: "",
      actions: "",
      kidzStatus: "Entry!",
    };
  },
  methods: {
    postReport() {
      this.kidzStatus = "Entering Data!";
      axios
        .request({
          url: "http://127.0.0.1:5000/api/report",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          data: {
            loginToken: cookies.get("loginToken"),
            classroom: this.classroom,
            actions: this.actions,
            
          },
        })
        .then((response) => {
          console.log(response);
          this.kidzStatus = "Report data Entered!";
        })
        .catch((error) => {
          console.log(error);
          this.kidzStatus = "Failed to enter data for report";
        });
    },
  },
};
</script>

<style scoped>
</style>