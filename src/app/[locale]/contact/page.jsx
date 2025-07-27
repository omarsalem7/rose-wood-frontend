"use client";

import React from "react";
import ContactForm from "./_components/ContactForm";
import ContactInfo from "./_components/ContactInfo";
import { fetchContactPageData } from "@/lib/api/cms";
import en from "@/../public/locales/en/contact.json";
import ar from "@/../public/locales/ar/contact.json";

const Contact = ({ params }) => {
  // Unwrap the params Promise
  const { locale } = React.use(params);

  const t = locale === "ar" ? ar : en;

  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const contactData = await fetchContactPageData();
        setData(contactData);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-[40px] font-extrabold pb-7">
            {t.title}
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="text-lg">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-[40px] font-extrabold pb-7">
            {t.title}
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-red-500">
              Error loading contact data
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-[40px] font-extrabold pb-7">
            {t.title}
          </div>
          <div className="items flex flex-col  gap-6 md:flex-row">
            <ContactForm
              btnText={data.sendButton}
              contactForm={data.contactForm}
              locale={locale}
              t={t}
            />
            <ContactInfo contactInfo={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
