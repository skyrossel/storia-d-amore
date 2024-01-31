"use client";

import Image from "next/image";
import Link from "next/link";
import useContactModal from "@/hooks/use-contact-modal";
import Modal from "@/components/ui/modal";

const ContactModal = () => {
  const { isOpen, onClose } = useContactModal();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Contact">
      <div className="flex flex-col gap-y-3">
        <Image
          src="/images/contact-1.png"
          alt="Contact 1"
          width={504}
          height={224.97}
          className="object-contain text-center"
        />
        <div className="flex items-center justify-between gap-x-3">
          <h3 className="text-xl uppercase tracking-tight md:text-[1.75rem]">
            Let&apos;s chat
          </h3>
          <div className="flex items-center">
            <div className="flex items-center gap-x-1">
              <Link
                href="https://t.me/acceptmycondolences"
                target="_blank"
                className="inline-flex h-9 items-center justify-center whitespace-nowrap px-4 py-2 text-sm underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <Image
                  src="/icons/letter.svg"
                  alt="Letter"
                  width={16}
                  height={16}
                  className="mr-1 object-cover"
                />
                @acceptmycondolences
              </Link>
              <Link
                href="https://maps.app.goo.gl/8FjRkCSdJQLdT6Jc8"
                target="_blank"
                className="inline-flex h-9 items-center justify-center whitespace-nowrap px-4 py-2 text-sm underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <Image
                  src="/icons/location.svg"
                  alt="Location"
                  width={16}
                  height={23.38}
                  className="mr-1 object-cover"
                />
                Yassi 40
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
