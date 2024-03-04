import { create } from "zustand";

const useSettingsModal = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }, console.log(" create model is open")),
  onClose: () => set({ isOpen: false }),
}));

export default useSettingsModal;
