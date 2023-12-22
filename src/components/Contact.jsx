import React from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://getform.io/f/937edbda-c665-40a4-b476-aa1ec8cc7420', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Message sent successfully');
      } else {
        toast.error('Please fill out all fields before you submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div name="contact" className="bg-contact pt-[3rem] px-[3rem] pb-[5rem] w-full flex justify-center items-center">
      <div className="mx-auto h-full">
        <div className="mb-10">
          <h2 className="text-[#001219] md:font-semibold">
            I&apos;m open to exciting project
            opportunities and would love to connect.
            Feel free to reach out,
            I&apos;m ready to chat!
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full name"
              name="fullname"
              maxLength="30"
              required
              className="p-2 bg-transparent border-b-4 border-[#E3651D]  text-gray-800 focus:outline-none w-full rounded-md"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="p-2 bg-transparent border-b-4 border-[#E3651D]  text-gray-800 focus:outline-none w-full rounded-md"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              rows="5"
              placeholder="Write me something..."
              required
              className="p-2 bg-transparent border-b-4 text-[#220901] border-[#E3651D]  focus:outline-none w-full rounded-md md:mt-[2rem]"
            />
          </div>

          <button type="submit" className="m-1 px-5 py-2 md:px-6 md:py-3 border-b-4 border-[#E3651D] hover:border-none text-[#f8f9fad2] bg-[#001219] rounded-lg duration-500  hover:skew-y-3 hover:scale-x-50 hover:shadow-md hover:shadow-black hover:bg-[#f8f9fad2] hover:text-black rounded-br-[10rem]">
            Get in touch
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
