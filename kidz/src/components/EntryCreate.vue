<template>
  <div>
    <h1 class="heading-style">`Check  Entries for your Child`</h1>
    <br><br>
    <p class="p-text">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo tempore,
      eos deleniti excepturi atque minus repellat non itaque expedita cupiditate
      nisi quasi tenetur, et consequuntur ipsa quos optio corporis fuga!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo tempore,
      eos deleniti excepturi atque minus repellat non itaque expedita cupiditate
      nisi quasi tenetur, et consequuntur ipsa quos optio corporis fuga!
    </p>
    <v-form>
      <h4>{{ kidzStatus }}</h4>
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
           <v-btn  color="#00796B"  dark x-large elevation="2" @click="postEntry()">Create Entry  <v-icon>mouse</v-icon></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

   
    <br>
    <br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui labore quod perspiciatis pariatur quam! Molestias cum similique error minima eos dignissimos asperiores numquam, beatae facere dolore, temporibus laudantium vel!</p>
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

.heading-style{
 text-align: center;
 color:#263238 ;
 font-family: Garamond, serif;
}
.p-text{
  color:#263238;
 font-family: Josefin Sans;
 font-size: 22px;
}
</style>