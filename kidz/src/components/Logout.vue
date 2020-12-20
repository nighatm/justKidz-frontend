<template>
  <div>
          <div v-if="loginToken != undefined">

    <h1>you have successfully logged out</h1>
    <button  @click="logOut">Return to Home</button>
          </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "logout-page",
  data() {
    return {
      loginToken: cookies.get("loginToken")
    };
  },
  methods: {
    logOut: function() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/login",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            loginToken: this.loginToken
          }
        })
        .then(response => {
          console.log(response);
          cookies.remove("loginToken");
          cookies.remove("user");
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>

</style>
