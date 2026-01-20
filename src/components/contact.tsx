"use client";

import { useRef, useState, type ReactNode } from "react";
import Heading from "./heading";
import {
  ContactInput,
  contactInputValidator,
} from "@/validators/contact.validator";
import { sendEmail } from "@/lib/resend";
import Link from "next/link";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import { toast } from "sonner";
import { CircleCheckBig } from "lucide-react";

const Contact = () => {
  const [text, setText] = useState<ReactNode>("Drop a text");
  const [loading, setLoading] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactInputValidator),
  });

  const handleFormSubmit = async (data: ContactInput) => {
    setLoading(true);
    try {
      const res = await sendEmail(data);

      if (res.success) {
        setText(<CircleCheckBig className="size-5" />);
        setTimeout(() => setText("Drop a text"), 3 * 1000);

        formRef.current?.reset();
        toast.success("I will get back to you shortly :)");
      } else {
        console.log(errors);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Err dropping a text!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex flex-col gap-y-3">
      <Heading title="Contact" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
        <div className="grid grid-cols-4 gap-y-8 md:grid-cols-2">
          <Link
            href="https://github.com/saatvik-10"
            target="_blank"
            className="flex justify-center md:justify-start"
          >
            <IconBrandGithub className="social size-13 text-zinc-100 hover:text-zinc-400 md:size-28" />
          </Link>

          <Link
            href="mailto:yello@itsaatvik.dev"
            target="_blank"
            className="flex justify-center md:justify-start"
          >
            <IconMail className="social size-13 text-zinc-100 hover:text-zinc-400 md:size-28" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/saatvik-madan-9ab4a32a9/"
            target="_blank"
            className="flex justify-center md:justify-start"
          >
            <IconBrandLinkedin className="social size-13 text-zinc-100 hover:text-zinc-400 md:size-28" />
          </Link>

          <Link
            href="https://x.com/PhO3NiX___10"
            target="_blank"
            className="flex justify-center md:justify-start"
          >
            <IconBrandX className="social size-13 text-zinc-100 hover:text-zinc-400 md:size-28" />
          </Link>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit(handleFormSubmit)}
          className="form flex h-full w-full flex-col gap-5 overflow-hidden"
        >
          <Input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="text-zinc-300 placeholder:text-xs"
          />
          {errors.name && (
            <p className="-mt-3 -mb-2 text-xs text-red-500 md:text-sm">
              Please enter your name
            </p>
          )}
          <Input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="text-zinc-300 placeholder:text-xs"
          />
          {errors.email && (
            <p className="-mt-3 -mb-2 text-xs text-red-500 md:text-sm">
              Please enter a valid email address
            </p>
          )}
          <Textarea
            {...register("message")}
            placeholder="Type your message here."
            className="h-screen flex-1 resize-none text-zinc-300 placeholder:text-xs"
          />
          {errors.message && (
            <p className="-mt-3 -mb-2 text-xs text-red-500 md:text-sm">
              Please enter a message
            </p>
          )}
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="w-full cursor-pointer rounded-md bg-zinc-100 text-zinc-950 hover:bg-zinc-300"
              disabled={loading}
            >
              {loading ? "connecting..." : text}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
