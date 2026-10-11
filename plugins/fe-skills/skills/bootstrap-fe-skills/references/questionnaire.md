# Bảng câu hỏi

Tự trả lời từ repo trước. Chỉ hỏi người dùng câu không trả lời được hoặc có mâu thuẫn.

## Stack
1. Framework và ngôn ngữ (React, Vue, Next.js...; TypeScript hay JavaScript)?
2. Styling (Tailwind, CSS Modules, styled-components, SCSS...)?
3. Thư viện UI (shadcn, MUI, Ant Design, tự xây)?

## Quy ước code
4. Cấu trúc thư mục: theo loại hay theo tính năng?
5. Đặt tên: file, component, hook, biến, hằng số, type/interface?
6. State server (React Query, SWR...)? State toàn cục (Redux, Zustand, Context...)? Khi nào được đưa vào store?
7. Import: alias, thứ tự, cấm import chéo giữa module nào?

## Design system
8. Token màu/spacing/font ở đâu? Có danh sách component dùng chung?
9. Điều cấm (hardcode màu, inline style, thêm thư viện, `any`...)?

## Quy trình
10. Test: công cụ nào? Bắt buộc test cho component mới? Có Storybook?
11. Form: thư viện, cách validate, cách hiển thị lỗi?
12. Routing: công cụ nào? Thêm trang mới cần những bước nào?
13. Review PR: lỗi hay nhắc nhất (a11y, performance, đặt tên, thiếu test, console.log...)?

## Khác
14. Skill commit chung cho team hay chỉ dùng cá nhân?

## Mâu thuẫn hay gặp (nên hỏi)
- Hai cách làm cùng một việc cùng tồn tại (form `rules` inline vs zod; icon chuỗi vs import; file phẳng vs thư mục con).
- Tài liệu nói một đằng, code một nẻo (tên route group, thư mục store...).
- Người dùng muốn thứ repo chưa có (Storybook, test bắt buộc, CI).
- Thư mục "không được sửa" (vendored, copy từ dự án khác) - xác nhận trước khi codemod.
