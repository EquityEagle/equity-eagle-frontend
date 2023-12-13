import { create } from "zustand";

const useDeleteModelMetrix = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useDeleteModelMetrix;
