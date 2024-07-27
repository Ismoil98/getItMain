import { create } from "zustand";

export const useCardStore = create((set) => ({
    card4: false,
    card2: true,
    onChangeCards4: () => {
      set((state)=> ({
        ...state,
        card4: true,
        card2: false,
      }))  
    },
    onChangeCards2: () => {
        set((state)=> ({
          ...state,
          card2: true,
          card4: false,
        }))  
      },
}))