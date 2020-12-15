<template>
  <v-app>
    <h4>{{ kidzStatus }}</h4>
    <p>enter childname</p>
    <input
      type="text"
      placeholder="Enter Child name"
      id="email-input"
      class="text-format"
      v-model="childname"
    />
    <br>
<p>Enter Title for Entry</p>
     <input
      type="text"
      placeholder="Enter Title for Entry"
      id="email-input"
      class="text-format"
      v-model="title"
    />
    <br>
<p>Enter description</p>
     <input
      type="text"
      placeholder="Enter description"
      id="email-input"
      class="text-format"
      v-model="description"
    />
    <br>
<p>Enter image url</p>
     <input
      type="text"
      placeholder="Enter image url"
      id="email-input"
      class="text-format"
      v-model="photo"
    />

    <button @click="postEntry()">Create Entry</button>
  </v-app>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "entry-create",
  data() {
    return {
      childname: "",
      title: "",
      description: "",
      photo: "",
      kidzStatus: "Entry!",
    };
  },
  methods: {
    postEntry() {
      this.kidzStatus = "Entering Data!";
      axios
        .request({
          url: "http://localhost:5000/api/entry",
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          data: {
            loginToken: cookies.get("loginToken"),
            childname: this.childname,
            title: this.title,
            description: this.description,
            photo: this.photo,
          },
        })
        .then((response) => {
          console.log(response);
          this.kidzStatus = "Data Entered!";
        })
        .catch((error) => {
          console.log(error);
          this.kidzStatus = "Failed to enter data";
        });
    },
  },
};
</script>

<style scoped>
</style>