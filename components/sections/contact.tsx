"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_KEY_HERE";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // user can retry
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative bg-beige py-24 sm:py-32">
      <div className="geo-bg absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-display text-[10px] font-medium uppercase tracking-[0.35em] text-green-dark sm:text-[11px]">
            Get in Touch
          </p>
          <h2 className="mb-4 font-serif text-3xl text-brown sm:text-4xl">
            Start Your Journey
          </h2>
          <div className="mx-auto mb-6 accent-line" />
          <p className="mx-auto max-w-md text-sm font-light leading-relaxed text-brown-light">
            Tell us about the piece you&apos;re dreaming of. We respond within
            24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="border border-green/30 bg-white p-12 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-green/10">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <polyline
                  points="4,10 8,14 16,6"
                  stroke="#AAB396"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-serif text-2xl text-brown">Thank You</h3>
            <p className="text-sm font-light text-brown-light">
              We&apos;ve received your inquiry and will be in touch within 24
              hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 border border-brown/8 bg-white p-8 sm:p-10"
          >
            <input type="hidden" name="botcheck" className="hidden" />
            <input
              type="hidden"
              name="subject"
              value="New Inquiry — Zari & Stone Co."
            />

            {/* Name & Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
                >
                  Name <span className="text-green-dark">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="rounded-none border-brown/12 bg-beige/40 placeholder:text-warm-gray/50 focus-visible:ring-green/40"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
                >
                  Email <span className="text-green-dark">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="rounded-none border-brown/12 bg-beige/40 placeholder:text-warm-gray/50 focus-visible:ring-green/40"
                />
              </div>
            </div>

            {/* Phone & Inquiry Type */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
                >
                  Phone <span className="text-warm-gray">(optional)</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="rounded-none border-brown/12 bg-beige/40 placeholder:text-warm-gray/50 focus-visible:ring-green/40"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="inquiry_type"
                  className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
                >
                  Inquiry Type <span className="text-green-dark">*</span>
                </Label>
                <Select name="inquiry_type" required>
                  <SelectTrigger className="rounded-none border-brown/12 bg-beige/40 text-brown focus:ring-green/40">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-brown/10">
                    <SelectItem value="engagement-ring">
                      Custom Engagement Ring
                    </SelectItem>
                    <SelectItem value="wedding-band">
                      Custom Wedding Band
                    </SelectItem>
                    <SelectItem value="other-custom">
                      Other Custom Piece
                    </SelectItem>
                    <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                    <SelectItem value="general">General Question</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
              >
                Message <span className="text-green-dark">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about the piece you're envisioning..."
                className="resize-none rounded-none border-brown/12 bg-beige/40 placeholder:text-warm-gray/50 focus-visible:ring-green/40"
              />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full rounded-none bg-green px-8 py-6 text-[11px] font-medium uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-green-light disabled:opacity-50 sm:w-auto"
            >
              {submitting ? "Sending..." : "Send Inquiry"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
