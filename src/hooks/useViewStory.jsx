import { create } from "zustand";

const useViewStory = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }, console.log(" create model is open")),
  onClose: () => set({ isOpen: false }),
}));

export default useViewStory;
