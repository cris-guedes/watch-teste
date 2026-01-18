
import { create } from "zustand";

interface AppState {
    // Add global state here as needed
    isInitialized: boolean;
    setInitialized: (value: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
    isInitialized: false,
    setInitialized: (value) => set({ isInitialized: value }),
}));
