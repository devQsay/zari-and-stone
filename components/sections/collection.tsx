import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
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
              <CardContent className="px-5 pt-5 pb-2">
                <span className="mb-2 inline-block text-[10px] font-medium uppercase tracking-[0.15em] text-green-dark">
                  {piece.category}
                </span>
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
