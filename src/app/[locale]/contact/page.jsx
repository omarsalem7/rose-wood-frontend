import React from "react";
import ContactWrapper from "./_components/ContactWrapper";

export const revalidate = 300;

export async function generateMetadata({ params }) {
  const { locale } =await params;
  return {
    title: locale === "ar" ? "اتصل بنا" : "Contact Us",
    description: "Get in touch with Rose Wood for inquiries and support",
  };
}

export default async function ContactPage({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  return <ContactWrapper locale={locale} />;
}
