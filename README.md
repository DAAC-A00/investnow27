This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## **1. 핵심 기술 스택 및 환경**

- **주요 기술:** Next.js & TypeScript
- **라우터:** App Router 사용 (Pages Router 사용 안 함)
- 구조 : App Router + 기능 기반 코로케이션 구조 (App 중심의 하이브리드), src/ Dir 사용
- ESLint 사용
- **날짜/시간 처리 라이브러리:** Day.js

## **2. UI 및 스타일링**

- **UI 컴포넌트 라이브러리:** Shadcn UI
- **스타일링 방식:** Tailwind 사용 (`@apply` 디렉티브는 사용하지 않음. 대신 유틸리티 클래스를 직접 조합하거나, `tailwindcss/nesting` 플러그인과 `@layer components`를 사용하여 의미론적인 클래스를 정의)
- **아이콘 라이브러리:** React Icons

## **3. 상태 관리**

- 아주 단순한 UI상태만 useState 사용.
- 이외는 모두 Zustand 사용.

## **4. 반응형 디자인 가이드라인**

본 프로젝트는 다양한 디바이스 환경(모바일, 태블릿, PC)에서 최적의 사용자 경험을 제공하기 위해 반응형 웹 디자인을 적용합니다.

- **접근 방식:** 모바일 우선(Mobile-First) 접근 방식을 채택합니다.
- **분기점(Breakpoints):** Tailwind CSS의 기본 분기점 (`sm`, `md`, `lg`, `xl`, `2xl`)을 기준으로 반응형 레이아웃을 구현합니다.
- **레이아웃:**
    - 콘텐츠는 유동형 그리드(Fluid Grids)를 사용하여 화면 크기에 따라 유연하게 조절됩니다.
    - 네비게이션, 카드, 테이블, 폼 등의 주요 컴포넌트는 각 화면 크기별 사용성을 고려하여 적절히 변형됩니다.
        - **모바일:** 간소화된 메뉴 (예: 햄버거 메뉴, 하단 탭), 1열 콘텐츠 레이아웃
        - **데스크톱:** 확장된 메뉴, 다중 열 콘텐츠 레이아웃
- **이미지 및 미디어:** 화면 크기에 맞춰 비율을 유지하며 조절됩니다 (`max-width: 100%`).
- **타이포그래피 및 간격:** 가독성을 위해 화면 크기에 따라 글꼴 크기 및 여백이 적절히 조절됩니다.
- **터치 친화성:** 모바일 환경에서의 터치 인터랙션을 고려하여 버튼 크기 및 터치 영역을 충분히 확보합니다.
- **구현:**
    - 모든 반응형 스타일은 Tailwind CSS의 반응형 접두사(예: `md:`, `lg:`)를 사용하여 구현합니다.
    - Shadcn UI 컴포넌트를 적극 활용하며, 반응형 요구사항에 맞춰 커스터마이징합니다.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel
