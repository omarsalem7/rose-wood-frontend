import React from "react";
import ContactForm from "./_components/ContactForm";
import ContactInfo from "./_components/ContactInfo";
import { fetchContactPageData } from "@/lib/cms";

const Contact = async () => {
  const data = await fetchContactPageData();

  return (
    <>
      <section className="px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-[40px] font-extrabold pb-7">
            تواصل معنا الان
          </div>
          <div className="items flex flex-col  gap-6 md:flex-row">
            <ContactForm btnText={data.sendButton} contactForm={data.contactForm} />
            <ContactInfo contactInfo={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
