'use client'

import React from 'react';
import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { useViewStore } from '@/store/viewStore';

export default function CounterPage() {
  const [count, setCount] = useState(0)
  const isLandscape = useViewStore((state) => state.isLandscape);

  const cardMaxWidth = isLandscape ? "max-w-md sm:max-w-lg" : "max-w-xs sm:max-w-sm"; // 모바일에서 카드 너비 줄임
  const titleSize = isLandscape ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl";
  const numberSize = isLandscape ? "text-6xl sm:text-7xl" : "text-5xl sm:text-6xl";
  const buttonSize = isLandscape ? "lg" : "default";

  return (
    // 카드 스타일: 배경, 패딩, 라운딩, 그림자, 여백 개선
    <div className={`bg-gray-800/70 p-6 sm:p-8 rounded-2xl shadow-xl w-full ${cardMaxWidth} flex flex-col items-center`}>
      <h1 className={`${titleSize} font-semibold mb-8 sm:mb-10 text-center text-gray-100 tracking-tight`}>
        카운터 데모
      </h1>
      <div className={`${numberSize} font-bold mb-10 sm:mb-12 text-center text-sky-400 tabular-nums select-none`}>
        {count}
      </div>
      <div className={`flex flex-col sm:flex-row gap-4 w-full ${isLandscape ? 'sm:w-auto' : 'sm:w-full'} justify-center`}>
        <Button
          variant="default" // 주 액션 버튼으로 변경
          size={buttonSize}
          className={`w-full ${isLandscape ? 'sm:w-40' : 'sm:w-auto'}`}
          onClick={() => setCount(count + 1)}
          aria-label="Increment counter"
        >
          <FaPlus className={`mr-2 ${isLandscape ? 'h-5 w-5' : 'h-4 w-4'}`} />
          증가
        </Button>
        <Button
          variant="secondary" // 보조 액션 버튼
          size={buttonSize}
          className={`w-full ${isLandscape ? 'sm:w-40' : 'sm:w-auto'}`}
          onClick={() => setCount(count - 1)}
          aria-label="Decrement counter"
        >
          <FaMinus className={`mr-2 ${isLandscape ? 'h-5 w-5' : 'h-4 w-4'}`} />
          감소
        </Button>
      </div>
      <p className="text-xs text-gray-500 mt-10 text-center">
        이것은 간단한 카운터 기능의 예시입니다.
      </p>
    </div>
  )
}
