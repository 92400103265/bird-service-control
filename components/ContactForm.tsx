"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FiArrowRight, FiCheckCircle, FiLoader } from "react-icons/fi";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "Invisible Grill Installation",
  address: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.message || "Unable to send your request.");
      }

      toast.success(payload.message || "Thanks! Your request has been received.");
      setForm(initialForm);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong. Please call +91 8229006831 directly."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="form-row">
        <label>
          Full Name *
          <input
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="e.g. Ramesh Sharma"
          />
        </label>
        <label>
          Phone Number *
          <input
            required
            maxLength={20}
            inputMode="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="e.g. 9812345678"
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Email Address *
          <input
            required
            type="email"
            maxLength={100}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@gmail.com"
          />
        </label>
        <label>
          Service Required *
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            <option value="Invisible Grill Installation">Invisible Grill Installation</option>
            <option value="Bird Net Installation">Bird Net Installation</option>
            <option value="Child Safety Net">Child & Pet Safety Net</option>
            <option value="Artificial Grass">Artificial Grass Installation</option>
            <option value="Balcony Safety Net">Balcony Safety Net</option>
            <option value="Anti-Bird Spikes">Anti-Bird Spikes</option>
            <option value="Full Balcony Package">Full Balcony Safety Package</option>
          </select>
        </label>
      </div>

      <label>
        Installation Address / Area *
        <textarea
          required
          rows={2}
          maxLength={2000}
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          placeholder="e.g. Hans Enclave, Sector 33, Gurugram or nearby area"
        />
      </label>

      <label>
        Requirement Details & Balcony Dimensions
        <textarea
          required
          rows={3}
          maxLength={5000}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="e.g. Looking for invisible grill for 2 balconies on the 8th floor. Need free measurement this weekend."
        />
      </label>

      <button className="button button-primary form-submit" disabled={submitting} type="submit">
        {submitting ? (
          <>
            <FiLoader className="spin" /> Sending inquiry...
          </>
        ) : (
          <>
            Submit for Free On-Site Inspection <FiArrowRight />
          </>
        )}
      </button>
    </motion.form>
  );
}