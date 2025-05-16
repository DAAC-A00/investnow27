'use client'

import React from 'react';
import { FaInfoCircle, FaCalculator, FaEllipsisH } from "react-icons/fa"; 
import { useViewStore } from "@/store/viewStore";

// Material Design 3 스타일의 메뉴 아이템 컴포넌트
interface MaterialMenuItemProps {
  isActive: boolean;
  onClick: () => void;
  IconComponent: React.ElementType;
  label: string;
  layout: 'rail' | 'bar'; // Navigation Rail (가로) 또는 Navigation Bar (세로)
}

const MaterialMenuItem: React.FC<MaterialMenuItemProps> = ({ isActive, onClick, IconComponent, label, layout }) => {
  if (layout === 'rail') {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`flex flex-col items-center justify-center w-full h-[72px] rounded-full p-1 group transition-colors duration-150 ease-in-out 
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900
                    ${isActive ? 'bg-sky-700/30 text-sky-300' : 'text-neutral-400 hover:bg-neutral-700/50 hover:text-neutral-200'}`}
      >
        <div className={`p-3 rounded-full transition-colors ${isActive ? 'bg-sky-500/20' : 'group-hover:bg-neutral-700/80'}`}>
          <IconComponent className={`w-6 h-6 ${isActive ? 'text-sky-300' : 'text-neutral-400 group-hover:text-neutral-200'}`} />
        </div>
        <span className={`text-xs mt-1 truncate w-full text-center ${isActive ? 'text-sky-300' : 'text-neutral-400 group-hover:text-neutral-200'}`}>{label}</span>
      </button>
    );
  }
  // layout === 'bar' (하단 네비게이션 바)
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center justify-center flex-1 h-full p-1 group transition-colors duration-150 ease-in-out 
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-900`}
    >
      <div className={`relative w-[64px] h-8 flex items-center justify-center mb-0.5`}>
        <div className={`absolute inset-0 rounded-full transition-opacity ${isActive ? 'bg-sky-600/30 opacity-100' : 'opacity-0 group-hover:bg-neutral-700/50 group-hover:opacity-100'}`}></div>
        <IconComponent className={`w-6 h-6 relative z-10 ${isActive ? 'text-sky-300' : 'text-neutral-400 group-hover:text-neutral-200'}`} />
      </div>
      <span className={`text-xs truncate w-full text-center ${isActive ? 'text-sky-300 font-medium' : 'text-neutral-400 group-hover:text-neutral-200'}`}>{label}</span>
    </button>
  );
};

interface AppMenuProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItemsDefinition = [
  { name: "정보", icon: FaInfoCircle, tabKey: "info" },
  { name: "카운터", icon: FaCalculator, tabKey: "counter" },
  { name: "더보기", icon: FaEllipsisH, tabKey: "more" }, 
];

export default function AppMenu({
  activeTab,
  onTabChange,
}: AppMenuProps) {
  const isLandscape = useViewStore((state) => state.isLandscape);
  const hasMounted = useViewStore((state) => state.hasMounted);

  if (!hasMounted) { 
    return null; 
  }

  if (isLandscape) {
    // 가로 모드: 왼쪽 Navigation Rail
    return (
      <nav className="fixed top-0 left-0 z-20 h-screen w-20 bg-neutral-900 p-2 flex flex-col items-center space-y-2 shadow-lg">
        {/* 로고나 FAB 영역 (선택 사항) */}
        {/* <div className="h-16 w-16 flex items-center justify-center mb-4">
          <FaConnectdevelop size={32} className="text-sky-400" /> 
        </div> */} 
        {menuItemsDefinition.map((item) => (
          <MaterialMenuItem
            key={item.tabKey}
            isActive={activeTab === item.tabKey}
            onClick={() => onTabChange(item.tabKey)}
            IconComponent={item.icon}
            label={item.name}
            layout="rail"
          />
        ))}
      </nav>
    );
  } else {
    // 세로 모드: 하단 Navigation Bar
    return (
      <nav className="fixed bottom-0 left-0 right-0 bg-neutral-900 shadow-t-lg h-20 z-20 flex justify-around items-stretch">
        {menuItemsDefinition.map((item) => (
          <MaterialMenuItem
            key={item.tabKey}
            isActive={activeTab === item.tabKey}
            onClick={() => onTabChange(item.tabKey)}
            IconComponent={item.icon}
            label={item.name}
            layout="bar"
          />
        ))}
      </nav>
    );
  }
}
