<template>
  <v-footer dark padless class="xs-8 md-4 lg-2 ">
    <v-card flat tile class="flex lighten-1 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Our values are described in simple statements of action because they
        underlie everything we do. Whenever we’re stuck on something, we find
        these basic principles helpful in navigating us to a path
        forward.</v-card-text
      >

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong> Test Project inspired by HiMama</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
<style >
* {
  margin: 0;
  padding: 0;
}
.link-text {
  text-align: center;
  color: #0096af;
  font-family: Garamond, serif;
  font-size: 28px;
}
</style>