<template>
  <p v-if="isFormSubmitted && !fieldIsValid">Invalid</p>
  <select
    v-if="isMounted"
    :value="value"
    :required="required"
    :name="name"
    :ref="name"
  >
    <option disabled value="">Please select one</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
  <p v-if="!validate()">Invalid</p>
</template>

<script>
export default {
  name: "SelectField",
  data() {
    return {
      isMounted: false,
    };
  },
  mounted() {
    this.isMounted = true;
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      required: true,
    },
    isFormSubmitted: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    formIsValid() {
      return this.validate();
    },
  },
  methods: {
    validate() {
      if (!this.isMounted || !this.$refs[this.name]) {
        return true;
      }

      const value = this.$refs[this.name].value;
      let isValid = true;

      this.rules.forEach((rule) => {
        if (rule.required === true) {
          if (value === "") {
            isValid = false;
          }
        }
      });

      return isValid;
    },
  },
  computed: {
    formIsValid() {
      return this.validate();
    },
  },
  methods: {
    validate() {
      if (!this.isMounted || !this.$refs[this.name]) {
        return true;
      }

      const value = this.$refs[this.name].value;
      let isValid = true;

      this.rules.forEach((rule) => {
        if (rule.required === true) {
          if (value === "") {
            isValid = false;
          }
        }
      });

      return isValid;
    },
  },
};
</script>
