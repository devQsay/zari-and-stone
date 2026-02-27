import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-brown pt-16">
      {/* Pattern background */}
      <div
        className="absolute inset-0 bg-no-repeat opacity-[0.07]"
        style={{
          backgroundImage: "url('/Pattern.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Warm vignette over pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(72,52,52,0.6)_100%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Accent line */}
        <div className="mx-auto mb-8 animate-fade-in-up accent-line" />

        {/* Tagline */}
        <p className="animate-fade-in-up delay-100 mb-6 font-display text-[10px] font-medium uppercase tracking-[0.4em] text-green-light sm:text-xs">
          Natural, Lab, Gemstones & More
        </p>

        {/* Headline */}
        <h1 className="animate-fade-in-up delay-200 mb-6 font-serif text-4xl leading-snug text-beige sm:text-5xl lg:text-6xl">
          Where Every Stone
          <br />
          Tells Your Story
        </h1>

        {/* Subtext */}
        <p className="animate-fade-in-up delay-300 mx-auto mb-10 max-w-lg text-base font-light leading-relaxed text-beige/70 sm:text-lg">
          Custom engagement rings and wedding bands, designed around your love
          story. One-on-one consultations, CAD design, and handcrafted
          precision.
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up delay-400">
          <Button
            asChild
            size="lg"
            className="rounded-none bg-green px-10 py-6 text-[11px] font-medium uppercase tracking-[0.25em] text-black transition-all duration-300 hover:bg-green-light"
          >
            <a href="#contact">Begin Your Custom Journey</a>
          </Button>
        </div>

        {/* Decorative element */}
        <div className="animate-fade-in-up delay-500 mx-auto mt-20">
          <svg
            width="100"
            height="32"
            viewBox="0 0 100 32"
            fill="none"
            className="mx-auto"
          >
            <line
              x1="0"
              y1="16"
              x2="36"
              y2="16"
              stroke="#AAB396"
              strokeWidth="0.5"
              opacity="0.4"
            />
            <path
              d="M50 4 L60 16 L50 28 L40 16 Z"
              stroke="#AAB396"
              strokeWidth="0.6"
              opacity="0.5"
            />
            <circle cx="50" cy="16" r="2" fill="#AAB396" opacity="0.3" />
            <line
              x1="64"
              y1="16"
              x2="100"
              y2="16"
              stroke="#AAB396"
              strokeWidth="0.5"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
