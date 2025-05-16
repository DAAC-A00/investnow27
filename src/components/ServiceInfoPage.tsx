'use client'

import React from 'react';
import { useViewStore } from '@/store/viewStore';
import { FaNewspaper, FaChartLine, FaLightbulb, FaUsers, FaVideo, FaShieldAlt, FaQuestionCircle } from 'react-icons/fa';

// Material Design 3 스타일 카드
interface InfoCardProps {
  title: string;
  content: string;
  icon?: React.ElementType;
  variant?: 'surface' | 'surface-variant' | 'primary-container';
  widthClass?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  content,
  icon: IconComponent,
  variant = 'surface',
  widthClass = 'min-w-[calc(100vw-3rem)] xs:min-w-[280px] sm:min-w-[300px] md:min-w-[320px]'
}) => {
  let bgColor = 'bg-neutral-800/70'; // surface-variant 느낌
  let titleColor = 'text-neutral-100';
  let contentColor = 'text-neutral-300';
  let iconColor = 'text-sky-400';

  if (variant === 'primary-container') {
    bgColor = 'bg-sky-700/30';
    titleColor = 'text-sky-100';
    contentColor = 'text-sky-200/90';
    iconColor = 'text-sky-300';
  }

  return (
    <div 
      className={`${widthClass} min-h-[160px] sm:min-h-[180px] p-4 sm:p-5 rounded-xl shadow-lg ${bgColor} flex flex-col group hover:shadow-sky-600/10 transition-all duration-200 ease-in-out hover:scale-[1.01] active:scale-[0.99]`}
    >
      <div className="flex-grow">
        {IconComponent && (
          <div className="mb-2.5">
            <IconComponent className={`w-6 h-6 ${iconColor} opacity-90 group-hover:opacity-100 transition-opacity`} />
          </div>
        )}
        <h3 className={`text-base sm:text-lg font-medium ${titleColor} mb-1`}>{title}</h3>
        <p className={`text-xs sm:text-sm ${contentColor} opacity-90 leading-normal line-clamp-3 sm:line-clamp-4`}>
          {content}
        </p>
      </div>
    </div>
  );
};

interface CardSectionProps {
  sectionTitle: string;
  cards: InfoCardProps[];
}

const CardSection: React.FC<CardSectionProps> = ({ sectionTitle, cards }) => {
  return (
    <section className="mb-8 sm:mb-10">
      <h2 className="text-lg sm:text-xl font-medium text-neutral-200 mb-3 sm:mb-4 px-1 sm:px-0">{sectionTitle}</h2>
      <div className="flex overflow-x-auto pb-3 space-x-3 sm:space-x-4 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-800/50 px-1 sm:px-0">
        {cards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default function ServiceInfoPage() {
  const isLandscape = useViewStore((state) => state.isLandscape);
  const pageMaxWidth = isLandscape ? "max-w-5xl" : "max-w-4xl";

  const newsCards: InfoCardProps[] = [
    { title: '새로운 기능 출시!', content: '모바일 환경에 최적화된 새로운 UI를 경험해보세요.', icon: FaNewspaper, variant: 'primary-container' },
    { title: '시장 동향 분석', content: '최신 시장 동향과 전문가 분석을 확인하세요.', icon: FaChartLine },
    { title: '투자 가이드', content: '성공적인 투자를 위한 다양한 가이드를 제공합니다.', icon: FaLightbulb },
  ];

  const tipsCards: InfoCardProps[] = [
    { title: '효율적인 자산 관리', content: '분산 투자를 통해 위험을 최소화하세요.', icon: FaUsers },
    { title: '절세 팁과 전략', content: '다양한 절세 상품과 전략을 활용하여 세금 부담을 줄이세요.', icon: FaLightbulb, variant: 'primary-container' }, // 예시로 다른 variant 사용
    { title: '장기 투자 전략', content: '장기적인 관점에서 꾸준히 투자하는 것이 중요합니다.', icon: FaChartLine },
  ];

  return (
    <div className={`w-full ${pageMaxWidth} mx-auto`}>
      <div className="pt-0">
        <h1 className="text-2xl sm:text-3xl font-medium text-neutral-100 mb-6 sm:mb-8 md:mb-10 text-center sm:text-left">
          서비스 주요 정보
        </h1>
        
        <CardSection sectionTitle="주요 뉴스 및 공지" cards={newsCards} />
        <CardSection sectionTitle="성공 투자 가이드" cards={tipsCards} />

        <div className="mt-10 sm:mt-12 p-5 sm:p-6 bg-neutral-800/70 rounded-xl shadow-lg">
          <h2 className="text-lg sm:text-xl font-medium text-neutral-100 mb-2 sm:mb-3">도움이 필요하신가요?</h2>
          <p className="text-neutral-300 leading-normal mb-4 sm:mb-5 text-sm sm:text-base">
            서비스 이용 중 궁금한 점이나 문제가 발생하면 언제든지 문의해주세요.
          </p>
          {/* <Button variant="filled" size="default">고객 지원 문의</Button> */}
        </div>
      </div>
    </div>
  );
}
