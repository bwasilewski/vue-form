import { createStore } from "vuex";

export default createStore({
  state: {
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
        value: "",
        rules: [
          {
            numeric: true,
            message: "Your phone number must be numeric",
          },
        ],
      },
      {
        name: "interest",
        label: "Interest",
        type: "select",
        value: "frontend",
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
        value: "Lorem ipsum dolor sit amet",
        rules: [
          {
            max: 500,
            message: "Your description must be no longer than 500 characters",
          },
        ],
      },
      {
        name: "reference",
        label: "Reference",
        type: "checkboxgroup",
        options: ["Online Ad", "Recommendation", "Referral", "Other"],
        value: ["Online Ad", "Referral"],
        rules: [
          {
            required: true,
            message: "Please choose at least one reference",
          },
        ],
      },
    ],
  },
  getters: {},
  mutations: {},
  modules: {},
});
