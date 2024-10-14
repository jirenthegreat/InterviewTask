import { create } from 'zustand'

interface CounterState {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
    setCount: (newCount: number) => void
}

const useCounterStore = create<CounterState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
    setCount: (newCount: number) => set({ count: newCount }),
}))

export default useCounterStore
