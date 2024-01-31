"use client";

import Image from "next/image";
import useLettersModal from "@/hooks/use-letters-modal";
import useGalleryModal from "@/hooks/use-gallery-modal";
import useContactModal from "@/hooks/use-contact-modal";
import PlayButton from "@/components/play-button";

export default function Home() {
  const letters = useLettersModal();
  const gallery = useGalleryModal();
  const contact = useContactModal();

  return (
    <section className="px-4 py-6 md:p-8">
      <div className="flex w-fit flex-col items-center gap-y-3">
        <button
          onClick={() => letters.onOpen()}
          className="group inline-flex w-fit flex-col items-center justify-center whitespace-nowrap py-2 pr-4 text-[1.75rem] uppercase tracking-tight text-primary-foreground transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <Image
            src="/images/letters.png"
            alt="Letters"
            width={50}
            height={43.75}
            className="mb-2 object-cover transition-transform group-hover:scale-125"
          />
          Letters
        </button>
        <button
          onClick={() => gallery.onOpen()}
          className="group inline-flex w-fit flex-col items-center justify-center whitespace-nowrap py-2 pr-4 text-[1.75rem] uppercase tracking-tight text-primary-foreground transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <Image
            src="/images/gallery.png"
            alt="Gallery"
            width={50}
            height={43.75}
            className="mb-2 object-cover transition-transform group-hover:scale-125"
          />
          Gallery
        </button>
        <button
          onClick={() => contact.onOpen()}
          className="group inline-flex w-fit flex-col items-center justify-center whitespace-nowrap py-2 pr-4 text-[1.75rem] uppercase tracking-tight text-primary-foreground transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <Image
            src="/images/contact.png"
            alt="Contact"
            width={50}
            height={43.75}
            className="mb-2 object-cover transition-transform group-hover:scale-125"
          />
          Contact
        </button>
      </div>
      <PlayButton />
    </section>
  );
}
