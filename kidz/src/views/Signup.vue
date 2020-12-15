<template>
<v-app  id="signupform-content">
  <h4>Signup Page</h4>
    <p>Email</p>
    <input
      type="text"
      placeholder="Enter valid email"
      id="email-input"
      class="text-format"
      v-model="email"
    />
    <br /><br />
    <p>User Name</p>
    <input
      type="text"
      placeholder="Enter username"
      id="username-input"
      v-model="username"
    />
    <br /><br />
    <p>Password</p>
    <input
      type="password"
      placeholder="Enter password"
      id="password-input"
      v-model="password"
    />
    <br /><br />
    <br />
    <p>Birthday</p>
    <input
      type="text"
      placeholder="YYYY-MM-DD"
      id="birthday-input"
      v-model="birthdate"
    />
    <br />
    <button class="tw-button" @click="signupUser">Sign Up!</button>

  </v-app>
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
      birthdate: ""
    };
  },
  methods: {
    signupUser: function() {
      axios
        .request({
          url:"http://localhost:8080/",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            email: this.email,
            password: this.password,
            username: this.username,
            birthdate: this.birthdate
          }
        })
        .then(response => {
          cookies.set("loginToken", response.data.loginToken);
          this.$router.push("/entry");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>


<style lang="scss" scoped>

</style>