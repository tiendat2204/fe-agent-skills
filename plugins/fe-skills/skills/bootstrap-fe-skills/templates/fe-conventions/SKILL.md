---
name: fe-conventions
description: Quy ước frontend của <DỰ ÁN> (<framework>, <ngôn ngữ>, <state server>, <state client>) - cấu trúc thư mục, đặt tên file/component/hook/biến, state, import alias và ranh giới module, style code. Dùng khi viết, sửa hoặc di chuyển file trong src/ hoặc tests/, khi tạo hook, store, query, khi không biết đặt file ở đâu hoặc đặt tên gì.
metadata:
  project: <dự án>
  version: "1.0"
---

# Quy ước frontend <DỰ ÁN>

Nguồn sự thật: <file lint>, <tsconfig>, <tài liệu>. Lint thắng skill khi mâu thuẫn.

## Quy tắc bắt buộc (kiểm được)

1. Style: <...>. Kiểm: `<lệnh lint>`.
2. <any / kiểu>.
3. Import: <alias>, <khi nào relative>.
4. Tên file: <...>; component <...>; hằng số <...>.
5. Export: <named/default>.
6. <directive client/server nếu có>.
7. Logic thuần tách ra <...> và có test ở <...>.
8. <console.log, ...>.

## Đặt file ở đâu

| Loại | Vị trí |
|---|---|
| Route | |
| Component tính năng | |
| Gọi API | |
| Hook dữ liệu | |
| Logic thuần | |
| UI primitive | |

## State

- Server: <...>
- URL: <...>
- Toàn cục: <...> - chỉ khi <...>
- Form: xem `create-form`.

Chi tiết: [references/structure.md](references/structure.md), [references/state-and-data.md](references/state-and-data.md), [references/code-style.md](references/code-style.md).
