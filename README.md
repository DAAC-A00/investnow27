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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel
