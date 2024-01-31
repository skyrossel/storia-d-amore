import { create } from "zustand";

interface useLettersModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLettersModal = create<useLettersModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLettersModal;
