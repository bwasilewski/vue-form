<template>
  <ul>
    <label v-for="option in options" :key="option.value">
      <li>
        <input
          type="checkbox"
          value="option"
          :checked="value.indexOf(option) > -1"
        />
        {{ option }}
      </li>
    </label>
  </ul>
</template>

<script>
export default {
  name: "CheckboxGroup",
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
