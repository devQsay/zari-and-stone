"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

/* ─── Hero image (shown full-width above the grid) ─── */
const heroImage = {
  src: "/images/gallery-9.JPG",
  alt: "Close-up of engagement ring on hand at the beach — editorial couple shoot",
};

/* ─── Grid images with editorial layout metadata ─── */
const gridImages: {
  src: string;
  alt: string;
  colSpan: 1 | 2;
  aspect: string;
}[] = [
  // Varied editorial flow: interleave wide and standard cards
  {
    src: "/images/gallery-3.JPG",
    alt: "South Asian bride holding custom rings alongside a clutch",
    colSpan: 2,
    aspect: "aspect-[16/10]",
  },
  {
    src: "/images/gallery-10.jpeg",
    alt: "Close-up of custom engagement ring — portrait shoot",
    colSpan: 1,
    aspect: "aspect-[1/1]",
  },
  {
    src: "/images/gallery-6.JPG",
    alt: "Editorial couple shoot — close-up on ring at a beach picnic",
    colSpan: 1,
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/gallery-1.JPG",
    alt: "Couple holding hands during wedding ceremony — bride's ring visible",
    colSpan: 2,
    aspect: "aspect-[16/10]",
  },
  {
    src: "/images/gallery-11.jpeg",
    alt: "Engagement ring detail — different angle from portrait shoot",
    colSpan: 1,
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/gallery-2.JPG",
    alt: "Wedding ceremony — couple holding hands, different angle",
    colSpan: 1,
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/gallery-15.jpg",
    alt: "Editorial ring detail during golden-hour couple session",
    colSpan: 1,
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/gallery-12.JPG",
    alt: "Editorial couple shoot — close-up on engagement ring",
    colSpan: 2,
    aspect: "aspect-[16/10]",
  },
  {
    src: "/images/gallery-8.jpeg",
    alt: "Wife showing ring with couple softly blurred in background",
    colSpan: 1,
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/gallery-4.JPG",
    alt: "Bride and groom holding hands — wedding ring detail",
    colSpan: 1,
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/gallery-16.JPG",
    alt: "Romantic outdoor portrait with ring-forward framing",
    colSpan: 2,
    aspect: "aspect-[16/10]",
  },
  {
    src: "/images/gallery-7.JPG",
    alt: "Beach picnic editorial — couple with engagement ring detail",
    colSpan: 1,
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/gallery-13.JPG",
    alt: "Editorial couple — ring detail from different angle",
    colSpan: 1,
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/gallery-5.JPG",
    alt: "Wedding couple hands intertwined — ring close-up",
    colSpan: 1,
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/gallery-14.JPG",
    alt: "Editorial shoot — ring close-up detail",
    colSpan: 1,
    aspect: "aspect-[4/5]",
  },
];

// All images in lightbox order: hero first, then grid
const allImages = [heroImage, ...gridImages];

/* ─── Scroll fade-in hook ─── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* ─── Gallery image cell ─── */
function GalleryCell({
  image,
  index,
  onClick,
  className = "",
  wide = false,
}: {
  image: { src: string; alt: string };
  index: number;
  onClick: () => void;
  className?: string;
  wide?: boolean;
}) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group cursor-pointer overflow-hidden rounded-lg ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease-out ${index * 80}ms, transform 0.6s ease-out ${index * 80}ms`,
      }}
      onClick={onClick}
    >
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        <Image
          src={image.src}
          alt={image.alt}
          width={wide ? 1200 : 600}
          height={wide ? 750 : 800}
          sizes={
            wide
              ? "(max-width: 768px) 100vw, 66vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          loading="lazy"
        />
        {/* Warm cohesion overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[#483434]/[0.03] mix-blend-multiply" />
        {/* Hover shadow */}
        <div className="pointer-events-none absolute inset-0 rounded-lg shadow-[inset_0_0_0_1px_rgba(72,52,52,0.06)] transition-shadow duration-500 group-hover:shadow-[inset_0_0_0_1px_rgba(72,52,52,0.1),0_8px_30px_-8px_rgba(72,52,52,0.15)]" />
      </div>
    </div>
  );
}

/* ─── Lightbox ─── */
function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#483434]/95 animate-in fade-in duration-300"
        aria-hidden
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center text-beige/70 transition-colors hover:text-beige"
        aria-label="Close lightbox"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-beige/50 transition-colors hover:text-beige sm:left-6"
        aria-label="Previous image"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-beige/50 transition-colors hover:text-beige sm:right-6"
        aria-label="Next image"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative z-10 mx-16 max-h-[85vh] max-w-[85vw] animate-in fade-in zoom-in-95 duration-300 sm:mx-20"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={1400}
          height={1800}
          sizes="85vw"
          className="max-h-[85vh] w-auto rounded-sm object-contain"
          priority
        />
      </div>

      {/* Counter */}
      <p className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 font-display text-[10px] tracking-[0.2em] text-beige/40">
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
}

/* ─── Gallery Page ─── */
export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i - 1 + allImages.length) % allImages.length : null
      ),
    []
  );
  const nextImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i + 1) % allImages.length : null
      ),
    []
  );

  return (
    <>
      <Navbar />

      <main className="bg-beige pt-20">
        {/* ─── Page Header ─── */}
        <header className="px-6 pb-12 pt-16 text-center sm:pb-16 sm:pt-20">
          <p className="mb-3 font-display text-[10px] font-medium uppercase tracking-[0.35em] text-green-dark sm:text-[11px]">
            Gallery
          </p>
          <h1 className="mb-4 font-serif text-4xl text-brown sm:text-5xl lg:text-6xl">
            Love Stories
          </h1>
          <div className="mx-auto mb-6 accent-line" />
          <p className="mx-auto max-w-md text-base font-light leading-relaxed text-brown-light sm:text-lg">
            Real moments. Real love. Real rings.
          </p>
        </header>

        {/* ─── Hero Image ─── */}
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <GalleryCell
            image={heroImage}
            index={0}
            onClick={() => openLightbox(0)}
            className="aspect-[16/9] w-full sm:aspect-[2.2/1]"
            wide
          />
        </div>

        {/* ─── Editorial Masonry Grid ─── */}
        <div className="mx-auto max-w-6xl px-6 pt-6 pb-24 lg:px-12">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gridImages.map((image, i) => {
              const globalIndex = i + 1; // offset by 1 for hero in lightbox
              const isWide = image.colSpan === 2;
              const colSpanClass = isWide
                ? "sm:col-span-2 lg:col-span-2"
                : "";

              return (
                <GalleryCell
                  key={image.src}
                  image={image}
                  index={i + 1}
                  onClick={() => openLightbox(globalIndex)}
                  className={`${colSpanClass} ${image.aspect}`}
                  wide={isWide}
                />
              );
            })}
          </div>
        </div>

        {/* ─── CTA Section ─── */}
        <section className="relative overflow-hidden bg-brown py-20 sm:py-28">
          {/* Pattern background (matches hero) */}
          <div
            className="absolute inset-0 bg-no-repeat opacity-[0.07]"
            style={{
              backgroundImage: "url('/Pattern.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Warm vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(72,52,52,0.6)_100%)]" />

          <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 font-serif text-3xl text-beige sm:text-4xl">
              Ready to Start Your Story?
            </h2>
            <p className="mx-auto mb-10 max-w-md text-sm font-light leading-relaxed text-beige/60">
              Every love story deserves a ring as unique as yours. Let&apos;s
              create something timeless together.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none bg-green px-10 py-6 text-[11px] font-medium uppercase tracking-[0.25em] text-black transition-all duration-300 hover:bg-green-light"
            >
              <a href="/#contact">Begin Your Custom Journey</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* ─── Lightbox ─── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
