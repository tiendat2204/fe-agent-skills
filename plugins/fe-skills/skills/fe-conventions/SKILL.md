---
name: fe-conventions
description: Quy ước code frontend dùng chung (React/Next.js/Vue + TypeScript) - cách tìm và áp dụng quy ước riêng của dự án, đặt file, đặt tên, state server/client/URL, import alias, ranh giới module, style và comment. Dùng khi viết, sửa hoặc di chuyển file .ts/.tsx/.vue, tạo hook/store/query, hoặc không biết đặt file ở đâu, đặt tên gì.
metadata:
  author: tiendat2204
  version: "1.0"
---

# Quy ước frontend

## Bước 0: tìm quy ước của dự án

1. Nếu repo có `.claude/skills/<tên skill này>/SKILL.md` (bản riêng dự án) thì **làm theo bản đó**; skill này chỉ bổ sung chỗ bản dự án không nói.
2. Đọc `AGENTS.md` / `CLAUDE.md` / `README.md` ở gốc repo.
3. Không có hai thứ trên: khảo sát nhanh (package.json, cấu hình lint, tsconfig, 2-3 file cùng loại) và làm theo cái code đang làm nhiều nhất. Gợi ý người dùng chạy `/fe-skills:bootstrap-fe-skills` để sinh bộ skill riêng.
4. Quy tắc dưới đây là mặc định tốt; khi repo làm khác thì theo repo.

## Mặc định

1. Style do formatter/linter quyết định. Chạy `lint:fix` trước khi sửa tay; không tranh luận style lint đã ép.
2. Không `any`; dùng `unknown` rồi thu hẹp.
3. Import khác vùng dùng alias (`@/`); relative chỉ trong cùng thư mục tính năng.
4. File kebab-case; component PascalCase; hàm/biến camelCase; hằng số module SCREAMING_SNAKE; hook `use<Tên>`.
5. Named export; default export chỉ nơi framework bắt buộc (route, config, story).
6. Logic thuần (lọc, map trạng thái, tính toán, nhãn) tách ra file riêng không import UI, có unit test.
7. Không `console.log` trong code nguồn.
8. Comment giải thích **vì sao**, không kể lại code.

## State

| Dữ liệu | Dùng |
|---|---|
| Từ server | thư viện server state của dự án (React Query, SWR, RTK Query...) qua hook riêng, key tập trung một chỗ |
| Trang, lọc, tab, từ khóa | URL (search params) |
| Dùng chung nhiều cây, không phải dữ liệu server | store toàn cục của dự án (Zustand, Redux, Pinia...) |
| Trong một cây | state cục bộ / props / context cục bộ |
| Giá trị form | thư viện form |

Không copy dữ liệu server vào store toàn cục.

Chi tiết và ví dụ: [references/defaults.md](references/defaults.md).
