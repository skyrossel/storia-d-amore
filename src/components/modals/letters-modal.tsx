"use client";

import Image from "next/image";
import useLettersModal from "@/hooks/use-letters-modal";
import Modal from "@/components/ui/modal";

const LettersModal = () => {
  const { isOpen, onClose } = useLettersModal();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Letters">
      <div className="flex h-64 flex-col gap-y-6 overflow-y-scroll p-4 md:h-auto md:overflow-y-auto">
        <span className="text-end">27.02.23</span>
        <div className="flex flex-col gap-y-3">
          <h3 className="text-xl uppercase tracking-tight md:text-[1.75rem]">
            Jo: Mi Amor
            <br />
            From: Alibek
          </h3>
          <p className="text-lg">
            Heart filled with longing for the body
            <br />
            All this time it seemed that you were somewhere nearby
            <br />
            The carelessness that is reflected
            <br />
            In your eyes is what I need
            <br />
            Falling into the pit of boredom, we will laugh it
            <br />
            But in the end there is no one but us...
          </p>
        </div>
        <span className="inline-flex justify-end">
          <Image
            src="/images/signature.png"
            alt="Signature"
            width={100}
            height={56.25}
            className="object-cover"
          />
        </span>
      </div>
    </Modal>
  );
};

export default LettersModal;
