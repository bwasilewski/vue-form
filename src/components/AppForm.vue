<template>
  <form id="app-form" @submit.prevent="handleSubmit">
    <fieldset v-for="field in fields" :key="field.name">
      <label :for="field.name">
        {{ field.label }}
        <span v-if="field.rules.some((rule) => rule.required)">*</span>
      </label>

      <TextField
        v-if="field.type === 'text' || field.type === 'tel'"
        :name="field.name"
        :type="field.type"
        :value="field.value"
        :required="field.rules.some((rule) => rule.required)"
      />

      <SelectField
        v-if="field.type === 'select'"
        :name="field.name"
        :value="field.value"
        :required="field.rules.some((rule) => rule.required)"
        :options="field.options"
      />

      <TextAreaField
        v-if="field.type === 'textarea'"
        :name="field.name"
        :value="field.value"
        :required="field.rules.some((rule) => rule.required)"
      />

      <CheckboxGroup
        v-if="field.type === 'checkboxgroup'"
        :name="field.name"
        :options="field.options"
        :value="field.value"
        :required="field.rules.some((rule) => rule.required)"
      />
    </fieldset>
    <p>Valid: {{ valid }}</p>
    <button v-if="valid" type="submit">Submit</button>
  </form>
</template>

<script>
import TextField from "@/components/fields/TextField.vue";
import SelectField from "@/components/fields/SelectField.vue";
import TextAreaField from "./fields/TextAreaField.vue";
import CheckboxGroup from "./fields/CheckboxGroup.vue";
import { mapState } from "vuex";

export default {
  name: "AppForm",
  components: {
    TextField,
    SelectField,
    TextAreaField,
    CheckboxGroup,
  },
  computed: {
    ...mapState(["showSuccessModal"]),
    valid() {
      return this.fields.every((field) => {
        return field.rules.every((rule) => {
          if (rule.required) {
            return field.value.length > 0;
          }
          return true;
        });
      });
    },
  },
  props: {
    fields: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const theForm = e.target;
      this.fields.forEach((field) => {
        field.value = theForm.elements[field.name].value;
      });
      this.$store.commit("toggleSuccessModal");
    },
  },
};
</script>

<style lang="scss">
#app-form {
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    color: #042940;

    span {
      color: red;
    }
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
    box-sizing: border-box;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid rgba(0, 92, 83, 0.5);
    border-radius: 4px;
    box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.1);
  }

  button,
  .button {
    transition: background-color 0.2s ease-in, color 0.2s ease-out;
    display: block;
    padding: 0.75rem 1.25rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #042940;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #dbf227;
      color: #111;
    }

    &:disabled {
      background-color: #ccc;
      color: #666;
      cursor: not-allowed;
    }
  }
}
</style>
