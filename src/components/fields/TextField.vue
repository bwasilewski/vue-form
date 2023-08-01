<template>
  <input
    v-if="isMounted"
    :type="type"
    :value="value"
    :name="name"
    :ref="name"
  />
  <p v-if="isFormSubmitted && !formIsValid">Invalid</p>
</template>

<script>
export default {
  name: "TextField",
  data() {
    return {
      isMounted: false,
    };
  },
  mounted() {
    this.isMounted = true;
    console.log("Is Form Submitted, text field: ", this.isFormSubmitted);
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default: () => [],
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
      if (!this.isFormSubmitted || !this.isMounted || !this.$refs[this.name]) {
        return true;
      }

      const value = this.$refs[this.name].value;
      let isValid = true;

      this.rules.forEach((rule) => {
        if (rule.required === true) {
          if (value.length === 0) {
            isValid = false;
          }
        }
        if (rule.min) {
          if (value.length < rule.min) {
            isValid = false;
          }
        }
        if (rule.numeric) {
          if (isNaN(parseInt(value))) {
            isValid = false;
          }
        }
      });

      return isValid;
    },
  },
};
</script>
