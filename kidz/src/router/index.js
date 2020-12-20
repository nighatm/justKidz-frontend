import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/Home.vue";
import SignupPage from "../views/Signup.vue";
import ProfilePage from "../views/Profile.vue";
import MessagePage from "../views/Message.vue";
import EntryPage from "../views/Entry.vue";
import ReportPage from "../views/Report.vue";
import ActivityPage from "../views/Activity.vue";
import LoginPage from "../views/Login.vue";
import LogoutPage from "../components/Logout.vue"
import CalanderPage from "../components/Calander.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  
  {
    path: "/login",
    name: "login-page",
    component: LoginPage
  },

  {
    path: "/signup",
    name: "sign-up",
    component: SignupPage
  },
  {
    path: "/profile",
    name: "profile-page",
    component: ProfilePage
  },
  {
    path: "/message",
    name: "message-page",
    component: MessagePage
  },
  {
    path: "/entry",
    name: "entry-page",
    component: EntryPage
  },
  {
    path: "/report",
    name: "report-page",
    component: ReportPage
  },
  {
    path: "/activity",
    name: "activity-page",
    component: ActivityPage
  },

  {
    path: "/logout",
    name: "logout-page",
    component: LogoutPage
  },
  {
    path: "/calander",
    name: "Calander",
    component: CalanderPage
  },
];

const router = new VueRouter({
  routes
});

export default router;
