import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brown">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/logo2.svg"
              alt="Zari & Stone Co."
              width={200}
              height={40}
              className="mb-4 h-10 w-auto brightness-0 invert"
            />
            <p className="mb-3 text-sm font-light leading-relaxed text-beige/50">
              Custom engagement rings, wedding bands, and one-of-a-kind pieces
              crafted with intention. Serving clients worldwide.
            </p>
            <p className="font-serif text-xs italic text-green-light/60">
              Natural, Lab, Gemstones & More
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-display text-[10px] font-medium uppercase tracking-[0.2em] text-green-light">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Collections", href: "#collection" },
                { label: "Process", href: "#process" },
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-beige/40 transition-colors hover:text-beige/70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 font-display text-[10px] font-medium uppercase tracking-[0.2em] text-green-light">
              Connect
            </h4>
            <p className="mb-4 text-sm font-light text-beige/40">
              hello@zaristoneco.com
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/zariandstoneco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-beige/10 text-beige/40 transition-all hover:border-green/30 hover:text-green-light"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/zaristoneco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-beige/10 text-beige/40 transition-all hover:border-green/30 hover:text-green-light"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@zaristoneco.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center border border-beige/10 text-beige/40 transition-all hover:border-green/30 hover:text-green-light"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="motif-divider my-10 opacity-40" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[11px] font-light text-beige/30">
            &copy; 2025 Zari & Stone Co. All rights reserved.
          </p>
          <p className="text-[11px] font-light text-beige/20">
            @zariandstoneco
          </p>
        </div>
      </div>
    </footer>
  );
}
