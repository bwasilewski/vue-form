<template>
  <form>
    <fieldset v-for="field in fields" :key="field.name">
      <label :for="field.name">{{ field.name }}</label>

      <TextField
        v-if="field.type === 'text' || field.type === 'tel'"
        :type="field.type"
        :value="field.value"
        :required="field.rules.some((rule) => rule.required)"
        :placeholder="field.placeholder"
      />
    </fieldset>
  </form>
</template>

<script>
import TextField from "@/components/fields/TextField.vue";

export default {
  name: "AppForm",
  components: {
    TextField,
  },
  props: {
    fields: {
      type: Array,
      required: true,
    },
  },
};
</script>
