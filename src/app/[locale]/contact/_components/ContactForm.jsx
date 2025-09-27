"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React from "react";
import { submitContactForm } from "@/lib/api/order";
import FormResultDialog from "@/components/FormResultDialog";

const ContactForm = ({ btnText, contactForm, locale, t }) => {
  // State for form submission
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [dialogState, setDialogState] = React.useState({
    isOpen: false,
    type: "success", // 'success' or 'error'
    title: "",
    message: "",
  });

  // Localized Zod schema
  const formSchema = z.object({
    fullName: z.string().min(2, t.validation.nameMin),
    phone: z.string().min(10, t.validation.phoneMin),
    email: z.string().email(t.validation.email),
    address: z.string().min(5, t.validation.addressMin),
    message: z.string().min(10, t.validation.messageMin),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      // Submit the form data to the API
      await submitContactForm(data);

      // Show success dialog
      setDialogState({
        isOpen: true,
        type: "success",
        title: t.title,
        message: t.successMessage,
      });

      // Reset the form after successful submission
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);

      // Show error dialog
      setDialogState({
        isOpen: true,
        type: "error",
        title: "Error",
        message: t.errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="w-full md:w-[50%]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder={contactForm.fieldName}
                      className="rounded-lg p-3 pr-4 hover:border hover:border-[#5F361F] transition duration-300 outline-0 border w-full border-gray-300 bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder={contactForm.fieldPhone}
                      className="rounded-lg p-3 pr-4 hover:border hover:border-[#5F361F] transition duration-300 outline-0 border w-full border-gray-300 bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={contactForm.fieldEmail}
                      className="rounded-lg p-3 pr-4 hover:border hover:border-[#5F361F] transition duration-300 outline-0 border w-full border-gray-300 bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder={contactForm.fieldAddress}
                      className="rounded-lg p-3 pr-4 hover:border hover:border-[#5F361F] transition duration-300 outline-0 border w-full border-gray-300 bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder={contactForm.fieldMessage}
                      className="rounded-lg p-3 pr-4 hover:border hover:border-[#5F361F] transition duration-300 outline-0 border h-[300px] w-full border-gray-300 resize-none bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="m-auto">
              <Button
                className="cursor-pointer rounded-lg py-6 w-[250px] md:w-[401px] bg-[#5F361F] text-white text-lg hover:bg-amber-900 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? t.submitting : btnText}
              </Button>
            </div>
          </form>
        </Form>
      </div>

      {/* Form Result Dialog */}
      <FormResultDialog
        isOpen={dialogState.isOpen}
        onClose={() => setDialogState({ ...dialogState, isOpen: false })}
        type={dialogState.type}
        title={dialogState.title}
        message={dialogState.message}
        redirectPath={`/${locale}`}
        successButtonText={t.goToHome}
        errorButtonText={t.tryAgain}
      />
    </>
  );
};

export default ContactForm;
