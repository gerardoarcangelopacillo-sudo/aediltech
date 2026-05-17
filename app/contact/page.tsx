import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Contact"
        title="Start a conversation."
        description="Tell us about your project, application or partnership interest. Our team will respond promptly."
      />

      <SectionContainer>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-muted">
              General enquiries
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-2xl font-medium tracking-tight transition-colors hover:text-muted md:text-3xl"
            >
              {siteConfig.email}
            </a>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
              For technical specifications, partnership proposals or press enquiries,
              include relevant project details in your message.
            </p>
          </div>

          <form className="space-y-8" action={`mailto:${siteConfig.email}`} method="post">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors focus:border-foreground"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors focus:border-foreground"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors focus:border-foreground"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none border-b border-border bg-transparent py-3 text-sm outline-none transition-colors focus:border-foreground"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-4 border border-foreground px-8 py-4 text-sm font-medium tracking-wide transition-colors hover:bg-foreground hover:text-background"
            >
              Send message
              <span className="h-px w-8 bg-accent transition-all group-hover:w-12" />
            </button>
          </form>
        </div>
      </SectionContainer>
    </>
  );
}
