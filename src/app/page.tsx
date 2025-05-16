'use client'

import React from 'react';
import { useState, useEffect } from 'react'
import CounterPage from '@/components/CounterPage'
import ServiceInfoPage from '@/components/ServiceInfoPage'
import MorePage from '@/components/MorePage';
import AppMenu from '@/components/AppMenu'
import { useViewStore } from '@/store/viewStore'

export default function Page() {
  const [activeTab, setActiveTab] = useState('info')
  const isLandscape = useViewStore((state) => state.isLandscape)
  const hasMounted = useViewStore((state) => state.hasMounted)

  useEffect(() => {
    if (hasMounted) {
      // setActiveTab(isLandscape ? 'info' : 'counter');
    }
  }, [isLandscape, hasMounted])

  const renderContent = () => {
    switch (activeTab) {
      case 'info':
        return <ServiceInfoPage />
      case 'counter':
        return <CounterPage />
      case 'more':
        return <MorePage setActiveTab={setActiveTab} /> 
      default:
        return <ServiceInfoPage />
    }
  }

  // Material Design 3 스타일 AppMenu 가정 (Navigation Rail: w-20, Navigation Bar: h-20)
  // 기본 페이지 패딩: p-4 (16px), sm:p-6 (24px), md:p-8 (32px)
  const navRailWidth = 80; // px
  const navBarHeight = 80; // px

  let mainPaddingBottom = `pb-[${navBarHeight + 16}px] sm:pb-[${navBarHeight + 24}px] md:pb-[${navBarHeight + 32}px]`; // 기본값을 portrait padding으로 설정
  let mainPaddingLeft = ""; // Navigation Rail은 왼쪽에 위치한다고 가정
  let mainJustify = "justify-start pt-6 sm:pt-8 md:pt-10"; // 상단 패딩 조정 (Material 앱 바가 없으므로)
  let showAppMenu = false;

  if (hasMounted) {
    mainPaddingBottom = !isLandscape ? `pb-[${navBarHeight + 16}px] sm:pb-[${navBarHeight + 24}px] md:pb-[${navBarHeight + 32}px]` : "pb-6 sm:pb-8 md:pb-10";
    mainPaddingLeft = isLandscape ? `pl-[${navRailWidth}px]` : ""; // Landscape 시 왼쪽 패딩
    mainJustify = !isLandscape ? "justify-start pt-6 sm:pt-8 md:pt-10" : "justify-center pt-6 sm:pt-8 md:pt-10";
    showAppMenu = true; 
  }

  return (
    // Material Design 3 Surface 색상 (다크 테마) 및 기본 폰트 스타일
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased flex">
      {showAppMenu && (
        <AppMenu 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
          // isLandscape prop을 전달하여 AppMenu가 스스로 레이아웃을 결정하도록 할 수 있음
          // 또는 AppMenu 내부에서 useViewStore를 계속 사용
        />
      )}
      <main 
        className={`flex-1 flex flex-col items-center ${mainJustify} p-4 sm:p-6 md:p-8 
          ${mainPaddingBottom} 
          ${mainPaddingLeft} // 오른쪽 패딩 대신 왼쪽 패딩 사용
        `}
      >
        <div className="w-full max-w-7xl"> 
          {renderContent()}
        </div>
      </main>
    </div>
  )
}
