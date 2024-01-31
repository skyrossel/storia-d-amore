"use client";

import Image from "next/image";
import useMediaQuery from "@/hooks/use-media-query";
import useLettersModal from "@/hooks/use-letters-modal";
import useGalleryModal from "@/hooks/use-gallery-modal";
import useContactModal from "@/hooks/use-contact-modal";
import useCreditsModal from "@/hooks/use-credits-modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Menu = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const letters = useLettersModal();
  const gallery = useGalleryModal();
  const contact = useContactModal();
  const credits = useCreditsModal();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="bg-pr imary inline-flex h-9 items-center justify-center whitespace-nowrap px-4 py-2 text-2xl uppercase tracking-tight text-primary-foreground shadow-retro transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          Menu
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={isMobile ? 16 : 24}>
        <div className="absolute left-0 top-0 flex h-full w-[3.0625rem] items-end justify-center bg-secondary px-2 py-5 text-secondary-foreground">
          <h6 className="rotate-[270deg] text-xl tracking-tight">Menu</h6>
        </div>
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => letters.onOpen()}>
            <Image
              src="/images/letters.png"
              alt="Letters"
              width={32}
              height={28}
              className="mr-2 object-cover"
            />
            Letters
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => gallery.onOpen()}>
            <Image
              src="/images/gallery.png"
              alt="Gallery"
              width={32}
              height={28}
              className="mr-2 object-cover"
            />
            Gallery
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => contact.onOpen()}>
            <Image
              src="/images/contact.png"
              alt="Contact"
              width={32}
              height={28}
              className="mr-2 object-cover"
            />
            Contact
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => credits.onOpen()}>
          Credits
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
