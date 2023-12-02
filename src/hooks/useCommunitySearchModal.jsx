import { create } from "zustand";

const useCommunitySearch = create((set) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
    console.log("community opened");
  },
  onClose: () => set({ isOpen: false }),
}));

export default useCommunitySearch;
