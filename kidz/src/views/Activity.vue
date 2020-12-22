<template>
  <div class="container">
    <activity-create />
    <br />
    <v-row align="center" justify="space-around">
      <v-btn class="xs-8 md-4 lg-2" color="#00796B" dark x-large elevation="2" @click="getActivity()"
        >Get Activities <v-icon>mouse</v-icon></v-btn
      ></v-row
    >
    <br />
    <v-btn color="#00796B" dark small elevation="2" @click="getActivity()"
      >Get Activities</v-btn>
    <v-simple-table height="300px" class="hidden-md-and-down">
      <thead background-color="pink">
        <tr>
          <th style="background-color: pink" class="text-left">ID</th>
          <th style="background-color: pink" class="text-left">
            <v-icon> schedule </v-icon>
          </th>
          <th style="background-color: pink" class="text-left">
            Activity Type
          </th>
          <th style="background-color: pink" class="text-left">
            Activity NAme
          </th>
          <th style="background-color: pink" class="text-left">Description</th>
          <th style="background-color: pink" class="text-left">
            <v-icon> mdi-pencil </v-icon>
          </th>
          <th style="background-color: pink" class="text-left">
            <v-icon>delete</v-icon>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="activityObject in activities" :key="activityObject.activityId">
          <td>{{ activityObject.activityId }}</td>
          <td>{{ activityObject.createdAt }}</td>
          <td>{{ activityObject.activityName }}</td>
          <td>{{ activityObject.activityType }}</td>
          <td>{{ activityObject.description }}</td>
          <td>
            <activity-edit
              v-if="isOwned(activityObject.userId)"
              :activityId="activityObject.activityId"
            />
          </td>
          <td>
            <activity-delete
              v-if="isOwned(activityObject.userId)"
              :activityId="activityObject.activityId"
            />
          </td>
        </tr>
      </tbody>
    </v-simple-table>

    <!-- <div v-for="activity in activities" :key="activity.id">
      <activity-view :activityObject="activity"> </activity-view>

    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import ActivityCreate from "../components/ActivityCreate.vue";
// import ActivityView from "../components/ActivityView.vue";
import ActivityEdit from "../components/ActivityEdit.vue";
import ActivityDelete from "../components/ActivityDelete.vue";
import cookies from "vue-cookies";

export default {
  name: "activity-page",
  data() {
    return {
      activities: [],
    };
  },
  components: {
    ActivityCreate,
    // ActivityView,
    ActivityEdit,
    ActivityDelete,
  },
  mounted: function () {
    this.getActivity();
  },
  methods: {
    isOwned: function (activityId) {
      return cookies.get("user") == activityId;
    },
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
          this.activities = response.data;
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