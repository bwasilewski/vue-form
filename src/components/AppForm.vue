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
      />

      <CheckboxGroup
        v-if="field.type === 'checkboxgroup'"
        :options="field.options"
      />
    </fieldset>
    <input type="submit" value="Submit" :disabled="!valid" />
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
  },
};
</script>
