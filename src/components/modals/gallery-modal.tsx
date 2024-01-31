"use client";

import Image from "next/image";
import useGalleryModal from "@/hooks/use-gallery-modal";
import { gallery } from "@/utils/data";
import Modal from "@/components/ui/modal";

const GalleryModal = () => {
  const { isOpen, onClose } = useGalleryModal();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Gallery">
      <div className="grid h-64 md:h-96 grid-cols-1 gap-3 overflow-y-scroll md:grid-cols-2">
        {gallery.map((photo, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default GalleryModal;
