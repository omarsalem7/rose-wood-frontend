"use client";
import Image from "next/image";
import React from "react";
import MapWrapper from "@/components/MapWrapper";

const ContactInfo = ({ contactInfo }) => {
  return (
    <>
      <div className=" w-full md:w-[50%]">
        <div className="rounded-lg p-4 border border-gray-300">
          <ul className=" flex flex-col gap-6">
            <li>{contactInfo.title}</li>
            <li className="flex items-center gap-2">
              <Image
                src="/location.svg"
                width={20}
                height={20}
                alt="location"
              />
              {contactInfo.location}
            </li>
            <li className="flex items-center gap-2">
              <Image src="/phone.svg" width={20} height={20} alt="phone" />
              {contactInfo.phone}
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/envelope.svg"
                width={20}
                height={20}
                alt="envelope"
              />
              {contactInfo.email}
            </li>
            <li className="flex items-center gap-2">
              <Image src="/X.svg" width={20} height={20} alt="X" />
              {contactInfo.roseWood}
            </li>
          </ul>
        </div>
        <div className=" rounded-lg pt-4">
          <MapWrapper />
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
