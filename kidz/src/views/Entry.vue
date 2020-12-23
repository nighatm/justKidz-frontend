<template>
  <div>
    <entry-create class="mr-3 hidden-xs-only" />
    <entry-create class="hidden-sm-and-up" style="max-width: 330px" />
    <br />
    <v-row align="center" justify="space-around">
      <v-btn
        class="xs-8 md-4 lg-2"
        color="#00796B"
        dark
        x-large
        elevation="2"
        @click="getEntry()"
        >Show Entries for child <v-icon>mouse</v-icon>
      </v-btn></v-row
    >
    <br />
    <v-simple-table height="300px" class="hidden-xs-only tab-align">
      <thead background-color="pink">
        <tr>
          <th style="background-color: pink" class="text-left">ID</th>
          <th style="background-color: pink" class="text-left">Childname</th>
          <th style="background-color: pink" class="text-left">
            <v-icon> schedule </v-icon>
          </th>
          <th style="background-color: pink" class="text-left">Options</th>
          <th style="background-color: pink" class="text-left">Title</th>
          <th style="background-color: pink" class="text-left">Description</th>
          <th style="background-color: pink" class="text-left">
            <v-icon> insert_photo </v-icon>
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
        <tr v-for="entryObject in entries" :key="entryObject.id">
          <td>{{ entryObject.id }}</td>
          <td>{{ entryObject.childname }}</td>
          <td>{{ entryObject.createdAt }}</td>
          <td>{{ entryObject.options }}</td>
          <td>{{ entryObject.title }}</td>
          <td>{{ entryObject.description }}</td>
          <td>{{ entryObject.photo }}</td>
          <td>
            <entry-edit
              v-if="isOwned(entryObject.userId)"
              :entryId="entryObject.id"
            />
          </td>
          <td>
            <entry-delete
              v-if="isOwned(entryObject.userId)"
              :entryId="entryObject.id"
            />
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <!-- for mobile screen with less data features -->
    <div>
      <v-simple-table
        height="300px"
        class="hidden-sm-and-up link-text tab-align"
      >
        <thead background-color="pink">
          <tr>
            <th style="background-color: pink" class="text-left">Childname</th>
            <th style="background-color: pink" class="text-left">Options</th>
            <th style="background-color: pink" class="text-left">Title</th>
            <th style="background-color: pink" class="text-left">
              <v-icon> mdi-pencil </v-icon>
            </th>
            <th style="background-color: pink" class="text-left">
              <v-icon>delete</v-icon>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entryObject in entries" :key="entryObject.id">
            <td>{{ entryObject.childname }}</td>
            <td>{{ entryObject.options }}</td>
            <td>{{ entryObject.title }}</td>
            <td>
              <entry-edit
                v-if="isOwned(entryObject.userId)"
                :entryId="entryObject.id"
              />
            </td>
            <td>
              <entry-delete
                v-if="isOwned(entryObject.userId)"
                :entryId="entryObject.id"
              />
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <div>
        <footer-page></footer-page>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import EntryCreate from "../components/EntryCreate.vue";
import EntryEdit from "../components/EntryEdit.vue";
import EntryDelete from "../components/EntryDelete.vue";
import FooterPage from "../components/Footer.vue";

export default {
  name: "entry-page",
  data() {
    return {
      entries: [],
    };
  },
  components: {
    EntryCreate,
    EntryEdit,
    EntryDelete,
    FooterPage,
  },
  mounted: function () {
    this.getEntry();
  },
  methods: {
    isOwned: function (entryId) {
      return cookies.get("user") == entryId;
    },
    getEntry: function () {
      axios
        .request({
          url: "https:/justkidz.ml/api/entry",
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
* {
  margin: 0;
  padding: 0;
}
.tab-align {
  text-align: justify;
  margin-right: 2vh;
  margin-left: 2vh;
}
</style>