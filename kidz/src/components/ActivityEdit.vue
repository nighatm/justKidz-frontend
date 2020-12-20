<template>
  <div>
    <v-btn @click="shouldShow = !shouldShow"> Edit Activity </v-btn>
    <div v-if="shouldShow">
      <v-text-field box v-model="activityType"> </v-text-field>
      <v-text-field box v-model="activityName"> </v-text-field>
      <v-text-field box v-model="description"> </v-text-field>
      <v-btn @click="editActivity()"> Submit </v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "activity-edit",
  data() {
    return {
      shouldShow: false,
      activityType: "",
      activityName: "",
      description: "",
     
    };
  },
  props: {
    activityId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    editActivity: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/activity",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: cookies.get("loginToken"),
            activityId: this.id,
            activityType: this.activityType,
            activityName: this.activityName,
            description: this.description,
           
          },
        })
        .then((response) => {
          console.log(response);
          this.$emit("update-activity", this.activityType, this.activityName, this.description);
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