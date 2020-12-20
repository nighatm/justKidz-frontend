<template>
  <div class="entry-container">
    <h3>{{ activityObject.activityType }}</h3>
    <h3>{{ activityObject.activityName }}</h3>
    <h3>{{ activityObject.description }}</h3>
    <activity-delete v-if="isOwned" :activityId="activityObject.id" />
    <!-- <activity-delete :activityId="activityObject.activityId" /> -->
    <activity-edit
      @update-activity="updateActivity"
      v-if="isOwned"
      :activityId="activityObject.id"
    />
  </div>
</template>

<script>
import ActivityDelete from "../components/ActivityDelete.vue";
import ActivityEdit from "../components/ActivityEdit.vue";
import cookies from "vue-cookies";
export default {
  name: "activity-get",
  components: {
    ActivityDelete,
    ActivityEdit,
  },

  props: {
    activityObject: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOwned: cookies.get("user") == this.activityObject.userId,
      activityType: this.activityObject.activityType,
      activityName: this.activityObject.activityName,
      description: this.activityObject.description,
    };
  },

  methods: {
    updateActivity(newActivityType, newActivityaNme, newDescription) {
      this.activityType = newActivityType;
      this.activityName = newActivityaNme;
      this.description = newDescription;
    },
  },
};
</script>

<style scoped>
.entry-container {
  margin: 20px;
}
</style>