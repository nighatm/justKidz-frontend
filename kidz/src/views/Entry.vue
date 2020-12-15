<template>
   <v-app>
       <h1>Feedpage</h1>
       <entry-create/>
   </v-app>
</template>

<script>
import EntryCreate from "../components/EntryCreate.vue"
    export default {
        name:"entry-page",
        components: {
        EntryCreate,
        },
    }
</script>

<style scoped>

</style>