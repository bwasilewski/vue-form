<template>
  <textarea :value="value" :required="required"></textarea>
</template>

<script>
export default {
  name: "TextField",
  props: {
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
