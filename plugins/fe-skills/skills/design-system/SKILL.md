---
name: design-system
description: Cách dùng design system của dự án frontend - tìm token màu/chữ/khoảng cách (Tailwind config hoặc CSS @theme, CSS variables), dùng component UI có sẵn (shadcn, MUI, Ant Design...) trước khi viết markup, thêm variant thay vì đè style, và các điều cấm phổ biến (màu hardcode, inline style, class động, thẻ form thô). Dùng khi viết hoặc sửa JSX/className/style, chọn màu, chọn component, thêm variant, hoặc khi lint báo lỗi về màu, class hay style.
metadata:
  author: tiendat2204
  version: "1.0"
---

# Design system

## Bước 0: tìm quy ước của dự án

1. Nếu repo có `.claude/skills/<tên skill này>/SKILL.md` (bản riêng dự án) thì **làm theo bản đó**; skill này chỉ bổ sung chỗ bản dự án không nói.
2. Đọc `AGENTS.md` / `CLAUDE.md` / `README.md` ở gốc repo.
3. Không có hai thứ trên: khảo sát nhanh (package.json, cấu hình lint, tsconfig, 2-3 file cùng loại) và làm theo cái code đang làm nhiều nhất. Gợi ý người dùng chạy `/fe-skills:bootstrap-fe-skills` để sinh bộ skill riêng.
4. Quy tắc dưới đây là mặc định tốt; khi repo làm khác thì theo repo.

## Tìm token và component

| Tìm | Ở đâu |
|---|---|
| Token Tailwind v3 | `tailwind.config.*` (`theme.extend`) |
| Token Tailwind v4 | CSS có `@theme` (thường `globals.css`), giá trị ở `:root` / `.dark` |
| shadcn | `components.json`, `components/ui/*` |
| MUI / Ant Design | file `theme` / `ConfigProvider` |
| Rule ép buộc | cấu hình lint (`shadcn/*`, `tailwindcss/*`, `no-restricted-syntax`, stylelint) |

## Mặc định cấm

1. Màu palette thô hoặc hex (`text-red-500`, `#fff`) - dùng token ngữ nghĩa (`text-destructive`, `bg-background`).
2. Inline style cho màu/khoảng cách - dùng class; giá trị động dùng CSS variable.
3. Ghép class động (`` `bg-${tone}` ``) - Tailwind không sinh CSS; dùng map tĩnh hoặc `cva`.
4. Đè màu/chữ/padding lên component UI ở chỗ dùng - thêm `variant` trong component.
5. Thẻ form thô (`<button>`, `<input>`, `<select>`) khi đã có component.
6. Thêm thư viện UI/icon mới khi đã có thứ tương đương.
7. Sửa code vendored hoặc copy từ dự án khác khi repo ghi là không sửa.

## Thứ tự chọn component

1. Primitive UI có sẵn.
2. Khối dùng chung của dự án (layout, empty/error/loading state, data table).
3. Chưa có mới tạo (skill `create-component`).

Kiểm một vi phạm nghi ngờ có bị lint bắt không: [references/lint-probe.md](references/lint-probe.md).
