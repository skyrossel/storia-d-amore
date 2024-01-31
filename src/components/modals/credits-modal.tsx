"use client";

import Image from "next/image";
import Link from "next/link";
import useCreditsModal from "@/hooks/use-credits-modal";
import Modal from "@/components/ui/modal";

const CreditsModal = () => {
  const { isOpen, onClose } = useCreditsModal();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Credits">
      <div className="relative flex gap-x-4 p-4">
        <Image
          src="/images/credits.png"
          alt="Credits"
          width={32}
          height={45}
          className="absolute left-4 top-4 object-cover"
        />
        <h6 className="pl-12 text-2xl tracking-tight">
          This website was created by{" "}
          <Link
            href="https://t.me/acceptmycondolences"
            target="_blank"
            className="inline-flex items-center justify-center whitespace-nowrap underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            @acceptmycondolences
          </Link>
        </h6>
      </div>
    </Modal>
  );
};

export default CreditsModal;
