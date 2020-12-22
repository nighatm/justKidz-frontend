<template>
  <div>
    <v-row>
    <v-btn small @click="shouldShow = !shouldShow"> Edit  </v-btn>
    </v-row>
    <div v-if="shouldShow">
      <!-- <v-text-field box v-model="activityType"> </v-text-field>
      <v-text-field box v-model="activityName"> </v-text-field>
      <v-text-field box v-model="description"> </v-text-field>
      <v-btn @click="editActivity()"> Submit </v-btn> -->

       <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="#0096AF"
            dark
            v-bind="attrs"
            v-on="on"
            @click.stop="dialog = true"
          >
            Click to Edit Activity
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="#0096AF">
            <v-btn icon dark @click="dialog = false">
              <!-- how to close the dialog box -->
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-title>
            <span class="headline">Edit child Activity</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="activityId"
                    :counter="100"
                    label="Activity ID"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="activityType"
                    :counter="100"
                    label=" Activity Type"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="activityName"
                  :counter="250"
                  label=" Activity Name"
                ></v-text-field>
              </v-row>
               <v-row>
                <v-text-field
                  v-model="description"
                  :counter="250"
                  label=" Description"
                ></v-text-field>
              </v-row>
             
              <v-col>
                <v-btn color="#0096AF" dark @click="editActivity()">
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
  name: "activity-edit",
  data() {
    return {
      shouldShow: false,
      activityType: "",
      activityName: "",
      description: "",
      dialog: false,
     
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
            activityId: this.activityId,
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