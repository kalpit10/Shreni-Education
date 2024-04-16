import React from "react";

function Contact() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold mb-6 font-serif lg:ml-56 2xl:ml-72">
          Contact Us
        </h1>
        <p className="text-md w-10/12 mb-8 lg:ml-56 2xl:ml-72">
          If you have any queries/concerns, please feel free to drop us a
          message!
        </p>
        <form className="max-w-lg lg:ml-56 2xl:ml-72">
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 pr-5">
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-teal-300"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-teal-300"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-teal-300"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Submit
          </button>
        </form>
        <hr className="my-4 bg-[#1d1e1e] w-1/6 mx-auto h-0.5"></hr>
      </div>
      <div className="flex flex-wrap justify-between pb-12 bg-red-500">
        {/* Shreni Education */}
        <div className="w-full sm:w-auto mb-12 md:ml-16 xl:ml-36">
          <h1 className="font-bold text-3xl text-white pt-5 ml-3">
            Shreni Education
          </h1>
          <p className="font-semibold text-white ml-3 w-56 my-3">
            #581 Basement, Sector-21C, Faridabad (Haryana) – 121001
          </p>
          <p className="font-semibold text-white ml-3 w-56 my-3">
            Email: shrenieducation@gmail.com
          </p>
          <p className="font-semibold text-white ml-3 w-56 my-6">
            Ph.: +91 9810478150 | +91 9711415462
          </p>
        </div>

        {/* Timings */}
        <div className="w-full sm:w-auto md:mr-24 xl:mr-72">
          <h1 className="font-bold text-3xl text-white pt-5 ml-3">Timings</h1>
          <p className="font-semibold text-white ml-3 w-56 my-3">
            <span className="font-bold">Monday:</span> 15:00 – 21:00{" "}
          </p>
          <p className="font-semibold text-white ml-3 w-56 my-3">
            <span className="font-bold">Tuesday:</span> 15:00 – 21:00{" "}
          </p>
          <p className="font-semibold text-white ml-3 w-56 my-6">
            <span className="font-bold">Wednesday:</span> 15:00 – 21:00
          </p>
          <p className="font-semibold text-white ml-3 w-56 my-6">
            <span className="font-bold">Thursday:</span> 15:00 – 21:00
          </p>
          <p className="font-semibold text-white ml-3 w-56 my-6">
            <span className="font-bold">Friday:</span> 15:00 – 21:00
          </p>
          <p className="font-semibold text-white ml-3 w-56 my-6">
            <span className="font-bold">Saturday:</span> 15:00 – 21:00
          </p>
          <p className="font-semibold text-white ml-3 w-56 my-6">
            <span className="font-bold"> Sunday:</span> Closed
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
