import { create, StateCreator } from 'zustand'

export interface ViewState {
  screenWidth: number
  screenHeight: number
  isLandscape: boolean
  hasMounted: boolean // New state to track client-side mount
  setScreenSize: (width: number, height: number) => void
  setHasMounted: () => void // Action to set hasMounted
}

const storeCreator: StateCreator<ViewState> = (set) => ({
  screenWidth: 0, // Default for SSR, actual value will be set on client mount
  screenHeight: 0, // Default for SSR
  isLandscape: false, // Consistent default for SSR (e.g., portrait view)
  hasMounted: false, // Initially false
  setScreenSize: (width: number, height: number) =>
    set((state) => ({
      // Only update if hasMounted is true to ensure client-side logic only
      // This check can be an additional safety but primary control is via ViewModeDetector
      ...(state.hasMounted && {
        screenWidth: width,
        screenHeight: height,
        isLandscape: width > height,
      })
    })),
  setHasMounted: () => set({ hasMounted: true }),
})

export const useViewStore = create<ViewState>(storeCreator)
