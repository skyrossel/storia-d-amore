"use client";

import { useEffect, useState } from "react";
import LettersModal from "@/components/modals/letters-modal";
import GalleryModal from "@/components/modals/gallery-modal";
import ContactModal from "@/components/modals/contact-modal";
import CreditsModal from "@/components/modals/credits-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <LettersModal />
      <GalleryModal />
      <ContactModal />
      <CreditsModal />
    </>
  );
};

export default ModalProvider;
