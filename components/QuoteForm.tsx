"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Residential Solar Installation",
  "Commercial Solar Installation",
  "Solar Removal & Reinstall (Roofing)",
  "Insurance Claim Restoration",
  "Repair / Maintenance",
  "Other",
];

const propertyOptions = ["Residential", "Commercial", "Other"];

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder-ink/40 shadow-sm outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/30";
const labelClasses = "mb-1.5 block text-sm font-medium text-ink";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    setFieldErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      service_type: formData.get("service_type"),
      property_type: formData.get("property_type"),
      is_insurance_claim: formData.get("is_insurance_claim") === "on",
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data?.message ?? "Something went wrong. Please try again.");
        if (data?.errors) setFieldErrors(data.errors);
        return;
      }

      setStatus("success");
      setMessage(data?.message ?? "Thanks! We'll be in touch shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again or call us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-ocean/30 bg-white p-8 text-center shadow-card">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ocean/15 text-ocean">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12.5l5 5 11-11" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold text-ink">Request received!</h3>
        <p className="mt-2 text-ink/70">{message}</p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
          className="btn-secondary mt-6"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink/10 bg-white/90 p-6 shadow-card sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name <span className="text-sun">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} placeholder="Jane Doe" />
          {fieldErrors.name && <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-sun">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} placeholder="jane@email.com" />
          {fieldErrors.email && <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone <span className="text-sun">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClasses} placeholder="(816) 555-1234" />
          {fieldErrors.phone && <p className="mt-1 text-sm text-red-600">{fieldErrors.phone}</p>}
        </div>

        <div>
          <label htmlFor="property_type" className={labelClasses}>Property Type</label>
          <select id="property_type" name="property_type" defaultValue="" className={inputClasses}>
            <option value="" disabled>Select property type</option>
            {propertyOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="address" className={labelClasses}>Property Address</label>
          <input id="address" name="address" type="text" autoComplete="street-address" className={inputClasses} placeholder="City, or full street address" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service_type" className={labelClasses}>What do you need?</label>
          <select id="service_type" name="service_type" defaultValue="" className={inputClasses}>
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClasses}>Message</label>
          <textarea id="message" name="message" rows={4} className={inputClasses} placeholder="Tell us about your roof, system, timeline, or claim details..." />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="is_insurance_claim" className="flex items-center gap-3 rounded-xl border border-ink/15 bg-cream/50 px-4 py-3 text-sm text-ink">
            <input id="is_insurance_claim" name="is_insurance_claim" type="checkbox" className="h-5 w-5 rounded border-ink/30 text-ocean focus:ring-ocean/40" />
            This is related to an insurance claim or roof replacement
          </label>
        </div>
      </div>

      {status === "error" && message && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {message}
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary mt-6 w-full text-base disabled:cursor-not-allowed disabled:opacity-60">
        {status === "submitting" ? "Sending..." : "Request My Free Quote"}
      </button>
      <p className="mt-3 text-center text-xs text-ink/55">
        We&apos;ll never share your information. Expect a reply within 1–2 business days.
      </p>
    </form>
  );
}
