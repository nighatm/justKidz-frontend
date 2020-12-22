<template>
  <div class="container">
    <report-create />
    <br />
    <v-row align="center" justify="space-around">
      <v-btn color="#00796B" dark x-large elevation="2" @click="getReport()"
        >Get Reports <v-icon>mouse</v-icon></v-btn
      >
    </v-row>
    <br>
    <v-row align="center" justify="space-around">
    <v-btn color="#00796B" dark small elevation="2" @click="getReport()"
      >Get Reports
    </v-btn> </v-row>
    <br>
    <!-- Table for viewing report data -->
    <v-simple-table height="300px" class="hidden-md-and-down">
      <thead background-color="pink">
        <tr>
          <th style="background-color: pink" class="text-left">ID</th>
          <th style="background-color: pink" class="text-left">
            <v-icon> schedule </v-icon>
          </th>
          <th style="background-color: pink" class="text-left">Classroom</th>
          <th style="background-color: pink" class="text-left">Actions</th>
          <th style="background-color: pink" class="text-left">
            <v-icon> mdi-pencil </v-icon>
          </th>
          <th style="background-color: pink" class="text-left">
            <v-icon>delete</v-icon>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reportObject in reports" :key="reportObject.id">
          <td>{{ reportObject.id }}</td>
          <td>{{ reportObject.createdAt }}</td>
          <td>{{ reportObject.classroom }}</td>
          <td>{{ reportObject.actions }}</td>

          <td>
            <report-edit
              v-if="isOwned(reportObject.userId)"
              :reportId="reportObject.reportId"
            />
          </td>
          <td>
            <report-delete
              v-if="isOwned(reportObject.userId)"
              :reportId="reportObject.reportId"
            />
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
import ReportCreate from "../components/ReportCreate.vue";
import ReportEdit from "../components/ReportEdit.vue";
import ReportDelete from "../components/ReportDelete.vue";

export default {
  name: "report-page",
  data() {
    return {
      reports: [],
    };
  },
  components: {
    ReportCreate,
    ReportEdit,
    ReportDelete,
  },
  mounted: function () {
    this.getReport();
  },
  methods: {
    isOwned: function (reportId) {
      return cookies.get("user") == reportId;
    },
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