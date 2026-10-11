---
name: create-form
description: Tạo hoặc sửa form React theo chuẩn react-hook-form + zod (zodResolver) hoặc thư viện form của dự án - schema riêng có test, defaultValues đầy đủ, field có label và lỗi gắn aria, lỗi submit chung, chống bấm đôi, gửi qua mutation, reset sau khi lưu. Dùng khi người dùng yêu cầu tạo form, thêm field, validate input, đăng ký, đăng nhập, thanh toán, địa chỉ, hoặc sửa cách hiển thị lỗi form.
metadata:
  author: tiendat2204
  version: "1.0"
---

# Tạo form

## Bước 0: tìm quy ước của dự án

1. Nếu repo có `.claude/skills/<tên skill này>/SKILL.md` (bản riêng dự án) thì **làm theo bản đó** và dùng template của nó; skill này chỉ bổ sung chỗ bản dự án không nói.
2. Đọc `AGENTS.md` / `CLAUDE.md` / `README.md` ở gốc repo.
3. Không có hai thứ trên: mở 2-3 file cùng loại trong repo và làm giống chúng. Gợi ý người dùng chạy `/fe-skills:bootstrap-fe-skills`.
4. Template dưới đây là điểm khởi đầu: sửa import, component UI, style code cho khớp repo trước khi dùng.

Mặc định khi dự án chưa chọn: **react-hook-form + zod + `@hookform/resolvers/zod`**. Nếu repo có cả kiểu cũ (validate `rules` inline, state tay) và kiểu schema, dùng kiểu schema và hỏi người dùng nếu chưa rõ.

## Bước

Placeholder: `__Name__` PascalCase, `__camelName__` camelCase, `__name__` kebab-case, `___NAME___` SCREAMING_SNAKE.

1. **Schema** - [templates/schema.ts](templates/schema.ts): chuỗi `.trim()`, `.max()` khớp backend, thông báo theo ngôn ngữ giao diện; export `z.input` / `z.output`.
2. **Test schema**: giá trị hợp lệ, từng lỗi, trim.
3. **Component** - [templates/form.tsx](templates/form.tsx):
   - `useForm<Input, unknown, Values>({ resolver: zodResolver(schema), defaultValues })`, `defaultValues` đầy đủ (chuỗi rỗng, không `undefined`).
   - `<form noValidate>`; field dùng wrapper field của dự án nếu có (thường ghép label + input + lỗi + aria).
   - Lỗi field dưới field; lỗi submit chung trên hàng nút; lỗi server theo field qua `setError`.
   - Đang gửi: disable, đổi nhãn nút; tạo bản ghi thì chống bấm đôi bằng `useRef`.
   - Thành công: `reset` để hết dirty, báo bằng toast hoặc điều hướng.
4. **Kiểm**: lint, typecheck, test; luồng nhiều bước thêm e2e.

Hiển thị lỗi, a11y, field tùy biến: [references/form-patterns.md](references/form-patterns.md).
