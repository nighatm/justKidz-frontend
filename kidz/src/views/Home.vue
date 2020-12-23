<template>
  <div>
    <v-container class="fill-height" fluid style="min-height: 434px">
      <br />
      <p class="p-text">
        JustKidz is a test project application inspired by HiMama which is made
        up of a group of committed fathers, mothers, daughters, sons, uncles and
        aunts who are working hard to build a product and a company that
        families and early childhood educators love. HiMama is the ultimate
        all-in-one childcare app. We help childcare providers streamline
        operations, delight families and improve program quality!HiMama is based
        on extensive research and interviews with early childhood educators. We
        have learned a lot about early childhood education since we originally
        came together in 2012.
        <br />
        <br />
      </p>

      <v-row>
        <v-col cols="6">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://images.unsplash.com/photo-1560421683-6856ea585c78?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGVkdWNhdGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              height="200"
            ></v-img>
            <v-card-title class="title"> Colors Colors </v-card-title>
            <v-card-subtitle>Why Kids Need to Paint </v-card-subtitle>
            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explore </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                  Painting is the practice of applying paint, pigment, color or
                  other medium to a solid surface (called the "matrix" or
                  "support").[1] The medium is commonly applied to the base with
                  a brush, but other implements, such as knives, sponges, and
                  airbrushes, can be used.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://images.unsplash.com/photo-1605318173721-25a9c61c1aaf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dG9kZGxlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              height="200"
            ></v-img>
            <v-card-title class="title"> Let's Go </v-card-title>
            <v-card-subtitle> Fun Time </v-card-subtitle>
            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explore </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                  Recreation is an activity of leisure, leisure being
                  discretionary time.[1] The "need to do something for
                  recreation" is an essential element of human biology and
                  psychology.[2] Recreational activities are often done for
                  enjoyment, amusement, or pleasure and are considered to be
                  "fun".
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8dG9kZGxlcnN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
              height="200"
            ></v-img>
            <v-card-title class="title"> Me Time! </v-card-title>
            <v-card-subtitle> Smile :) </v-card-subtitle>
            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explore </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                  Recreation is an activity of leisure, leisure being
                  discretionary time.[1] The "need to do something for
                  recreation" is an essential element of human biology and
                  psychology.[2] Recreational activities are often done for
                  enjoyment, amusement, or pleasure and are considered to be
                  "fun".
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://images.unsplash.com/photo-1484820540004-14229fe36ca4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              height="200"
            ></v-img>
            <v-card-title class="title"> Play Time </v-card-title>
            <v-card-subtitle> Stock! </v-card-subtitle>
            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explore </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                  PM: Welcome back on this wonderful Monday arctic classroom! We
                  worked on our listening and following directions skills by by
                  singing and dancing to theFollow Me song! We said our names,
                  chose a friend to say hello to and asked them how are you? We
                  explored expressing our different feelings to each other! We
                  also sang our calendar songs and talked about the cloudy
                  weather! During centre time we worked on our colour
                  recognition and fine motor skills by sorting different
                  coloured animals into their corresponding buckets using
                  clothespins to grab! We also worked on our following
                  directions skills as well as hand strength and fine motor
                  skills by glueing strips together to make the land sky and sea
                  !
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://images.unsplash.com/photo-1540151812223-c30b3fab58e6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGVkdWNhdGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              height="200"
            ></v-img>
            <v-card-title class="title"> Library </v-card-title>
            <v-card-subtitle> Reading Time </v-card-subtitle>
            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explore </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                  PM: Welcome back on this wonderful Monday arctic classroom! We
                  worked on our listening and following directions skills by by
                  singing and dancing to theFollow Me song! We said our names,
                  chose a friend to say hello to and asked them how are you? We
                  explored expressing our different feelings to each other! We
                  also sang our calendar songs and talked about the cloudy
                  weather! During centre time we worked on our colour
                  recognition and fine motor skills by sorting different
                  coloured animals into their corresponding buckets using
                  clothespins to grab! We also worked on our following
                  directions skills as well as hand strength and fine motor
                  skills by glueing strips together to make the land sky and sea
                  !
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://images.unsplash.com/photo-1599456825458-ebe1463315e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGVkdWNhdGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              height="200"
            ></v-img>
            <v-card-title class="title"> School </v-card-title>
            <v-card-subtitle> Let's go to School </v-card-subtitle>
            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explore </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                  PM: Welcome back on this wonderful Monday arctic classroom! We
                  worked on our listening and following directions skills by by
                  singing and dancing to theFollow Me song! We said our names,
                  chose a friend to say hello to and asked them how are you? We
                  explored expressing our different feelings to each other! We
                  also sang our calendar songs and talked about the cloudy
                  weather! During centre time we worked on our colour
                  recognition and fine motor skills by sorting different
                  coloured animals into their corresponding buckets using
                  clothespins to grab! We also worked on our following
                  directions skills as well as hand strength and fine motor
                  skills by glueing strips together to make the land sky and sea
                  !
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div>
      <br />
      <br />
      <footer-page />
    </div>
  </div>
</template>


<script>
import FooterPage from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    FooterPage,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
<style>
.p-text {
  display: grid;
  color: #263238;
  font-family: Josefin Sans;
  font-size: 22px;
  text-align: justify;
  margin-right: 2vh;
  margin-left: 2vh;
}
</style>
