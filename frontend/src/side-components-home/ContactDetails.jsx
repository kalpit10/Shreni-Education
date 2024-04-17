import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function ContactDetails() {
  return (
    <div className="flex flex-col justify-center items-center md:flex md:flex-row">
      <div className="mt-3 w-11/12 grid grid-cols-1 gap-8 md:grid-cols-3 md:flex md:flex-col md:w-11/12 md:ml-12">
        {/* Address Card */}
        <div className="bg-white border-2 p-6 rounded-lg shadow-lg flex items-center">
          <FaMapMarkerAlt className="text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p>#581 Basement, Sector-21C, Faridabad (Haryana) – 121001</p>
          </div>
        </div>

        {/* Phone Number Card */}
        <div className="bg-white border-2 p-6 rounded-lg shadow-lg flex items-center">
          <FaPhoneAlt className="text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p>+91 9810478150 | +91 9711415462</p>
          </div>
        </div>

        {/* Email Card */}
        <div className="mb-3 bg-white border-2 p-6 rounded-lg shadow-lg flex items-center">
          <FaEnvelope className="text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p>shrenieducation@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
