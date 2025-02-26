"use client";
import React, { useState } from "react";
import Socialmedia from "./Socialmedia";
import { Button, buttonVariants } from "@/components/ui/button";
import { contactForm } from "@/constants/contactForm";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    //id xgejpdgy
    try {
      const response = await fetch("https://formspree.io/f/xgejpdgy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <section>
      <div className="container">
        <div className="h-full max-w-[750px] flex-wrap  mx-auto flex border border-border rounded-lg ">
          <div className="w-full md:w-[30%] min-h-full relative  ">
            <div className="bg-background space-y-6 rounded-lg md:border-2 border-border w-full lg:-start-1/2 md:absolute h-fit p-4 md:top-1/2 md:-translate-y-1/2 ">
              {contactForm.map((item, i) => {
                return (
                  <div key={i} className="flex  gap-4">
                    <item.icon className="size-6 flex-shrink-0 text-blue-500 mt-1" />
                    <div>
                      <h2 className="text-xl font-semibold capitalize">
                        {item.title}
                      </h2>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
              <Socialmedia size="size-8" />
            </div>
            <img
              loading="lazy"
              src="https://plus.unsplash.com/premium_photo-1678903964473-1271ecfb0288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
              alt="contact"
              className="hidden md:block rounded-r-lg object-fill h-full"
            />
          </div>
          <form onSubmit={handleSubmit} className="flex-1 md:w-[70%]  p-10">
            <h2 className="text-2xl mb-4 md:text-3xl lg:text-4xl font-semibold">
              تواصل معانا
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <label>الاسم بالكامل</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={"اسمك"}
                  className="border border-border p-2 w-full bg-accent outline-none  rounded"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>رقم الهاتف</label>
                <input
                  type="text"
                  value={formData.phone}
                  name="phone"
                  onChange={handleChange}
                  placeholder={"رقم الهاتف"}
                  required
                  className="border border-border p-2 w-full bg-accent outline-none  rounded"
                />
              </div>
              <div className="flex flex-col gap-1">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={"نص الرسالة"}
                  className="border border-border h-[150px] resize-none p-2 w-full bg-accent outline-none  rounded"
                />
              </div>
            </div>
            <Button
              disabled={status === "success"}
              className={
                (buttonVariants({ size: "lg" }), "w-full mt-6 text-xl")
              }>
              {status === "submitting"
                ? "loading..."
                : status === "success"
                ? "sent successfully"
                : "ارسال"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
