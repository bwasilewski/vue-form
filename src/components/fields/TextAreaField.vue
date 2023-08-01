<template>
  <p v-if="isFormSubmitted && !fieldIsValid">Invalid</p>
  <textarea
    v-if="isMounted"
    v-model="fieldValue"
    :required="required"
    :name="name"
  >
  </textarea>
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
    value: {
      type: String,
      required: true,
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
    computedValue: {
      get() {
        return this.fieldValue;
      },
      set(newValue) {
        this.fieldValue = newValue;
      },
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
        if (rule.max) {
          if (value.length > rule.max) {
            isValid = false;
          }
        }
      });

      return isValid;
    },
  },
};
</script>
