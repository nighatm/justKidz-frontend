import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/Home.vue";
// import LoginPage from "../views/Login.vue";
import SignupPage from "../views/Signup.vue";
// import ProfilePage from "../views/Profile.vue";
// import MessagePage from "../views/Message.vue";
import EntryPage from "../views/Entry.vue";
// import ReportPage from "../views/Report.vue";
// import JournalPage from "../views/Journal.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  
  // {
  //   path: "/ogin",
  //   name: "login-page",
  //   component: LoginPage
  // },
  {
    path: "/signup",
    name: "sign-up",
    component: SignupPage
  },
  // {
  //   path: "/profile",
  //   name: "profile-page",
  //   component: ProfilePage
  // },
  // {
  //   path: "/message",
  //   name: "message-page",
  //   component: MessagePage
  // },
  {
    path: "/entry",
    name: "entry-page",
    component: EntryPage
  },
  // {
  //   path: "/report",
  //   name: "report-page",
  //   component: ReportPage
  // },
  // {
  //   path: "/journal",
  //   name: "journal-page",
  //   component: JournalPage
  // },

  
];

const router = new VueRouter({
  routes
});

export default router;
