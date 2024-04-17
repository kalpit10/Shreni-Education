import React from "react";
import { Formik, Form, Field } from "formik";
import ContactDetails from "../side-components-home/ContactDetails";

function Contact() {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center md:flex md:flex-row">
      <div className="w-11/12 bg-gradient-to-b from-cyan-300 to-sky-600 p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-4xl font-semibold text-center mb-6 text-[#FFFEFD]">
          Enquire Now
        </h1>

        <Formik
          initialValues={{ name: "", mobilenumber: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Required";
            }
            if (!values.mobilenumber) {
              errors.mobilenumber = "Required";
            }
            if (!values.message) {
              errors.message = "Required";
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Full Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="mobilenumber"
                  className="block text-sm font-medium text-gray-600"
                >
                  Mobile Number
                </label>
                <Field
                  type="tel"
                  id="mobilenumber"
                  name="mobilenumber"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Mobile Number"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Message..."
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <ContactDetails />
    </div>
  );
}

export default Contact;
