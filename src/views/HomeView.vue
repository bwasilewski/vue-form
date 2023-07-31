<template>
  <div class="home">
    <AppForm :fields="fields" />
  </div>
</template>

<script>
import AppForm from "@/components/AppForm.vue";

export default {
  name: "HomeView",
  components: {
    AppForm,
  },
  data() {
    return {
      fields: [
        {
          name: "fullname",
          label: "Full Name",
          type: "text",
          rules: [
            {
              required: true,
              message: "Please enter your full name",
            },
            {
              min: 3,
              message: "Your name must be at least 3 characters long",
            },
          ],
          value: "",
          placeholder: "Name here",
        },
        {
          name: "phone",
          label: "Telephone Number",
          type: "tel",
          rules: [
            {
              numeric: true,
            },
          ],
        },
        {
          name: "interest",
          label: "Interest",
          type: "select",
          options: [
            { label: "Frontend", value: "frontend" },
            { label: "Backend", value: "backend" },
            { label: "DevOps", value: "devops" },
            { label: "QA", value: "qa" },
          ],
          rules: [
            {
              required: true,
              message: "Please select your interest",
            },
          ],
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          rules: [
            {
              max: 500,
            },
          ],
        },
        {
          name: "reference",
          label: "Reference",
          type: "checkboxgroup",
          options: [
            { label: "Online Ad", value: "online-ad" },
            { label: "Recommendation", value: "recommendation" },
            { label: "Referral", value: "referral" },
            { label: "Other", value: "other" },
          ],
        },
      ],
    };
  },
};
</script>
