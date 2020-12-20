
  <template>
  <div class="cernter-alignment">

    <h1 class="header-text">Welcome to JustKidz App!</h1>
    <br />
    <h2 class="header-text">Login</h2>
    <div id="login-form">
      <p>Email</p>
      <input
        type="text"
        placeholder="Enter email"
        id="email-input"
        class="form-input"
        v-model="email"
      />
      <p>Password</p>
      <input
        type="password"
        placeholder="Enter password"
        id="password-input"
        class="form-input"
        v-model="password"
      />
      <button class="tw-button" @click="loginUser">Login</button>
      <br />

      <h3>{{ loginStatus }}</h3>
      <router-link to="/"> Home </router-link>

      <router-link to="/signup" id="signup-link">
        New User? Sign up here</router-link
      >
     
    </div>
  </div>
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
      loginStatus: ""
    };
  },
  methods: {
    loginUser: function() {
      this.loginStatus = "Loading..";
      axios
        .request({
          url: "http://127.0.0.1:5000/api/login",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          console.log(response);
          this.loginStatus = "Success";
          cookies.set("loginToken", response.data.loginToken);
          cookies.set("user", response.data.userId);
          this.$router.push("/profile");
        })
        .catch(error => {
          console.log(error);
          this.status = "Login Error!";
        });
    }
  }
};
</script>
