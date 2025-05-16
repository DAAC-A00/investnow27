'use client'

import React from 'react';
import { InteractiveListItem } from '@/components/ui/InteractiveListItem';
import { 
  FaUserCircle, 
  FaBell, 
  FaCog, 
  FaQuestionCircle, 
  FaShieldAlt, 
  FaFileContract, 
  FaSignOutAlt,
  FaInfoCircle,
  FaCalculator
} from 'react-icons/fa'; 
import { Button } from '@/components/ui/button';
import { useViewStore } from '@/store/viewStore';

interface MorePageProps {
  setActiveTab?: (tab: string) => void;
}

export default function MorePage({ setActiveTab }: MorePageProps) {
  const isLandscape = useViewStore((state) => state.isLandscape);
  // "더보기" 페이지는 일반적으로 전체 너비를 사용하거나, 컨텐츠 영역 최대 너비를 따름
  const pageMaxWidth = isLandscape ? "max-w-2xl" : "max-w-lg"; // 모바일에서는 조금 더 좁게

  const handleItemClick = (action: string) => {
    console.log(`Clicked: ${action}`);
  };

  const navigateToTab = (tabKey: string) => {
    if (setActiveTab) {
      setActiveTab(tabKey);
    }
  };

  return (
    <div className={`w-full ${pageMaxWidth} mx-auto`}> {/* 페이지 패딩은 page.tsx에서 관리 */}
      {/* User Profile Section */}
      <div className="flex items-center p-5 sm:p-6 mb-6 bg-gray-800/70 rounded-xl shadow-lg">
        <FaUserCircle className="w-12 h-12 sm:w-14 sm:h-14 text-sky-400 mr-4 shrink-0" />
        <div className="flex-grow">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-100">사용자 이름</h2>
          <p className="text-xs sm:text-sm text-gray-400 truncate">user.long.email.address.for.testing@example.com</p>
        </div>
        {/* <Button variant="ghost" size="sm" className="ml-auto shrink-0">프로필 수정</Button> */}
      </div>

      {/* Navigation to other main screens (if setActiveTab is provided) */}
      {setActiveTab && (
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 px-1 mb-2">바로가기</h3>
          <InteractiveListItem 
            IconComponent={FaInfoCircle} 
            label="서비스 정보"
            onClick={() => navigateToTab('info')} 
          />
          <InteractiveListItem 
            IconComponent={FaCalculator} 
            label="카운터 데모"
            onClick={() => navigateToTab('counter')} 
          />
        </div>
      )}

      {/* Menu List Section 1 (Original MorePage items) */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-400 px-1 mb-2">일반</h3>
        <InteractiveListItem 
          IconComponent={FaBell} 
          label="공지사항" 
          onClick={() => handleItemClick('Announcements')} 
        />
        <InteractiveListItem 
          IconComponent={FaCog} 
          label="앱 설정" 
          onClick={() => handleItemClick('AppSettings')} 
        />
      </div>

      {/* Menu List Section 2 */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-400 px-1 mb-2">지원</h3>
        <InteractiveListItem 
          IconComponent={FaQuestionCircle} 
          label="고객센터" 
          onClick={() => handleItemClick('Support')} 
        />
        <InteractiveListItem 
          IconComponent={FaShieldAlt} 
          label="보안 및 인증" 
          onClick={() => handleItemClick('Security')} 
        />
        <InteractiveListItem 
          IconComponent={FaFileContract} 
          label="약관 및 정책" 
          onClick={() => handleItemClick('Terms')} 
        />
      </div>

      {/* Sign Out Button */}
      <div className="mt-10">
        <Button 
          variant="secondary" // 토스 스타일 버튼
          size="lg"
          className="w-full"
          onClick={() => handleItemClick('SignOut')}
        >
          <FaSignOutAlt className="mr-2" />
          로그아웃
        </Button>
      </div>
    </div>
  );
}
