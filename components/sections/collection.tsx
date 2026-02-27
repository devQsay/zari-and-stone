import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const pieces = [
  {
    name: "The Eternal Solitaire",
    price: "From $2,800",
    category: "Engagement",
    description: "Classic round brilliant on a hand-forged band",
  },
  {
    name: "The Heirloom Pavé",
    price: "From $3,400",
    category: "Engagement",
    description: "Oval center stone with micro-pavé detailing",
  },
  {
    name: "The Horizon Band",
    price: "From $1,200",
    category: "Wedding Band",
    description: "Brushed gold with a hidden gemstone interior",
  },
  {
    name: "The Legacy Ring",
    price: "From $2,100",
    category: "Men's",
    description: "Hammered texture with a bold, understated profile",
  },
];

export default function Collection() {
  return (
    <section id="collection" className="relative bg-beige py-24 sm:py-32">
      <div className="geo-bg absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-display text-[10px] font-medium uppercase tracking-[0.35em] text-green-dark sm:text-[11px]">
            The Collection
          </p>
          <h2 className="mb-4 font-serif text-3xl text-brown sm:text-4xl">
            Signature Pieces
          </h2>
          <div className="mx-auto accent-line" />
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pieces.map((piece) => (
            <Card
              key={piece.name}
              className="group overflow-hidden rounded-none border-brown/8 bg-white shadow-none transition-all duration-400 hover:shadow-lg hover:shadow-brown/5"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-cream">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      className="mb-3 opacity-20 transition-opacity duration-400 group-hover:opacity-35"
                    >
                      <path
                        d="M20 4 L32 20 L20 36 L8 20 Z"
                        stroke="#483434"
                        strokeWidth="0.7"
                      />
                      <circle cx="20" cy="20" r="4" stroke="#483434" strokeWidth="0.5" />
                    </svg>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-warm-gray">
                      Image coming soon
                    </p>
                  </div>
                  <span className="absolute left-3 top-3 bg-beige/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-brown">
                    {piece.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="px-5 pt-5 pb-2">
                <h3 className="font-serif text-lg text-brown">{piece.name}</h3>
                <p className="mt-1 text-xs font-light text-warm-gray">
                  {piece.description}
                </p>
              </CardContent>
              <CardFooter className="px-5 pb-5">
                <p className="text-sm font-medium tracking-wide text-green-dark">
                  {piece.price}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-none border-brown/20 px-10 py-6 text-[11px] font-medium uppercase tracking-[0.2em] text-brown transition-all duration-300 hover:border-brown/40 hover:bg-brown/5"
          >
            <a href="#contact">View Collection</a>
          </Button>
          <p className="mt-4 text-xs font-light text-warm-gray">
            Shop launching soon &mdash; inquire for early access
          </p>
        </div>
      </div>
    </section>
  );
}
