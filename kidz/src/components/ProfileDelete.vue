<template>
<v-card class="mx-auto" style="max-width: 500px">
    <v-toolbar color="cyan accent-4" cards dark flat>
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-card-title class="title font-weight-regular"> Want to delete your account? </v-card-title>
    </v-toolbar>
    <v-form ref="form" v-model="form" class="pa-4 pt-6">
      <v-text-field
        v-model="email"
        filled
        color="deep-purple"
        label="Enter Valid Email Address"
        style="min-height: 96px"
        type="email"
      ></v-text-field>
      <v-text-field
        v-model="password"
        filled
        color="deep-purple"
        label="Password"
        style="min-height: 96px"
        type="password"
      ></v-text-field>
    </v-form>
    <v-btn color="cyan" dark elevation="2" @click="deleteUser()"
      >Delete Account... <v-icon>mouse</v-icon></v-btn
    >
  </v-card>
 
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  data() {
    return {
      email: "",
      password: "",
      updateStatus: "",
      form: false,
      loginToken: cookies.get("loginToken")
    };
  },
  methods: {
    deleteUser: function() {
      console.log(this.email);
      console.log(this.password);
      console.log(this.loginToken);

      this.updateStatus = "Loading";
      axios
        .request({
          url: "https:/justkidz.ml/api/users",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            loginToken: this.loginToken,
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          console.log(response);
          this.updateStatus = "Success";
          this.$router.push("/signup");
          cookies.remove("loginToken", response.data.loginToken);
          alert("Are sure about Delete operation?");
          window.confirm();
        })
        .catch(error => {
          console.log(error);
          this.updateStatus = "Error";
        });
    }
  }
};
</script>

<style scoped>

</style>
