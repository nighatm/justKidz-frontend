<template>
  <div class="container">
    <h1>Activity Page </h1>
    <activity-create />
    <br>
    <v-btn elevation="2" @click="getActivity()">Get Activities</v-btn>

    <div v-for="activity in activities" :key="activity.id">
      <activity-view :activityObject="activity"> </activity-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ActivityCreate from "../components/ActivityCreate.vue";
import ActivityView from "../components/ActivityView.vue";

export default {
  name: "activity-page",
  data() {
    return {
      activities: [],
    };
  },
  components: {
    ActivityCreate,
    ActivityView,
  },
  mounted: function () {
    this.getActivity();
  },
  methods: {
    getActivity: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/activity",
          method: "GET",

          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          this.entries = response.data;
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