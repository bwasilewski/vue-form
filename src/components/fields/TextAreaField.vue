<template>
  <textarea :value="value" :required="required"></textarea>
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
  },
};
</script>
