'use client'

import { Button } from "@/components/ui/button"
import { FaInfoCircle, FaCalculator, FaTools } from "react-icons/fa"

interface BottomNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const navItems = [
  { name: "Info", icon: FaInfoCircle, tabKey: "info" },
  { name: "Counter", icon: FaCalculator, tabKey: "counter" },
  { name: "Future", icon: FaTools, tabKey: "future" },
]

export default function BottomNavigation({
  activeTab,
  onTabChange,
}: BottomNavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-lg shadow-t-md">
      {/* Removed border-t, using shadow-t-md instead */}
      <div className="flex items-center h-16">
        {navItems.map((item) => {
          const isActive = activeTab === item.tabKey
          return (
            <Button
              key={item.tabKey}
              variant="ghost"
              className={`
                flex flex-col items-center justify-center h-full p-2 rounded-none 
                flex-1 text-xs sm:text-sm 
                transition-all duration-150 ease-in-out
                ${isActive
                  ? "text-sky-300 font-semibold" // Active: Brighter text, bold
                  : "text-slate-400 hover:text-slate-200" // Inactive: Softer text
                }
              `}
              onClick={() => onTabChange(item.tabKey)}
            >
              <item.icon 
                className={`w-5 h-5 sm:w-6 sm:h-6 mb-1 
                  ${isActive ? 'text-sky-300' : 'text-slate-400 group-hover:text-slate-200'}
                `}
              />
              {item.name}
            </Button>
          )
        })}
      </div>
    </nav>
  )
}
