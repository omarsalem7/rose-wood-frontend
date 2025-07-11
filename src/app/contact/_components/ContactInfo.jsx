"use client"
import Image from "next/image";
import React from "react";
import CustomMap from "./ContactLocation";
import { APIProvider } from "@vis.gl/react-google-maps";

const ContactInfo = () => {
  return (
    <>
      <div className=" w-full md:w-[50%]">
        <div className="rounded-lg p-4 border border-gray-300">
          <ul className=" flex flex-col gap-6">
            <li>تواصل معنا عن طريق:</li>
            <li className="flex items-center gap-2">
              <Image
                src="/location.svg"
                width={20}
                height={20}
                alt="location"
              />
              بجوار مول العرب, 6 اكتوبر
            </li>
            <li className="flex items-center gap-2">
              <Image src="/phone.svg" width={20} height={20} alt="phone" />
              +201033143*** - +201033143***
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/envelope.svg"
                width={20}
                height={20}
                alt="envelope"
              />
              info@rosewood.com
            </li>
            <li className="flex items-center gap-2">
              <Image src="/X.svg" width={20} height={20} alt="X" />
              روز وود للاخشاب الصحية
            </li>
          </ul>
        </div>
        <div className=" rounded-lg pt-4">
          <APIProvider apiKey="AIzaSyDb7jKx_QUvxovIcmlkjD0d2CQYfQeDX6U">
            <CustomMap />
          </APIProvider>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
