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
    <main className="min-h-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-12 mx-4 sm:mx-8">
      {/* DIV 1 */}
      {/* HERO SECTION */}
      <div className="flex flex-col gap-2 sm:w-1/2">
        <PageTitle title={"Get in touch with me!"} />
        <h2 className="sm:text-2xl">
          Fill out the contact form, and I&apos;ll get back to you as soon as
          possible!
        </h2>
      </div>

      {/* DIV 2 */}
      {/* DIVIDER */}
      <div className="divider sm:hidden"></div>

      {/* DIV 3 */}
      {/* CONTACT FORM */}
      <div className="w-full sm:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          {/* FIRST NAME */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend sm:text-base">First name</legend>
            <input
              id="firstName"
              {...register("firstName")}
              className="w-full input sm:text-base"
            />
            {renderError("firstName")}
          </fieldset>

          {/* LAST NAME*/}
          <fieldset className="fieldset">
            <legend className="fieldset-legend sm:text-base">Last name</legend>
            <input
              id="lastName"
              {...register("lastName")}
              className="w-full input sm:text-base"
            />
            {renderError("lastName")}
          </fieldset>

          {/* MESSAGE */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend sm:text-base">
              Your message
            </legend>
            <textarea
              id="message"
              {...register("message")}
              placeholder="How do you like your coffee?"
              className="w-full p-4 textarea sm:text-base"
            />
            {renderError("message")}
          </fieldset>

          {/* SUBMIT */}
          <button
            type="submit"
            className="btn btn-outline text-orange-500 text-lg w-fit"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
