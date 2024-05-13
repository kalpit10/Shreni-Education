import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import AlertBox from "./Alert";
import ContactDetails from "../side-components-home/ContactDetails";

function Contact() {
  const form = useRef();
  const [alert, setAlert] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // let params = {
    //   name: document.getElementById("name").value,
    //   email: document.getElementById("email").value,
    //   message: document.getElementById("message").value,
    // };

    emailjs
      .sendForm("service_0m7g8qo", "template_x1ui8d6", form.current, {
        publicKey: "-Yykimd20_6il6YCS",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setAlert(true);
          form.current.reset();
          setTimeout(() => {
            setAlert(false);
          }, 2000);
        },
        (error) => {
          setAlert(false);
          console.log("FAILED...", error.text);
          console.log(error);
        }
      );
  };

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center md:flex md:flex-row mb-16 mt-12">
      <div className="w-11/12 bg-gradient-to-b from-cyan-300 to-sky-600 p-8 rounded-lg shadow-md max-w-md">
        {alert && <AlertBox />}
        <h1 className="text-4xl font-semibold text-center mb-6 text-[#FFFEFD]">
          Enquire Now
        </h1>

        <form ref={form} onSubmit={sendEmail} className="mb-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            {" "}
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Message..."
              className="mt-1 p-2 w-full border rounded-md mb-3"
            />
            <div className="text-center">
              <button
                type="submit"
                required
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <ContactDetails />
    </div>
  );
}

export default Contact;

{
  /* <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Required";
            }
            if (!values.email) {
              errors.email = "Required"; // Corrected key
            }
            if (!values.message) {
              errors.message = "Required";
            }
            return errors;
          }}
          onSubmit={sendEmail}
        >
          {({ handleSubmit }) => (
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
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Email"
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
        </Formik> */
}
