import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField, submitForm, clearForm } from "../store";

const Form = () => {
  const dispatch = useDispatch();
  const { username, email, password, color } = useSelector(
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
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
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


      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default Form;
