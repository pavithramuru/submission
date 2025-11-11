import { configureStore, createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    username: "",
    email: "",
    password: "",
    color: "#000000", // Default color (black)
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

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});

export default store;
