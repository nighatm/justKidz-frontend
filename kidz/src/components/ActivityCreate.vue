<template>
  <div class="xs-8 md-4 lg-2">
    <br />
    <h1 class="heading-style">`Check Activities for your Child`</h1>
    <h3 class="heading-style">`Look What am doing Today`</h3>
    <br />
    <p class="p-text">
      Look I'm doing PM today! PM: Welcome back on this wonderful Monday arctic
      classroom! We worked on our listening and following directions skills by
      by singing and dancing to theFollow Me song! We said our names, chose a
      friend to say hello to and asked them how are you? We explored expressing
      our different feelings to each other! We also sang our calendar songs and
      talked about the cloudy weather! During centre time we worked on our
      colour recognition and fine motor skills by sorting different coloured
      animals into their corresponding buckets using clothespins to grab! We
      also worked on our following directions skills as well as hand strength
      and fine motor skills by glueing strips together to make the land sky and
      sea ! Lastly we worked on our hand strength and fine motor skills by
      cutting out different vehicles that we will glue to the backgrounds that
      we made tomorrow ! We also had gym class today we did ring around the
      Rosie some movement songs and worked on our gross motor skills by doing
      some follow the Leader activities, what time is it Mr. Wolf as well as
      playing with balls with our friends! We finish the day by saying goodbye
      and worked on our choice making and requesting skills by making a choice
      between bubbles and tickles!
      <v-form class="xs-8 md-4 lg-2 form-headings">
        <h4>{{ kidzStatus }}</h4>
        <v-container class="xs-8 md-4 lg-2">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="activityType"
                :counter="100"
                label="Enter Activity Type "
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="activityName"
                :counter="100"
                label="Enter Activity Name"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="8">
              <v-textarea
                clearable
                clear-icon="mdi-close-circle"
                label="Write Description"
                :counter="250"
                value="This is clearable text."
                v-model="description"
              ></v-textarea>
            </v-col>
            <v-col>
              <v-btn color="grey" x-large elevation="2" @click="postActivity()"
                >Create Activity</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <br />
    </p>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "activity-create",
  data() {
    return {
      activityType: "",
      activityName: "",
      description: "",
      kidzStatus: "Start Entering Data!",
    };
  },
  methods: {
    postActivity() {
      this.kidzStatus = "Entering Data!";
      axios
        .request({
          url: "https:/justkidz.ml/api/activity",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          data: {
            loginToken: cookies.get("loginToken"),
            activityType: this.activityType,
            activityName: this.activityName,
            description: this.description,
          },
        })
        .then((response) => {
          console.log(response);
          this.kidzStatus = "Data Entered!";
        })
        .catch((error) => {
          console.log(error);
          this.kidzStatus = "Failed to enter data";
        });
    },
  },
};
</script>

<style scoped>
.heading-style {
  text-align: center;
  color: #263238;
  font-family: Garamond, serif;
}
.p-text {
  color: #263238;
  font-family: Josefin Sans;
  font-size: 22px;

}
.form-headings {
  text-align: center;
  color: #0096af;
  font-family: Garamond, serif;
  font-size: 28px;
  margin-right: 2vh;
  margin-left: 2vh;
}
</style>