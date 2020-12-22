<template>
  <div >
    <div v-if="loginToken != undefined">
    <h1 class="heading-style">`Update Profile`</h1>
      <br />

      <router-link class="link-text" to="/">Go to Home Page</router-link> | --------------------
      |

      <router-link class="link-text" to="/logout">Logout <br /></router-link>
      <br />

      <profile-edit />
      <br><br/>
      <profile-delete />
      <br><br><br>
   
    </div>
    <div v-else>
      <p>Please login in to continue...</p>
      <router-link to="/"> Home <br /> </router-link>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import ProfileEdit from "../components/ProfileEdit.vue";
import ProfileDelete from "../components/ProfileDelete.vue";



export default {
  name: "profile-page",

  components: {
    ProfileEdit,
    ProfileDelete,
    
  },
  data() {
    return {
      loginToken: cookies.get("loginToken"),
    };
  }
};
</script>

<style scoped>
.heading-style{
 text-align: center;
 color:#263238 ;
 font-family: Garamond, serif;
}
.link-text{
   text-align: center;
  color: #0096AF ;
 font-family: Garamond, serif;
 font-size: 22px;
}
</style>
