<template>
  <div class="entry-container">
    <v-data-table>
      <thead>
        <tr>
          <th class="text-left">Childname</th>
          <th class="text-left">Title</th>
          <th class="text-left">Description</th>
          <th class="text-left">Photo</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr
          v-for="item in desserts"
          :key="item.name"
        > -->
        <tr>
          <td>{{ entryObject.childname }}</td>
          <td>{{ entryObject.title }}</td>
          <td>{{ entryObject.description }}</td>
          <td>{{ entryObject.photo }}</td>
          <entry-delete v-if="isOwned" :entryId="entryObject.id" />
          <entry-edit
            @update-entry="updateEntry"
            v-if="isOwned"
            :entryId="entryObject.id"
          />
        </tr>
      </tbody>
    </v-data-table>

    <h3>{{ entryObject.childname }}</h3>
    <h3>{{ entryObject.title }}</h3>
    <h3>{{ entryObject.description }}</h3>
    <h3>{{ entryObject.photo }}</h3> -->
    <entry-delete v-if="isOwned" :entryId="entryObject.id" />
    <!-- <entry-delete :entryId="entryObject.entryId" /> -->
     <entry-edit 
      @update-entry="updateEntry" v-if="isOwned" :entryId="entryObject.id" />
  </div>
</template>

<script>
import EntryDelete from "../components/EntryDelete.vue";
import EntryEdit from "../components/EntryEdit.vue";
import cookies from "vue-cookies";
export default {
  name: "entry-get",
  components: {
    EntryDelete,
    EntryEdit,
  },

  props: {
    entryObject: {
      type: Object,
      required: true,
    },
    data() {
      return {
        isOwned: cookies.get("user") == this.entryObject.userId,
        title: this.entryObject.title,
        description: this.entryObject.description,
        photo: this.entryObject.photo,
      };
    },
  },

  methods: {
    updateEntry(newTitle, newDescription, newPhoto) {
      this.title = newTitle;
      this.description = newDescription;
      this.photo = newPhoto;
    },
  },
};
</script>

<style scoped>
.entry-container {
  margin: 20px;
}
</style>