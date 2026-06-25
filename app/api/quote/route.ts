import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { validateQuoteInput } from "@/lib/validation";
import { sendNotificationEmail, escapeHtml } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const result = validateQuoteInput(raw);
  if (!result.valid || !result.data) {
    return NextResponse.json(
      { ok: false, message: "Please fix the highlighted fields.", errors: result.errors },
      { status: 422 }
    );
  }

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase
      .from("quote_requests")
      .insert({ ...result.data, status: "new" });

    if (error) {
      console.error("Supabase insert error:", error.message);
      return NextResponse.json(
        { ok: false, message: "We couldn't save your request. Please try again or call us directly." },
        { status: 500 }
      );
    }

    const q = result.data;
    await sendNotificationEmail({
      subject: `New solar quote request — ${q.name}`,
      replyTo: q.email,
      html: `
        <h2>New quote request — DC Solar KC</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(q.name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(q.email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(q.phone)}</td></tr>
          <tr><td><strong>Property address</strong></td><td>${escapeHtml(q.address)}</td></tr>
          <tr><td><strong>Service</strong></td><td>${escapeHtml(q.service_type)}</td></tr>
          <tr><td><strong>Property type</strong></td><td>${escapeHtml(q.property_type)}</td></tr>
          <tr><td><strong>Insurance claim?</strong></td><td>${q.is_insurance_claim ? "Yes" : "No"}</td></tr>
          <tr><td valign="top"><strong>Message</strong></td><td>${escapeHtml(q.message)}</td></tr>
        </table>
      `,
    });
  } catch (err) {
    console.error("Quote submission failed:", err);
    return NextResponse.json(
      { ok: false, message: "Quote service is not configured. Please call or email us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { ok: true, message: "Thanks! We received your request and will be in touch shortly." },
    { status: 201 }
  );
}
