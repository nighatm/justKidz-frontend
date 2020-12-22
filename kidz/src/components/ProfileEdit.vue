<template>
  <v-card class="mx-auto" style="max-width: 500px">
    <v-toolbar color="cyan accent-4" cards dark flat>
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-card-title class="title font-weight-regular">
        Update Account
      </v-card-title>
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
        v-model="username"
        filled
        color="deep-purple"
        label="username"
        type="text"
      ></v-text-field>
      <v-text-field
        v-model="password"
        filled
        color="deep-purple"
        label="Password"
        style="min-height: 96px"
        type="password"
      ></v-text-field>
      <v-text-field
        v-model="birthdate"
        filled
        color="deep-purple"
        label="YYYY-MM-DD"
        type="text"
      ></v-text-field>

      <v-btn color="cyan" dark elevation="2" @click="updateUser()"
        >Update Account <v-icon>mouse</v-icon></v-btn
      >
      <br /><br />
      <v-btn color="cyan" dark elevation="2" to="/login">
        Login Now <v-icon>mouse</v-icon></v-btn
      >
    </v-form>
  </v-card>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      birthdate: "",
      updateStatus: "",
      form: false,
      loginToken: cookies.get("loginToken"),
    };
  },
  methods: {
    updateUser: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/users",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            email: this.email,
            password: this.password,
            username: this.username,
            birthdate: this.birthdate,
            loginToken: this.loginToken,
          },
        })
        .then((response) => {
          console.log(response);
          this.updateStatus = "Success";
          // this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
          this.updateStatus = "Error!";
        });
    },
  },
};
</script>

<style scoped>
</style>
