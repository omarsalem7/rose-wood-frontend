import React from "react";
import ContactWrapper from "./_components/ContactWrapper";

export const revalidate = 300;

export default async function ContactPage({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  return <ContactWrapper locale={locale} />;
}
