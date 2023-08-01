import { createStore } from "vuex";

export default createStore({
  state: {
    showSuccessModal: false,
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
            required: true,
            message: "Please enter your phone number",
          },
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
        value: "",
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
        value: "",
        rules: [
          {
            required: true,
            message: "Please enter your description",
          },
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
        value: [],
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
  mutations: {
    toggleSuccessModal(state) {
      state.showSuccessModal = !state.showSuccessModal;
    },
    updateFields(state, theForm) {
      state.fields.forEach((field) => {
        field.value = theForm.elements[field.name].value;
      });
    },
  },
  actions: {},
  modules: {},
});
