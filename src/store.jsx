import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// For simple state management without persistence
// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))

// export default useStore

// For state management with persistence (using localStorage)
const useStore = create(persist((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
})), {
  name: 'bears',
  storage: createJSONStorage(() => localStorage),
})

export default useStore