const testimonials = [
  {
    quote:
      "From our very first consultation to the moment I opened the box, Zari & Stone made the entire experience feel so personal. My ring is everything I dreamed of and more.",
    name: "Priya & Arjun",
    detail: "Custom Engagement Ring — Toronto",
  },
  {
    quote:
      "They truly listened to what we wanted. The CAD process let us see the ring before it was made, and the final piece was absolutely perfect. We couldn't be happier.",
    name: "Sarah & Michael",
    detail: "Matching Wedding Bands — New York",
  },
  {
    quote:
      "I wanted something unique that honored my family's heritage. The team brought my vision to life with incredible attention to detail. A piece I'll treasure forever.",
    name: "Anika R.",
    detail: "Custom Heirloom Ring — Vancouver",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-brown py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-display text-[10px] font-medium uppercase tracking-[0.35em] text-green-light sm:text-[11px]">
            Love Stories
          </p>
          <h2 className="mb-4 font-serif text-3xl text-beige sm:text-4xl">
            In Their Words
          </h2>
          <div className="mx-auto h-[2px] w-14 bg-green/40" />
        </div>

        {/* Quotes */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative border border-beige/8 p-8 sm:p-10"
            >
              {/* Quote mark */}
              <span className="absolute -top-5 left-8 font-serif text-6xl leading-none text-green/20">
                &ldquo;
              </span>

              <blockquote className="relative z-10 mb-8 font-serif text-[15px] leading-relaxed text-beige/80 sm:text-base">
                {t.quote}
              </blockquote>

              <div>
                <p className="text-sm font-medium text-beige">{t.name}</p>
                <p className="mt-0.5 text-xs font-light text-beige/50">
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
