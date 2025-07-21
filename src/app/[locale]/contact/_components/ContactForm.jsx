import { Button } from "@/components/ui/button";
import React from "react";

const ContactForm = ({ btnText, contactForm }) => {
  return (
    <>
      <div className="w-full md:w-[50%]">
        <form className="flex flex-col gap-4">
          <div className="fromcontrol">
            <input
              type="text"
              className="rounded-lg p-3 pr-4 hover:border hover:border-[#5F361F] transition  duration-300 outline-0 border w-full border-gray-300"
              placeholder={contactForm.fieldName}
            />
          </div>
          <div className="fromcontrol">
            <input
              type="text"
              className="rounded-lg p-3 pr-4 hover:border hover:border-[#5F361F] transition  duration-300 outline-0 border w-full border-gray-300"
              placeholder={contactForm.fieldPhone}
            />
          </div>
          <div className="fromcontrol">
            <input
              type="text"
              className="rounded-lg p-3 pr-4 hover:border hover:border-[#5F361F] transition  duration-300 outline-0 border w-full border-gray-300"
              placeholder={contactForm.fieldEmail}
            />
          </div>
          <div className="fromcontrol">
            <input
              type="text"
              className="rounded-lg p-3 pr-4 hover:border hover:border-[#5F361F] transition  duration-300 outline-0 border w-full border-gray-300"
              placeholder={contactForm.fieldAddress}
            />
          </div>
          <div className="fromcontrol">
            <textarea
              className="rounded-lg p-3 pr-4 hover:border
              hover:border-[#5F361F] transition duration-300 outline-0 border
              h-[300px] w-full border-gray-300 resize-none"
              placeholder={contactForm.fieldMessage}
            ></textarea>
          </div>
          <div className="m-auto">
            <Button
              className=" rounded-lg py-6 w-[250px] md:w-[401px] bg-[#5F361F] text-white text-lg"
              type="submit"
            >
              {btnText}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
