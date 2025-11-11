import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField, submitForm, clearForm } from "../store/formSlice";

const FormComponent = () => {
  const dispatch = useDispatch();
  const { username, email, password, color, submittedData } = useSelector(
    (state) => state.form
  );

  const handleChange = (e) => {
    dispatch(updateField({ field: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm());
  };

  const handleClear = () => {
    dispatch(clearForm());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={handleChange}
          required
        />

        <div className="color-picker">
          <label>Pick a Color:</label>
          <input
            type="color"
            name="color"
            value={color}
            onChange={handleChange}
            className="color-input"
          />
        </div>

        <div className="btn-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>

      {submittedData && (
        <p className="success-message">Form submitted successfully!</p>
      )}
    </>
  );
};

export default FormComponent;
