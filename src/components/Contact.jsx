// Contact.js

import React from 'react';

const Contact = () => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic for handling form submission here
  };

  return (
    //adding comments
    <div className='bg-gray-800 h-screen flex justify-center items-center'>
    <div className="container mx-auto lg:mx-14  mt-8">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-[200px] gap-8 bg-gray-700 p-10 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className=" text-gray-200 block font-semibold">Your Name</label>
            <input type="text" id="name" name="name" className=" w-full border-gray-300 rounded-md p-2" required />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-200 block font-semibold">Your Email</label>
            <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md p-2" required />
          </div>
          <div>
            <label htmlFor="phone" className=" text-gray-200 block font-semibold">Your Phone</label>
            <input type="tel" id="phone" name="phone" className="w-full border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label htmlFor="message" className="text-gray-200 block font-semibold">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full border-gray-300 rounded-md p-2" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send</button>
        </form>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className='text-gray-200'>ashishdxt121200@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className='text-gray-200'>+917534026714</p>
          </div>
          <div>
            <h3 className="font-semibold"> Location </h3>
            <p className='text-gray-200'>Agra, Uttar Pradesh
</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
