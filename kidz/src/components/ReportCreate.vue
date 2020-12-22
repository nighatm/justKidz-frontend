<template>
  <div>
     <h1 class="heading-style">`Check  Reports for your Child`</h1>
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
              v-model="classroom"
              :counter="100"
              label="Enter Classroom "
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <v-textarea
              clearable
              clear-icon="mdi-close-circle"
              label="Describe Actions"
              :counter="250"
              value="This is clearable text."
              v-model="actions"
            ></v-textarea>
          </v-col>
        </v-row>
         </v-container>
    </v-form>
    <v-btn color="#00796B"  dark x-large elevation="2" @click="postReport()">Create Report</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "entry-create",
  data() {
    return {
      classroom: "",
      actions: "",
      kidzStatus: "Start Entering Data!",
    };
  },
  methods: {
    postReport() {
      this.kidzStatus = "Entering Data!";
      axios
        .request({
          url: "http://127.0.0.1:5000/api/report",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          data: {
            loginToken: cookies.get("loginToken"),
            classroom: this.classroom,
            actions: this.actions,
            
          },
        })
        .then((response) => {
          console.log(response);
          this.kidzStatus = "Report data Entered!";
        })
        .catch((error) => {
          console.log(error);
          this.kidzStatus = "Failed to enter data for report";
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