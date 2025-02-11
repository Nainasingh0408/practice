import React from "react";

function App() {
  return React.createElement(
    "div",
    { className: "form-container" },
    React.createElement("h2", null, "React Form"),
    React.createElement(
      "form",
      {
        id: "myForm",
        onSubmit: (event) => {
          event.preventDefault();
          const name = event.target.name.value;
          const email = event.target.email.value;
          const gender = event.target.gender.value;
          console.log("Name:", name);
          console.log("Email:", email);
          console.log("Gender:", gender);
          alert("Form Submitted!");
        },
      },
      // Name Field
      React.createElement("label", { htmlFor: "name" }, "Name:"),
      React.createElement("input", {
        type: "text",
        id: "name",
        name: "name",
        required: true,
      }),
      React.createElement("br"),

      // Email Field
      React.createElement("label", { htmlFor: "email" }, "Email:"),
      React.createElement("input", {
        type: "email",
        id: "email",
        name: "email",
        required: true,
      }),
      React.createElement("br"),

      // Gender Radio Buttons
      React.createElement("label", null, "Gender:"),
      React.createElement("br"),
      React.createElement("input", {
        type: "radio",
        id: "male",
        name: "gender",
        value: "male",
        required: true,
      }),
      React.createElement("label", { htmlFor: "male" }, "Male"),

      React.createElement("input", {
        type: "radio",
        id: "female",
        name: "gender",
        value: "female",
      }),
      React.createElement("label", { htmlFor: "female" }, "Female"),
      React.createElement("br"),

      // Submit Button
      React.createElement("button", { type: "submit" }, "Submit")
    )
  );
}

export default App;
