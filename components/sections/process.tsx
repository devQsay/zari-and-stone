const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We start with a one-on-one conversation to understand your vision, style, and story. Share your ideas, inspirations, and budget—we'll guide you from there.",
  },
  {
    number: "02",
    title: "CAD Design",
    description:
      "Our designers create a detailed 3D rendering of your piece. Review every angle, make revisions, and approve the design before we begin crafting.",
  },
  {
    number: "03",
    title: "Crafting",
    description:
      "Your piece is handcrafted with care—stone sourcing, setting, and finishing. We keep you updated at every stage of the process.",
  },
  {
    number: "04",
    title: "Your Forever Piece",
    description:
      "Beautifully packaged and delivered to your door. A piece made just for you, ready to mark a moment you'll carry forever.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-green py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-display text-[10px] font-medium uppercase tracking-[0.35em] text-brown/60 sm:text-[11px]">
            How It Works
          </p>
          <h2 className="mb-4 font-serif text-3xl text-brown sm:text-4xl">
            Your Custom Journey
          </h2>
          <div className="mx-auto h-[2px] w-14 bg-brown/20" />
        </div>

        {/* Steps */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="group text-center">
              {/* Number */}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center border border-brown/15 bg-beige/60 transition-colors duration-300 group-hover:border-brown/30 group-hover:bg-beige">
                <span className="font-display text-sm font-semibold tracking-wider text-brown">
                  {step.number}
                </span>
              </div>

              <h3 className="mb-3 font-serif text-xl text-brown">
                {step.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-brown/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
