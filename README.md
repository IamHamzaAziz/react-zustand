# React State Management with Zustand

A guide for using Zustand in React applications. Demonstrating both basic and persistent state management using Zustand with React.

## Install Zustand:
   ```bash
   npm install zustand
   # or
   yarn add zustand
   # or
   pnpm add zustand
   ```

## Basic Usage

### 1. Create a Store

Create a store file (`store.js` or `store.jsx`):

```javascript
import { create } from 'zustand'

const useStore = create((set) => ({
  // State
  bears: 0,
  
  // Actions
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))

export default useStore
```

### 2. Use the Store in Components

```jsx
import useStore from './store'

function BearCounter() {
  const bears = useStore(state => state.bears)
  const increasePopulation = useStore((state) => state.increasePopulation)
  const removeAllBears = useStore((state) => state.removeAllBears)
  const updateBears = useStore((state) => state.updateBears)

  return (
    <div>
      Total Bears: {bears}
      <br />
      <button onClick={increasePopulation}>Add a Bear</button>
      <button onClick={removeAllBears}>Remove All Bears</button>
      <button onClick={() => updateBears(20)}>Update Bears</button>
    </div>
  )
}
```

## Persisting State

Zustand makes it easy to persist state to localStorage:

```javascript
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useStore = create(
  persist(
    (set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
      updateBears: (newBears) => set({ bears: newBears }),
    }),
    {
      name: 'bears-storage', // unique name for the storage key
      storage: createJSONStorage(() => localStorage), // or sessionStorage
    }
  )
)

export default useStore
```
