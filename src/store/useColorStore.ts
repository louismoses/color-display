import { create } from "zustand";

interface ColorState {
    color: Color | null;
    setColor: (color: Color) => void;
}

type Color = {
    id: number | null;
    name: string;
    hex_code: string;
    color_code: string;
};

const useColorStore = create<ColorState>((set) => ({
    color: { id: null, name: "", hex_code: "", color_code: "" },
    setColor: (color) => set({ color }),
}));

export default useColorStore;
