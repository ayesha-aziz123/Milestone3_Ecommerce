import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#363535] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let&apos;s Work together!
      </h1>
      
      {/* Form  */}
      <form className="mt-8 w-full block overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between ">
          <input
            type="text"
            placeholder="First name"
            className="flex-1 bg-white text-black placeholder:text-gray-600 px-3 py-2 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="flex-1 bg-white text-black placeholder:text-gray-600 px-3 py-2 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 justify-between mt-5">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 bg-white text-black placeholder:text-gray-600 px-3 py-2 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="tel"
            placeholder="phone"
            className="flex-1 bg-white text-black placeholder:text-gray-600 px-3 py-2 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
       
        <textarea
          rows={5}
          placeholder="Message"
          className="bg-white mt-5 text-black placeholder:text-gray-600 px-6 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
        ></textarea>
        <div className="mt-4">
        <button className="bg-gray-600 px-8 py-3.5 text-white hover:bg-blue-900 transition-all duration-200 rounded-full font-semibold">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
