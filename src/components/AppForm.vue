<template>
  <form>
    <fieldset v-for="field in fields" :key="field.name">
      <label :for="field.name">{{ field.name }}</label>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "AppForm",
  props: {
    fields: {
      type: Array,
      required: true,
    },
  },
};
</script>
