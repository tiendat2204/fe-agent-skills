# Thăm dò lint

Dùng khi cần biết chắc rule nào đang ép (để viết quy tắc "lint chặn" hay chỉ "quy ước").

1. Tạo file tạm trong thư mục bị lint (ví dụ `src/__probe.tsx`):

```tsx
export function Probe ({ ok }: { ok: boolean }) {
  return (
    <div>
      <p className='text-red-500'>màu thô</p>
      <p className='bg-[#ffffff]'>hex</p>
      <p style={{ color: 'red' }}>inline</p>
      <p className={`text-${ok ? 'primary' : 'muted'}`}>class động</p>
      <p className='foo-bar'>class lạ</p>
      <button>thẻ thô</button>
    </div>
  )
}
```

2. Chạy linter trên đúng file đó (ví dụ `pnpm exec eslint src/__probe.tsx`).
3. Ghi lại rule nào bắn, rule nào không.
4. **Xóa file tạm.**

Không đặt file tạm trong thư mục bị ignore - sẽ chỉ nhận cảnh báo "file ignored".
