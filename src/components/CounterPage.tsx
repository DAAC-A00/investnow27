'use client'

import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

export default function CounterPage() {
  const [count, setCount] = useState(0)

  return (
    // 카드 스타일 수정: 배경, 둥근 모서리, 그림자
    <div className="bg-slate-800/50 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 text-center text-slate-100 tracking-tight">
        {/* 제목 텍스트 색상 및 폰트 두께 변경 */}
        Advanced Counter
      </h1>
      <div className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 sm:mb-10 text-center text-sky-300 tabular-nums">
        {/* 카운터 숫자 색상 변경 */}
        {count}
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-3 sm:gap-4 md:gap-6">
        <Button
          variant="outline"
          className="
            border-green-500/70 text-green-400 
            hover:bg-green-500/90 hover:text-white 
            transition-all duration-150 ease-in-out 
            transform hover:scale-105 shadow-lg rounded-lg 
            flex items-center justify-center 
            w-full h-12 px-4 text-base 
            sm:w-32 sm:h-12 sm:px-5 sm:text-base 
            md:w-36 md:h-14 md:px-6 md:text-lg
            font-medium
          "
          onClick={() => setCount(count + 1)}
          aria-label="Increment counter"
        >
          <FaPlus className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 sm:mr-2 md:mr-2.5" />
          Plus
        </Button>
        <Button
          variant="outline"
          className="
            border-red-500/70 text-red-400 
            hover:bg-red-500/90 hover:text-white 
            transition-all duration-150 ease-in-out 
            transform hover:scale-105 shadow-lg rounded-lg 
            flex items-center justify-center 
            w-full h-12 px-4 text-base 
            sm:w-32 sm:h-12 sm:px-5 sm:text-base 
            md:w-36 md:h-14 md:px-6 md:text-lg
            font-medium
          "
          onClick={() => setCount(count - 1)}
          aria-label="Decrement counter"
        >
          <FaMinus className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 sm:mr-2 md:mr-2.5" />
          Minus
        </Button>
      </div>
    </div>
  )
}
