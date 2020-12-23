<template>
  <div>
    <report-create class="mr-3 hidden-xs-only" />
    <report-create class="hidden-sm-and-up" style="max-width: 330px" />
    <br />
    <v-btn color="#00796B" dark levation="2" @click="getReport()"
      >Get Reports <v-icon>mouse</v-icon></v-btn
    >
    <br />
    <br />
    <!-- Table for viewing report data -->
    <div>
      <v-simple-table height="300px" class="hidden-xs-only tab-align">
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
    <!-- for mobile screen with less data features -->
    <div>
      <v-simple-table height="300px" class="hidden-sm-and-up tab-align">
        <thead background-color="pink">
          <tr>
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
    <br /><br />
    <div>
      <footer-page></footer-page>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import ReportCreate from "../components/ReportCreate.vue";
import ReportEdit from "../components/ReportEdit.vue";
import ReportDelete from "../components/ReportDelete.vue";
import FooterPage from "../components/Footer.vue";

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
    FooterPage,
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
          url: "https:/justkidz.ml/api/report",
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
.tab-align {
  text-align: justify;
  margin-right: 2vh;
  margin-left: 2vh;
}
</style>