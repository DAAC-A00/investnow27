'use client'

import { useState } from 'react'
import CounterPage from '@/components/CounterPage'
import ServiceInfoPage from '@/components/ServiceInfoPage'
import FutureFeaturePage from '@/components/FutureFeaturePage'
import BottomNavigation from '@/components/BottomNavigation'

export default function Page() {
  const [activeTab, setActiveTab] = useState('counter') // Default to Counter tab

  const renderContent = () => {
    switch (activeTab) {
      case 'info':
        return <ServiceInfoPage />
      case 'counter':
        return <CounterPage />
      case 'future':
        return <FutureFeaturePage />
      default:
        return <CounterPage />
    }
  }

  return (
    // 배경색을 단색으로 변경하고, 컨텐츠를 중앙 상단에 가깝게 배치 (justify-center -> justify-start pt-10 또는 pt-16)
    <main className="flex min-h-screen flex-col items-center justify-start pt-12 sm:pt-16 md:pt-20 bg-slate-950 p-4 sm:p-6 md:p-8 pb-20 sm:pb-24 md:pb-28">
      
      {renderContent()}

      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />

    </main>
  )
}
