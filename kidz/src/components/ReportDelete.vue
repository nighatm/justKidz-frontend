<template>
  <div>
    <v-btn small @click="deleteReport()" elevation="2">Delete </v-btn>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "report-delete",
  props: {
    reportId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    deleteReport: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/report",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: cookies.get("loginToken"),
            reportId: this.reportId,
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