<template>
  <input :type="type" :value="value" :name="name" />
</template>

<script>
export default {
  name: "TextField",
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
  },
};
</script>
