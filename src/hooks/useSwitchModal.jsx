import { create } from "zustand";

const useSwitchModal = create((set) => ({
  isSwitching: false,
  onSwitch: () =>
    set({ isSwitching: true }, console.log(" create model is open")),
  onSwitchSuccess: () => set({ isSwitching: false }),
}));

export default useSwitchModal;
