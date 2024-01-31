import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose, title }) => {
  const onOpenChange = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <div className="flex items-center gap-x-3">
            <button className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap bg-primary text-sm  text-primary-foreground shadow-retro transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              <Image
                src="/icons/window.svg"
                alt="Window Icon"
                width={20}
                height={20}
                className="object-cover"
              />
            </button>
            <button
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap bg-primary text-sm  text-primary-foreground shadow-retro transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <Image
                src="/images/close.png"
                alt="Close Icon"
                width={20}
                height={20}
                className="object-cover"
              />
            </button>
          </div>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
