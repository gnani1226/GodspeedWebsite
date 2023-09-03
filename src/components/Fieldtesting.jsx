import React, { useState, useEffect } from "react";

function Fieldtesting() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    contact: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    company: "",
    contact: "",
  });

  const [fieldTouched, setFieldTouched] = useState({
    name: false,
    email: false,
    company: false,
    contact: false,
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  useEffect(() => {
    if (Object.values(fieldTouched).some((touched) => touched)) {
      // Validate fields only if any field has been touched
      const errors = {};

      if (!formData.name) {
        errors.name = "Name is required";
      }

      if (!formData.email) {
        errors.email = "Email is required";
      } else if (!validateEmail(formData.email)) {
        errors.email = "Invalid email format";
      }

      if (!formData.company) {
        errors.company = "Company is required";
      }

      if (!formData.contact) {
        errors.contact = "Contact is required";
      }

      setFormErrors(errors);
    }
  }, [formData, fieldTouched]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;
    setFieldTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there are any errors
    const hasErrors = Object.values(formErrors).some((error) => error !== "");

    if (!hasErrors) {
      // Proceed with form submission
      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors");
    }
  };

  const isSubmitDisabled = Object.values(formErrors).some((error) => error !== "");

  return (
    <form className="p-5 form-class">
      <div className="mb-2 flex flex-col justify-center items-start">
        <label className="block font-medium mb-1 text-gray-500" htmlFor="name">
          Name:
        </label>
        <input
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="w-full p-2 border rounded"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          required
        />
        {fieldTouched.name && formErrors.name && (
          <p className="text-red-500">{formErrors.name}</p>
        )}
      </div>
      <div className="mb-2 flex flex-col justify-center items-start">
        <label className="block font-medium mb-1 text-gray-500" htmlFor="email">
          Email:
        </label>
        <input
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="w-full p-2 border rounded"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          required
        />
        {fieldTouched.email && formErrors.email && (
          <p className="text-red-500">{formErrors.email}</p>
        )}
      </div>
      <div className="mb-2 flex flex-col justify-center items-start">
        <label
          className="block font-medium mb-1 text-gray-500"
          htmlFor="company"
        >
          Company:
        </label>
        <input
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="w-full p-2 border rounded"
          type="text"
          id="company"
          name="company"
          value={formData.company}
          required
        />
        {fieldTouched.company && formErrors.company && (
          <p className="text-red-500">{formErrors.company}</p>
        )}
      </div>
      <div className="mb-2 flex flex-col justify-center items-start">
        <label
          className="block font-medium mb-1 text-gray-500"
          htmlFor="contact"
        >
          Contact:
        </label>
        <input
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="w-full p-2 border rounded"
          type="tel"
          id="contact"
          name="contact"
          value={formData.contact}
          required
        />
        {fieldTouched.contact && formErrors.contact && (
          <p className="text-red-500">{formErrors.contact}</p>
        )}
      </div>
      <div className="flex justify-start mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Fieldtesting;
