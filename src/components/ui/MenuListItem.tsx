'use client'

import React from 'react'

interface MenuListItemProps {
  isActive: boolean
  onClick: () => void
  IconComponent: React.ElementType
  label: string
  layout?: 'vertical' | 'horizontal'
  ariaLabel?: string
}

export const MenuListItem: React.FC<MenuListItemProps> = ({
  isActive,
  onClick,
  IconComponent,
  label,
  layout = 'vertical',
  ariaLabel,
}) => {
  const baseClasses = "transition-colors duration-150 ease-in-out focus:outline-none group";
  // 포커스 링 오프셋은 배경색에 따라 조정 필요
  const focusVisibleClassesVertical = "focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900";
  const focusVisibleClassesHorizontal = "focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900";

  if (layout === 'horizontal') {
    // 하단 바 (가로 스크롤) 스타일
    return (
      <button
        type="button"
        aria-label={ariaLabel || label}
        onClick={onClick}
        className={`
          flex flex-col items-center justify-center h-full px-2 pt-2.5 pb-1.5 rounded-none /* 패딩 미세 조정 */
          min-w-[64px] xs:min-w-[72px] sm:min-w-[80px] /* 최소 너비 조정 */
          text-xs /* 모바일 하단 메뉴 텍스트 크기 고정 */
          ${baseClasses} 
          ${focusVisibleClassesHorizontal}
          ${isActive
            ? "text-sky-300" // 활성 시 텍스트/아이콘 색상 강조
            : "text-gray-500 hover:text-gray-300"
          }
        `}
      >
        <IconComponent 
          className={`w-5 h-5 mb-0.5 shrink-0 /* 아이콘 크기 및 하단 마진 조정 */
            ${isActive ? 'text-sky-400' : 'text-gray-500 group-hover:text-gray-300'}
          `}
        />
        <span className="truncate w-full text-center">{label}</span>
        <div className={`w-1/2 h-[3px] mt-1 rounded-full ${isActive ? 'bg-sky-400' : 'bg-transparent'}`}></div> {/* 활성 표시선 스타일 변경 */}
      </button>
    );
  }

  // 사이드바 (세로) 스타일
  return (
    <button
      type="button"
      aria-label={ariaLabel || label}
      onClick={onClick}
      className={`
        flex items-center w-full p-2.5 rounded-lg /* 패딩 조정 */
        text-sm /* 사이드바 텍스트 크기 */
        ${baseClasses}
        ${focusVisibleClassesVertical}
        ${isActive
          ? "bg-sky-600/20 text-sky-200 font-medium" // 활성: 미묘한 배경 + 밝은 텍스트
          : "text-gray-400 hover:bg-gray-700/60 hover:text-gray-200"
        }
      `}
    >
      <IconComponent 
        className={`w-5 h-5 mr-3 shrink-0
          ${isActive ? 'text-sky-300' : 'text-gray-500 group-hover:text-gray-300'}
        `}
      />
      <span className="truncate">{label}</span>
    </button>
  );
}
