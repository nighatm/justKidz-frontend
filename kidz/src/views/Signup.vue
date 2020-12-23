<template>
  <v-card class="mx-auto" style="max-width: 500px">
    <v-toolbar color="cyan accent-4" cards dark flat>
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-card-title class="title font-weight-regular"> Sign up </v-card-title>
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
    </v-form>
    <v-btn color="cyan" dark elevation="2" @click="signupUser()"
      >Sign Up! <v-icon>mouse</v-icon></v-btn
    >
  </v-card>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "signup",
  components: {},
  data() {
    return {
      email: "",
      username: "",
      password: "",
      birthdate: "",
      dialog: false,
      form: false,
    };
  },
  methods: {
    signupUser: function () {
      axios
        .request({
          url: "https:/justkidz.ml/api/users",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            email: this.email,
            password: this.password,
            username: this.username,
            birthdate: this.birthdate,
          },
        })
        .then((response) => {
          cookies.set("loginToken", response.data.loginToken);
          cookies.set("userId", response.data.userId);
          this.$router.push("/entry");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<style lang="scss" scoped>
</style>