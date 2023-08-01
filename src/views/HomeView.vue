<template>
  <div class="home">
    <AppForm :fields="$store.state.fields" />
  </div>
</template>

<script>
import AppForm from "@/components/AppForm.vue";

export default {
  name: "HomeView",
  components: {
    AppForm,
  },
};
</script>
