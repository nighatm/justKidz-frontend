<template>
  <div>
    <v-btn small @click="deleteEntry()" elevation="2"> Delete</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "entry-delete",
  props: {
    entryId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    deleteEntry: function () {
      axios
        .request({
          url: "https:/justkidz.ml/api/entry",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: cookies.get("loginToken"),
            entryId: this.entryId,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>