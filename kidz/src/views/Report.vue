<template>
  <div class="container">
    <h1>Report page</h1>
    <report-create />
    <v-btn elevation="2" @click="getReport()">Get Reports</v-btn>

    <div v-for="report in reports" :key="report.id">
      <report-view :reportObject="report"> </report-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ReportCreate from "../components/ReportCreate.vue";
import ReportView from "../components/ReportView.vue";

export default {
  name: "report-page",
  data() {
    return {
      reports: [],
    };
  },
  components: {
    ReportCreate,
    ReportView,
  },
  mounted: function () {
    this.getReport();
  },
  methods: {
    getReport: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/report",
          method: "GET",

          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          this.reports = response.data;
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