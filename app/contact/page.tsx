"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PageTitle from "../components/PageTitle";

// Zod Schema
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  message: z.string().min(25, "Message must be at least 25 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { firstName: "", lastName: "", message: "" },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  // Handling errors
  const renderError = (fieldName: keyof FormData) => {
    const error = errors[fieldName];

    return error && <p className="text-red-500 label">{error.message}</p>;
  };

  return (
    // <div className="p-8 space-y-8 sm:space-y-0 sm:space-x-16 sm:p-8 sm:m-8 flex flex-col sm:flex-row justify-between items-center">
    <div className="p-8 space-y-8 sm:space-y-0 sm:space-x-16 sm:p-8 sm:m-8 flex flex-col sm:flex-row justify-between items-center min-h-full">
      {/* Hero section */}
      <div className="space-y-4 sm:w-1/2">
        <PageTitle title={"Get in touch with me!"} />
        <h2 className="sm:text-2xl text-main-text">
          Fill out the contact form, and I&apos;ll get back to you as soon as
          possible!
        </h2>
      </div>

      {/* Divider section (from daisyUI)*/}
      <div className="divider sm:hidden"></div>

      {/* Contact form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-full max-w-md mx-auto"
        >
          {/* First name input */}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend text-main-text text-base">
              First name
            </legend>
            <input
              id="firstName"
              {...register("firstName")}
              className="p-4 input text-main-text text-base"
            />
            {renderError("firstName")}
          </fieldset>

          {/* Last name input field*/}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend text-main-text text-base">
              Last name
            </legend>
            <input
              id="lastName"
              {...register("lastName")}
              className="p-4 input text-main-text text-base"
            />
            {renderError("lastName")}
          </fieldset>

          {/* Message input field */}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend text-main-text text-base">
              Your message
            </legend>
            <textarea
              id="message"
              {...register("message")}
              placeholder="Do you like your coffee black or with sugar?"
              className="p-4 textarea text-main-text text-base"
            />
            {renderError("message")}
          </fieldset>

          {/* Submit button */}
          <button
            type="submit"
            className="btn btn-outline text-orange-500 text-lg w-fit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
