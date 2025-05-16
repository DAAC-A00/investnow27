'use client'

import { useEffect } from 'react'
import { useViewStore } from '@/store/viewStore'
import type { ViewState } from '@/store/viewStore'

export default function ViewModeDetector() {
  const setScreenSize = useViewStore((state: ViewState) => state.setScreenSize)
  const setHasMounted = useViewStore((state: ViewState) => state.setHasMounted)
  const hasMounted = useViewStore((state: ViewState) => state.hasMounted)

  useEffect(() => {
    // This effect runs only on the client after mount
    if (!hasMounted) {
      setHasMounted(); // Signal that client has mounted
    }

    const handleResize = () => {
      setScreenSize(window.innerWidth, window.innerHeight);
    };

    // Set initial size once mounted
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setScreenSize, setHasMounted, hasMounted]); // Add hasMounted to dependencies

  return null;
}
