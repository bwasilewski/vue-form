<template>
  <form id="app-form" @submit.prevent="handleSubmit" novalidate>
    <fieldset v-for="field in fields" :key="field.name">
      <label :for="field.name">
        {{ field.label }}
        <span v-if="field.rules.some((rule) => rule.required)">*</span>
      </label>

      <TextField
        v-if="field.type === 'text' || field.type === 'tel'"
        :ref="field.name"
        :name="field.name"
        :type="field.type"
        :value="field.value"
        :required="field.rules.some((rule) => rule.required)"
        :rules="field.rules"
        :isFormSubmitted="isFormSubmitted"
      />

      <SelectField
        v-if="field.type === 'select'"
        :ref="field.name"
        :name="field.name"
        :value="field.value"
        :required="field.rules.some((rule) => rule.required)"
        :options="field.options"
        :rules="field.rules"
        :isFormSubmitted="isFormSubmitted"
      />

      <TextAreaField
        v-if="field.type === 'textarea'"
        :ref="field.name"
        :name="field.name"
        :value="field.value"
        :required="field.rules.some((rule) => rule.required)"
        :rules="field.rules"
        :isFormSubmitted="isFormSubmitted"
      />

      <CheckboxGroup
        v-if="field.type === 'checkboxgroup'"
        :ref="field.name"
        :name="field.name"
        :options="field.options"
        :value="field.value"
        :required="field.rules.some((rule) => rule.required)"
        :rules="field.rules"
        :isFormSubmitted="isFormSubmitted"
      />
    </fieldset>
    <button type="submit">Submit</button>
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
  },
  data() {
    return {
      isFormSubmitted: false,
    };
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
      const theForm = e.target;
      let isValid = true;

      this.isFormSubmitted = true;

      this.fields.forEach((field) => {
        if (this.$refs[field.name][0].validate() === false) {
          isValid = false;
        }
      });

      if (isValid) {
        this.$store.commit("toggleSuccessModal");
        this.$store.commit("updateFields", theForm);
      } else {
        console.log("Form is not valid");
      }
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

    &:error {
      border-color: red;
    }
  }
}
</style>
