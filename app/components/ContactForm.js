"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => setMounted(true), []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up to an email service (e.g. Resend, SendGrid, or a serverless function)
    setSubmitted(true);
  }

  if (!mounted) {
    return <div className="rounded-[8px] border border-[#D4D4D4] bg-white p-8" style={{ minHeight: 380 }} />;
  }

  if (submitted) {
    return (
      <div className="rounded-[8px] border border-[#D4D4D4] bg-white p-8">
        <h3 className="font-heading text-[24px] font-medium text-[#1B2A4A]">
          Thank you!
        </h3>
        <p className="mt-2 text-[16px] text-[#6B7280]">
          We&apos;ve received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[8px] border border-[#D4D4D4] bg-white p-8">
      <h3 className="font-heading text-[24px] font-semibold text-[#1B2A4A]">
        Contact us
      </h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="rounded-[5px] border border-[#D4D4D4] px-4 py-3 text-[14px] text-[#1B2A4A] placeholder-[#6B7280] focus:border-[#CC0000] focus:outline-none"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="rounded-[5px] border border-[#D4D4D4] px-4 py-3 text-[14px] text-[#1B2A4A] placeholder-[#6B7280] focus:border-[#CC0000] focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="rounded-[5px] border border-[#D4D4D4] px-4 py-3 text-[14px] text-[#1B2A4A] placeholder-[#6B7280] focus:border-[#CC0000] focus:outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="rounded-[5px] border border-[#D4D4D4] px-4 py-3 text-[14px] text-[#1B2A4A] placeholder-[#6B7280] focus:border-[#CC0000] focus:outline-none"
        />
      </div>
      <div className="mt-4">
        <label className="mb-1 block text-[12px] font-semibold uppercase tracking-[0.5px] text-[#6B7280]">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded-[5px] border border-[#D4D4D4] px-4 py-3 text-[14px] text-[#1B2A4A] placeholder-[#6B7280] focus:border-[#CC0000] focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full rounded-[4px] bg-[#CC0000] px-6 py-3 text-[16px] font-semibold text-white transition-colors hover:bg-[#A30000]"
      >
        Get in Touch
      </button>
    </form>
  );
}
