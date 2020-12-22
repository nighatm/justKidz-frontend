<template>
  <div>
    <v-row>
      <v-btn small @click="shouldShow = !shouldShow"> Edit </v-btn>
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
            Click to Edit Entry
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="#0096AF">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-title>
            <span class="headline">Edit child Entry</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="entryId"
                    :counter="100"
                    label="Entry ID"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="title"
                    :counter="100"
                    label="Entry Title"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="description"
                  :counter="250"
                  label="Entry Description"
                ></v-text-field>
              </v-row>
              <v-col cols="12">
                <v-text-field v-model="photo"></v-text-field>
              </v-col>
              <v-col>
                <v-btn color="#0096AF" dark @click="editEntry()">
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
  name: "entry-edit",
  data() {
    return {
      shouldShow: false,
      title: "",
      description: "",
      photo: "",
      dialog: false,
    };
  },
  props: {
    entryId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    editEntry: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/entry",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: cookies.get("loginToken"),
            entryId: this.entryId,
            title: this.title,
            description: this.description,
            photo: this.photo,
          },
        })
        .then((response) => {
          console.log(response);
          this.$emit("update-entry", this.title, this.description, this.photo);
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