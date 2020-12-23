<template>
  <div>
    <activity-create class="mr-3 hidden-xs-only" />
    <activity-create class="hidden-sm-and-up" style="max-width: 330px" />
    <v-btn color="#00796B" dark elevation="2" @click="getActivity()"
      >Get Activities
    </v-btn>
    <br />
    <br />
    <v-simple-table height="300px" class="mr-3 hidden-xs-only tab-align">
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
        <tr
          v-for="activityObject in activities"
          :key="activityObject.activityId"
        >
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
    <!-- for mobile screen with less -->
    <v-simple-table height="300px" class="hidden-sm-and-up tab-align">
      <thead background-color="pink">
        <tr>
          <th style="background-color: pink" class="text-left">
            Activity Type
          </th>
          <th style="background-color: pink" class="text-left">
            Activity NAme
          </th>
          <th style="background-color: pink" class="text-left">
            <v-icon> mdi-pencil </v-icon>
          </th>
          <th style="background-color: pink" class="text-left">
            <v-icon>delete</v-icon>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="activityObject in activities"
          :key="activityObject.activityId"
        >
          <td>{{ activityObject.activityName }}</td>
          <td>{{ activityObject.activityType }}</td>
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
    <div><br /><br /></div>
    <footer-page></footer-page>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import ActivityCreate from "../components/ActivityCreate.vue";
import ActivityEdit from "../components/ActivityEdit.vue";
import ActivityDelete from "../components/ActivityDelete.vue";
import FooterPage from "../components/Footer.vue";

export default {
  name: "activity-page",
  data() {
    return {
      activities: [],
    };
  },
  components: {
    ActivityCreate,
    ActivityEdit,
    ActivityDelete,
    FooterPage,
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
.tab-align {
  text-align: justify;
  margin-right: 2vh;
  margin-left: 2vh;
}
</style>