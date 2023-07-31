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
        :placeholder="field.placeholder"
      ></TextAreaField>
    </fieldset>
  </form>
</template>

<script>
import TextField from "@/components/fields/TextField.vue";
import SelectField from "@/components/fields/SelectField.vue";
import TextAreaField from "./fields/TextAreaField.vue";

export default {
  name: "AppForm",
  components: {
    TextField,
    SelectField,
    TextAreaField,
  },
  props: {
    fields: {
      type: Array,
      required: true,
    },
  },
};
</script>
