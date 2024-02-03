import { create } from "zustand";

const useDeletIdeaModal = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }, console.log(" create model is open")),
  onClose: () => set({ isOpen: false }),
}));

export default useDeletIdeaModal;
