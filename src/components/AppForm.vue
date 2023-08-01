<template>
  <form id="app-form" @submit.prevent="handleSubmit">
    <fieldset v-for="field in fields" :key="field.name">
      <label :for="field.name">{{ field.label }}</label>

      <TextField
        v-if="field.type === 'text' || field.type === 'tel'"
        :type="field.type"
        :value="field.value"
        :required="field.rules.some((rule) => rule.required)"
      />

      <SelectField
        v-if="field.type === 'select'"
        :value="field.value"
        :required="field.rules.some((rule) => rule.required)"
        :options="field.options"
      />

      <TextAreaField
        v-if="field.type === 'textarea'"
        :value="field.value"
        :required="field.rules.some((rule) => rule.required)"
      />

      <CheckboxGroup
        v-if="field.type === 'checkboxgroup'"
        :options="field.options"
      />
    </fieldset>
    <button type="submit" :disabled="!valid">Submit</button>
  </form>
</template>

<script>
import TextField from "@/components/fields/TextField.vue";
import SelectField from "@/components/fields/SelectField.vue";
import TextAreaField from "./fields/TextAreaField.vue";
import CheckboxGroup from "./fields/CheckboxGroup.vue";

export default {
  name: "AppForm",
  components: {
    TextField,
    SelectField,
    TextAreaField,
    CheckboxGroup,
  },
  props: {
    fields: {
      type: Array,
      required: true,
    },
    valid: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log(e);
    },
  },
};
</script>

<style lang="scss">
#app-form {
  label {
    display: block;
  }

  fieldset {
    border: none;
    padding: 0;
    margin-bottom: 20px;
  }

  input:not([type="checkbox"], [type="submit"]),
  select,
  textarea {
    display: block;
    width: 100%;
  }
}
</style>
