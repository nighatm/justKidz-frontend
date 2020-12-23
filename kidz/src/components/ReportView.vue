<template>
  <div class="entry-container">
    <h3>{{ reportObject.classroom }}</h3>
    <h3>{{ reportObject.actions }}</h3>
    <report-delete v-if="isOwned" :reportId="reportObject.id" />
    <report-edit
      @update-report="updateReport"
      v-if="isOwned"
      :reportId="reportObject.id"
    />
  </div>
</template>

<script>
import ReportDelete from "../components/ReportDelete.vue";
import ReportEdit from "../components/ReportEdit.vue";
import cookies from "vue-cookies";
export default {
  name: "report-get",
  components: {
    ReportDelete,
    ReportEdit,
  },

  props: {
    reportObject: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOwned: cookies.get("user") == this.reportObject.userId,
      classroom: this.reportObject.classroom,
      actions: this.reportObject.actions,
    };
  },

  methods: {
    updateReport(newClassroom, newActions) {
      this.classroom = newClassroom;
      this.actions = newActions;
    },
  },
};
</script>

<style scoped>
.entry-container {
  margin: 20px;
}
</style>