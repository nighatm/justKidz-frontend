<template>
  <v-card class="mx-auto" style="max-width: 500px">
    <v-toolbar color="cyan accent-4" cards dark flat>
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-card-title class="title font-weight-regular"> Login </v-card-title>
    </v-toolbar>

    <v-form ref="form" v-model="form" class="pa-4 pt-6">
      <v-text-field
        v-model="email"
        label="Enter Valid Email Address"
        style="min-height: 96px"
        type="email"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        style="min-height: 96px"
        type="password"
      ></v-text-field>
      <h3>{{ loginStatus }}</h3>
      <router-link to="/"> Home </router-link>

      <router-link to="/signup" id="signup-link">
        New User? Sign up here</router-link
      >
    </v-form>

    <v-btn color="cyan" dark elevation="2" @click="loginUser()"
      >Login! <v-icon>mouse</v-icon></v-btn
    >
  </v-card>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "login-page",

  data() {
    return {
      email: "",
      password: "",
      loginStatus: "",
      form:false,
    };
  },
  methods: {
    loginUser: function () {
      this.loginStatus = "Loading..";
      axios
        .request({
          url: "http://127.0.0.1:5000/api/login",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then((response) => {
          console.log(response);
          this.loginStatus = "Success";
          cookies.set("loginToken", response.data.loginToken);
          cookies.set("user", response.data.userId);
          this.$router.push("/profile");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
