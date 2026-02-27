export default function About() {
  return (
    <section id="about" className="bg-beige py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-5">
          {/* Left image placeholder */}
          <div className="relative hidden lg:col-span-1 lg:block">
            <div className="aspect-[3/4] w-full bg-cream">
              <div className="flex h-full items-center justify-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-warm-gray">
                  Image
                </p>
              </div>
            </div>
          </div>

          {/* Center content */}
          <div className="text-center lg:col-span-3">
            <p className="mb-3 font-display text-[10px] font-medium uppercase tracking-[0.35em] text-green-dark sm:text-[11px]">
              Our Story
            </p>
            <h2 className="mb-6 font-serif text-3xl text-brown sm:text-4xl">
              Crafted for Your Love Story
            </h2>
            <div className="mx-auto mb-8 accent-line" />

            <div className="mx-auto max-w-xl space-y-5 text-[15px] font-light leading-relaxed text-brown-light">
              <p>
                Zari & Stone Co. crafts personalized jewelry with a focus on
                engagement rings and wedding bands. We offer one-on-one
                consultations, CAD designs, and fully custom pieces tailored to
                each love story.
              </p>
              <p>
                Serving clients worldwide&mdash;especially across the USA and
                Canada&mdash;we combine craftsmanship with a deeply personal
                touch. Our goal is to create timeless, meaningful jewelry that
                celebrates life&apos;s most important moments.
              </p>
              <p>
                Every piece we create reflects a unique story of love and
                commitment&mdash;designed with precision, delivered with heart.
              </p>
            </div>

            {/* Stats */}
            <div className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-brown/8 pt-8">
              {[
                { number: "100%", label: "Custom" },
                { number: "USA &\u00A0CA", label: "& Worldwide" },
                { number: "1-on-1", label: "Consultations" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-xl text-brown sm:text-2xl">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-[10px] font-normal uppercase tracking-wider text-warm-gray">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image placeholder */}
          <div className="relative hidden lg:col-span-1 lg:block">
            <div className="aspect-[3/4] w-full bg-cream">
              <div className="flex h-full items-center justify-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-warm-gray">
                  Image
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
