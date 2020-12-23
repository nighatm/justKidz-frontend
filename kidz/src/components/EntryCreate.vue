<template>
  <div>
    <br />
    <h1 class="heading-style">`Check Entries for your Child`</h1>
    <br /><br />
    <p class="p-text">
      During centres kiddos followed directions by staff explaining how to
      squeeze the clothespins to pick different coloured animals, during gym
      kiddos played what time is it Mr Wolf and listened to other kiddos telling
      how many steps to take. Age: SLP Domain: Receptive Language Skill:
      Identifying vocabulary items (food, clothing, vehicles, animals, household
      items, body parts etc.)
    </p>
    <p class="p-text">
      During centres kiddos used clothespins to pick up different coloured
      animals and sorted into correct coloured comtainers Age: SLP Domain:
      Expressive Language Skill: Labelling categories (e.g. fruits, animals)
    </p>
    <br />
    <div>
      <v-form class="xs-8 md-4 lg-2 form-headings">
        <h4>{{ kidzStatus }}</h4>
        <br />
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="childname"
                :counter="100"
                label="Enter Child Name "
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="title"
                :counter="100"
                label="Title for entry"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="8">
              <v-textarea
                clearable
                clear-icon="mdi-close-circle"
                label="Write Description"
                :counter="250"
                value="This is clearable text."
                v-model="description"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="photo"
                label="URL for  Image "
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn
                color="#00796B"
                dark
                x-large
                elevation="2"
                @click="postEntry()"
                >Create Entry <v-icon>mouse</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
    <br />
    <br />
    <p class="p-text">
      Playing with the trains. They were taking turns building the track and
      taking their trains on the track.
      Age: SLP Domain: Social Communication
      Skill: Conversation Skills
    </p>
  </div>
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
      kidzStatus: "Start Entering Data!",
    };
  },
  methods: {
    postEntry() {
      this.kidzStatus = "Entering Data!";
      axios
        .request({
          url: "http://127.0.0.1:5000/api/entry",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

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
* {
  margin: 0;
  padding: 0;
}
.heading-style {
  text-align: center;
  color: #263238;
  font-family: Garamond, serif;
}
.p-text {
  display: grid;
  color: #263238;
  font-family: Josefin Sans;
  font-size: 22px;
  text-align: justify;
  margin-right: 2vh;
  margin-left: 2vh;
}
.form-headings {
  text-align: center;
  color: #0096af;
  font-family: Garamond, serif;
  font-size: 28px;
  margin-right: 2vh;
  margin-left: 2vh;
}
</style>