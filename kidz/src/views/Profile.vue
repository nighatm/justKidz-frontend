<template>
  <div class="cernter-alignment">
    <div v-if="loginToken != undefined">
    
      <h2 class="header-text">Update Profile</h2>
      <br />
      <router-link to="/">Go to Home Page</router-link> | --------------
      |

      <router-link to="/logout">Logout <br /></router-link>
      <br />

      <profile-edit />
      <profile-delete />
   
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

</style>
