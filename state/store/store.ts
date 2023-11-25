import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useStore = create<ModalState>((set) => ({
  isModalOpen: false,
  openModal: () => {
    set({ isModalOpen: true });
  },
  closeModal: () => set({ isModalOpen: false }),
}));

export default useStore;
