<template>
  <input
    :type="type"
    :value="value"
    :required="required"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "TextField",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>
