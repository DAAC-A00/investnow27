'use client'

import React from 'react'; // Explicitly import React
import { FaInfoCircle, FaCalculator, FaTools } from "react-icons/fa";
import { MenuListItem } from "@/components/ui/MenuListItem";

interface SideMenuProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string; 
}

const menuItems = [
  { name: "Service Info", icon: FaInfoCircle, tabKey: "info" },
  { name: "Counter Demo", icon: FaCalculator, tabKey: "counter" },
  { name: "Future Features", icon: FaTools, tabKey: "future" },
];

export default function SideMenu({
  activeTab,
  onTabChange,
  className,
}: SideMenuProps) {
  return (
    <aside className={`w-60 h-full bg-gray-900 p-4 space-y-2 ${className || ''}`}>
      <div className="text-gray-100 text-xl font-semibold p-2 mb-4">Menu</div>
      {menuItems.map((item) => (
        <MenuListItem
          key={item.tabKey}
          isActive={activeTab === item.tabKey}
          onClick={() => onTabChange(item.tabKey)}
          IconComponent={item.icon}
          label={item.name}
        />
      ))}
    </aside>
  );
}
