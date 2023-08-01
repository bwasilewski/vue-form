<template>
  <p v-if="isFormSubmitted && !fieldIsValid">Invalid</p>
  <ul v-if="isMounted">
    <label v-for="option in options" :key="option">
      <li>
        <input
          type="checkbox"
          :name="name"
          :value="option"
          v-model="selectedOptions"
        />
        {{ option }}
      </li>
    </label>
  </ul>
</template>

<script>
export default {
  name: "CheckboxGroup",
  data() {
    return {
      isMounted: false,
      selectedOptions: [],
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
    options: {
      type: Array,
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
      required: true,
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

      let isValid = true;
      const value = this.selectedOptions;

      this.rules.forEach((rule) => {
        if (rule === "required") {
          if (value.length === 0) {
            isValid = false;
          }
        }
      });

      return isValid;
    },
    toggleCheckbox(option) {
      const selectedOptions = this.selectedOptions;

      selectedOptions.includes(option)
        ? selectedOptions.splice(selectedOptions.indexOf(option), 1)
        : selectedOptions.push(option);

      console.log("Selected Options: ", selectedOptions);
    },
  },
};
</script>
