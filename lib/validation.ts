import type { QuoteRequestInput } from "@/types/database";

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
  data?: QuoteRequestInput;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function asBool(value: unknown): boolean {
  return value === true || value === "true" || value === "on" || value === "1";
}

/**
 * Validates and normalizes a raw quote-request payload coming from the form / API.
 * Returns a cleaned object on success.
 */
export function validateQuoteInput(raw: unknown): ValidationResult {
  const errors: Record<string, string> = {};
  const body = (raw ?? {}) as Record<string, unknown>;

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);
  const phone = asTrimmedString(body.phone);
  const address = asTrimmedString(body.address);
  const service_type = asTrimmedString(body.service_type);
  const property_type = asTrimmedString(body.property_type);
  const message = asTrimmedString(body.message);
  const is_insurance_claim = asBool(body.is_insurance_claim);

  if (!name) errors.name = "Please tell us your name.";
  if (!email) {
    errors.email = "Please provide an email address.";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "Please provide a valid email address.";
  }
  if (!phone) errors.phone = "Please provide a phone number so we can reach you.";

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: {},
    data: {
      name,
      email,
      phone: phone || null,
      address: address || null,
      service_type: service_type || null,
      property_type: property_type || null,
      is_insurance_claim,
      message: message || null,
    },
  };
}
