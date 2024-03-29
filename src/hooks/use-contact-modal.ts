import { create } from "zustand";

interface useContactModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useContactModal = create<useContactModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useContactModal;
