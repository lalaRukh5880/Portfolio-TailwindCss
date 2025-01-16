import React from 'react';
import { LuMail } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">Get in touch</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Drop me a line, give me a call, or send me a message by submitting the form below.
          </p>
          <div className="flex items-center gap-3 text-gray-300">
            <LuMail size={25} />
            <span>lalarukh@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <BsTelephone size={25} />
            <span>(021) 000-000</span>
          </div>
        </div>

        {/* Contact Form Section */}
        <form className="space-y-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="h-10 px-3 text-gray-300 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-accent"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="h-10 px-3 text-gray-300 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-accent"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="msg" className="text-sm text-gray-300">
              Message
            </label>
            <textarea
              id="msg"
              rows={5}
              className="px-3 py-2 text-gray-300 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-accent"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-20 py-2 bg-accent text-white rounded-md hover:bg-accent-dark transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
