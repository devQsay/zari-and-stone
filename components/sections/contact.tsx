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
  const [clientName, setClientName] = useState("");

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
            className="space-y-0 border border-brown/8 bg-white"
          >
            <input type="hidden" name="botcheck" className="hidden" />
            <input
              type="hidden"
              name="subject"
              value={clientName ? `New Custom Inquiry from ${clientName} — Zari & Stone Co.` : "New Custom Inquiry — Zari & Stone Co."}
            />

            {/* ── Contact Information ── */}
            <div className="space-y-5 p-8 sm:p-10">
              <p className="font-display text-[10px] font-medium uppercase tracking-[0.25em] text-green-dark">
                Contact Information
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
                  >
                    Full Name <span className="text-green-dark">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
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

              <div className="sm:w-1/2 sm:pr-2.5">
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
                  >
                    Phone Number{" "}
                    <span className="text-warm-gray">(optional)</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="rounded-none border-brown/12 bg-beige/40 placeholder:text-warm-gray/50 focus-visible:ring-green/40"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-8 border-t border-brown/6 sm:mx-10" />

            {/* ── Project Details ── */}
            <div className="space-y-5 p-8 sm:p-10">
              <p className="font-display text-[10px] font-medium uppercase tracking-[0.25em] text-green-dark">
                Project Details
              </p>

              <div className="grid gap-5 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label
                    htmlFor="project_type"
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
                  >
                    Project Type <span className="text-green-dark">*</span>
                  </Label>
                  <Select name="project_type" required>
                    <SelectTrigger className="rounded-none border-brown/12 bg-beige/40 text-brown focus:ring-green/40">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-brown/10">
                      <SelectItem value="engagement-ring">
                        Engagement Ring
                      </SelectItem>
                      <SelectItem value="wedding-band">Wedding Band</SelectItem>
                      <SelectItem value="mens">Men&apos;s</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="timeline"
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
                  >
                    Timeline
                  </Label>
                  <Select name="timeline">
                    <SelectTrigger className="rounded-none border-brown/12 bg-beige/40 text-brown focus:ring-green/40">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-brown/10">
                      <SelectItem value="1-2-months">1–2 months</SelectItem>
                      <SelectItem value="3-4-months">3–4 months</SelectItem>
                      <SelectItem value="5-6-months">5–6 months</SelectItem>
                      <SelectItem value="6-plus-months">6+ months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="budget"
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
                  >
                    Budget
                  </Label>
                  <Select name="budget">
                    <SelectTrigger className="rounded-none border-brown/12 bg-beige/40 text-brown focus:ring-green/40">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-brown/10">
                      <SelectItem value="under-3k">Under $3,000</SelectItem>
                      <SelectItem value="3k-5k">$3,000 – $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 – $10,000</SelectItem>
                      <SelectItem value="10k-20k">$10,000 – $20,000</SelectItem>
                      <SelectItem value="20k-plus">$20,000+</SelectItem>
                      <SelectItem value="unsure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-8 border-t border-brown/6 sm:mx-10" />

            {/* ── Design Description ── */}
            <div className="space-y-5 p-8 sm:p-10">
              <p className="font-display text-[10px] font-medium uppercase tracking-[0.25em] text-green-dark">
                Design Description
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="center_stone"
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
                  >
                    Center Stone
                  </Label>
                  <Input
                    id="center_stone"
                    name="center_stone"
                    placeholder="e.g. Diamond, Moissanite, Sapphire"
                    className="rounded-none border-brown/12 bg-beige/40 placeholder:text-warm-gray/50 focus-visible:ring-green/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="carat_size"
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
                  >
                    Carat Size
                  </Label>
                  <Input
                    id="carat_size"
                    name="carat_size"
                    placeholder="e.g. 1.5 ct, 2 ct"
                    className="rounded-none border-brown/12 bg-beige/40 placeholder:text-warm-gray/50 focus-visible:ring-green/40"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label
                    htmlFor="shape"
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
                  >
                    Shape
                  </Label>
                  <Input
                    id="shape"
                    name="shape"
                    placeholder="e.g. Round, Oval, Emerald"
                    className="rounded-none border-brown/12 bg-beige/40 placeholder:text-warm-gray/50 focus-visible:ring-green/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="metal_type"
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
                  >
                    Metal Type
                  </Label>
                  <Input
                    id="metal_type"
                    name="metal_type"
                    placeholder="e.g. 14k Gold, Platinum, Rose Gold"
                    className="rounded-none border-brown/12 bg-beige/40 placeholder:text-warm-gray/50 focus-visible:ring-green/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="band_style"
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
                  >
                    Band Style
                  </Label>
                  <Input
                    id="band_style"
                    name="band_style"
                    placeholder="e.g. Solitaire, Halo, Pavé"
                    className="rounded-none border-brown/12 bg-beige/40 placeholder:text-warm-gray/50 focus-visible:ring-green/40"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-8 border-t border-brown/6 sm:mx-10" />

            {/* ── Inspiration & Notes ── */}
            <div className="space-y-5 p-8 sm:p-10">
              <p className="font-display text-[10px] font-medium uppercase tracking-[0.25em] text-green-dark">
                Inspiration & Additional Details
              </p>

              <div className="space-y-2">
                <Label
                  htmlFor="inspiration_link"
                  className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
                >
                  Inspiration Link
                </Label>
                <Input
                  id="inspiration_link"
                  name="inspiration_link"
                  type="url"
                  placeholder="Pinterest board, Instagram post, or photo link"
                  className="rounded-none border-brown/12 bg-beige/40 placeholder:text-warm-gray/50 focus-visible:ring-green/40"
                />
                <p className="text-[11px] font-light text-brown-light">
                  Share a link to photos, a Pinterest board, or any visual
                  references for your dream piece.
                </p>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="additional_notes"
                  className="text-[11px] font-medium uppercase tracking-[0.12em] text-brown"
                >
                  Additional Notes
                </Label>
                <Textarea
                  id="additional_notes"
                  name="additional_notes"
                  rows={4}
                  placeholder="Anything else you'd like us to know..."
                  className="resize-none rounded-none border-brown/12 bg-beige/40 placeholder:text-warm-gray/50 focus-visible:ring-green/40"
                />
              </div>
            </div>

            {/* Process note */}
            <div className="mx-8 mb-0 border border-green/20 bg-green/5 p-5 sm:mx-10">
              <div className="flex gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-0.5 shrink-0"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    stroke="#AAB396"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-[12px] font-light leading-relaxed text-brown/70">
                  Each piece is designed and handcrafted specifically for you.
                  Our custom process typically takes{" "}
                  <span className="font-medium text-brown">4–8 weeks</span> and
                  includes stone sourcing, CAD design, and revisions.
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="p-8 sm:p-10">
              <Button
                type="submit"
                disabled={submitting}
                className="w-full rounded-none bg-green px-8 py-6 text-[11px] font-medium uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-green-light disabled:opacity-50 sm:w-auto"
              >
                {submitting ? "Sending..." : "Submit Inquiry"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
