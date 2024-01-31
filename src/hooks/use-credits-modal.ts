import { create } from "zustand";

interface useCreditsModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCreditsModal = create<useCreditsModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCreditsModal;
