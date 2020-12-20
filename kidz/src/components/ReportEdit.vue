<template>
  <div>
    <v-btn @click="shouldShow = !shouldShow"> Edit Report</v-btn>
    <div v-if="shouldShow">
      <v-text-field box v-model="classroom"> </v-text-field>
      <v-text-field box v-model="actions"> </v-text-field>
      <v-btn @click="editReport()"> Submit </v-btn>
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
          url: "http://127.0.0.1:5000/api/report",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: cookies.get("loginToken"),
            reportId: this.id,
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