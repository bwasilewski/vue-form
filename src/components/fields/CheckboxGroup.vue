<template>
  <ul>
    <label v-for="option in options" :key="option.value">
      <li>
        <input type="checkbox" :value="option.value" />
        {{ option.label }}
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
  },
};
</script>
