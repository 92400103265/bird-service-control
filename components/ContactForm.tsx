"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { FiArrowRight, FiLoader } from "react-icons/fi";

const initialForm = { name: "", phone: "", email: "", address: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.message || "Unable to send your request.");
      toast.success(payload.message);
      setForm(initialForm);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally { setSubmitting(false); }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row"><label>Full Name<input required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" /></label><label>Phone Number<input required maxLength={20} inputMode="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your phone number" /></label></div>
      <label>Email<input required type="email" maxLength={100} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
      <label>Address<textarea required rows={2} maxLength={2000} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Your address in Rajkot" /></label>
      <label>Message<textarea required rows={4} maxLength={5000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us what you need help with" /></label>
      <button className="button button-primary form-submit" disabled={submitting}>{submitting ? <><FiLoader className="spin" /> Sending...</> : <>Send enquiry <FiArrowRight /></>}</button>
    </form>
  );
}
