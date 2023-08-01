<template>
  <p v-if="isFormSubmitted && !fieldIsValid">Invalid</p>
  <input v-if="isMounted" v-model="fieldValue" :type="type" :name="name" />
</template>

<script>
export default {
  name: "TextField",
  data() {
    return {
      isMounted: false,
      fieldValue: this.value,
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
    fieldIsValid() {
      return this.validate();
    },
  },
  methods: {
    validate() {
      if (!this.isFormSubmitted || !this.isMounted) {
        return true;
      }

      const value = this.fieldValue;
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
