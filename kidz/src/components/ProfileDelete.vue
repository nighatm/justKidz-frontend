<template>
  <div id="delete-account">
    <h2 id="text-color">Want to Delete your account?</h2>
    <p>Enter Your Email</p>
    <input
      type="text"
      placeholder="Enter email"
      id="email-input"
      class="form-input"
      v-model="email"
    />
    <p>Enter Password</p>
    <input
      type="password"
      placeholder="Enter password"
      id="password-input"
      class="form-input"
      v-model="password"
    />
    <br />
    <br />
    <button class="tw-button" @click="deleteUser">
      Delete account...
    </button>
    <h3>{{ updateStatus }}</h3>
  </div>
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
          url: "http://127.0.0.1:5000/api/users",
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
