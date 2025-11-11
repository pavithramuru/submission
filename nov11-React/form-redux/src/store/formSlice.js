import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    username: "",
    email: "",
    password: "",
    color: "#000000",
    submittedData: null,
  },
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    submitForm: (state) => {
      state.submittedData = {
        username: state.username,
        email: state.email,
        password: state.password,
        color: state.color,
      };
    },
    clearForm: (state) => {
      state.username = "";
      state.email = "";
      state.password = "";
      state.color = "#000000";
      state.submittedData = null;
    },
  },
});

export const { updateField, submitForm, clearForm } = formSlice.actions;
export default formSlice.reducer;
