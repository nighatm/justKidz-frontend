<template>
  <div>
    <div v-if="loginToken != undefined">
      <br /><br />
      <h1 class="xs-8 md-4 lg-2 link-text">you have successfully logged out</h1>
      <button class="xs-8 md-4 lg-2 link-text" @click="logOut">
        Return to Home
      </button>
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
      loginToken: cookies.get("loginToken"),
    };
  },
  methods: {
    logOut: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/login",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: this.loginToken,
          },
        })
        .then((response) => {
          console.log(response);
          cookies.remove("loginToken");
          cookies.remove("user");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
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
.link-text {
  text-align: center;
  color: #0096af;
  font-family: Garamond, serif;
  font-size: 28px;
  margin-right: 2vh;
  margin-left: 2vh;
}
</style>
