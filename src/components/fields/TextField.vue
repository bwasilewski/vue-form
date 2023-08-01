<template>
  <input :type="type" :value="value" />
</template>

<script>
export default {
  name: "TextField",
  props: {
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
  },
};
</script>
