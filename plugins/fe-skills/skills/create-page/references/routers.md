# Theo từng router

## Next.js App Router (`app/`)

- Trang: `app/<đường dẫn>/page.tsx`, default export. Nhóm không ảnh hưởng URL: `(group)/`.
- Next 15+: `params`/`searchParams` là `Promise` - `const { id } = await params`.
- Metadata: `export const metadata` hoặc `export async function generateMetadata`.
- `loading.tsx`, `error.tsx` (client), `not-found.tsx` theo đoạn route.
- Component có hook/state phải `'use client'`; giữ `page.tsx` là server component khi có thể.
- Prefetch dữ liệu server: tạo query client, `prefetchQuery`, bọc `HydrationBoundary` (React Query) với **cùng** query key phía client.
- Redirect: `redirects()` trong `next.config.*` hoặc `redirect()` trong page.

```tsx
// app/(shop)/orders/[id]/page.tsx
import type { Metadata } from 'next'
import { OrderDetailPage } from '@/features/orders/order-detail-page'

export const metadata: Metadata = { title: 'Chi tiết đơn hàng', robots: { index: false } }

export default async function Page ({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return <OrderDetailPage id={id} />
}
```

## Next.js Pages Router (`pages/`)

- `pages/<đường dẫn>.tsx`; dữ liệu qua `getServerSideProps`/`getStaticProps` hoặc hook client; `next/head` cho metadata.

## React Router (v6.4+ / v7)

- Khai báo route trong `createBrowserRouter([...])` hoặc file routes; lazy: `lazy: () => import('./page')`.
- Params: `useParams()`; guard: loader `throw redirect('/login')` hoặc component bọc.
- Search params: `useSearchParams()`.

## TanStack Router

- File-based: `routes/<đường dẫn>.tsx` với `createFileRoute`. Guard trong `beforeLoad` (`throw redirect(...)`), không dùng `useEffect` + navigate.
- Search params có schema qua `validateSearch`.

## Vue Router

- Thêm vào mảng `routes` với `component: () => import(...)`; guard `beforeEnter` hoặc `router.beforeEach`; `meta` cho title/quyền.
