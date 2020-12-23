<template>
  <div>
    <v-row>
      <v-btn small @click="shouldShow = !shouldShow"> Edit</v-btn>
    </v-row>
    <div v-if="shouldShow">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="#0096AF"
            dark
            v-bind="attrs"
            v-on="on"
            @click.stop="dialog = true"
          >
            Click to Edit Report
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="#0096AF">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-title>
            <span class="headline">Edit child Report</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="reportId"
                    :counter="100"
                    label="Entry ID"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="classroom"
                    :counter="100"
                    label="Enter Classroom"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="actions"
                  :counter="250"
                  label="Entry actions"
                ></v-text-field>
              </v-row>
              <v-col>
                <v-btn color="#0096AF" dark @click="editReport()">
                  Submit
                </v-btn>
              </v-col>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "report-edit",
  data() {
    return {
      shouldShow: false,
      classroom: "",
      actions: "",
      dialog: false,
    };
  },
  props: {
    reportId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    editReport: function () {
      axios
        .request({
          url: "https:/justkidz.ml/api/report",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: cookies.get("loginToken"),
            reportId: this.reportId,
            classroom: this.classroom,
            actions: this.actions,
          },
        })
        .then((response) => {
          console.log(response);
          this.$emit("update-report", this.classroom, this.actions);
          this.shouldShow = false;
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