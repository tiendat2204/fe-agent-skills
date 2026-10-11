---
name: create-page
description: Thêm trang (route) mới vào ứng dụng frontend theo router của dự án (Next.js App Router, Pages Router, React Router, TanStack Router, Vue Router) - chọn layout/nhóm route, file route mỏng, component trang đủ trạng thái tải/lỗi/rỗng/có dữ liệu, metadata/SEO, menu và breadcrumb, guard quyền, redirect URL cũ và test e2e. Dùng khi người dùng yêu cầu thêm trang, màn hình, route, URL mới, trang chi tiết theo id, hoặc đổi đường dẫn.
metadata:
  author: tiendat2204
  version: "1.0"
---

# Thêm trang mới

## Bước 0: tìm quy ước của dự án

1. Nếu repo có `.claude/skills/<tên skill này>/SKILL.md` (bản riêng dự án) thì **làm theo bản đó** và dùng template của nó; skill này chỉ bổ sung chỗ bản dự án không nói.
2. Đọc `AGENTS.md` / `CLAUDE.md` / `README.md` ở gốc repo.
3. Không có hai thứ trên: mở 2-3 file cùng loại trong repo và làm giống chúng. Gợi ý người dùng chạy `/fe-skills:bootstrap-fe-skills`.
4. Template dưới đây là điểm khởi đầu: sửa import, component UI, style code cho khớp repo trước khi dùng.

## Bước

1. **Xác định router** (package.json + thư mục `app/`, `pages/`, `routes/`, file khai báo route). Cách làm theo từng router: [references/routers.md](references/routers.md).
2. **Chọn chỗ**: nhóm route/layout đúng vùng (công khai, tài khoản, quản trị...). Guard quyền đặt ở layout nếu cả vùng cần; trang cần quyền hẹp hơn thì bọc riêng.
3. **File route mỏng**: chỉ đọc params, khai báo metadata, render component trang. Không logic nghiệp vụ, không gọi API trực tiếp (trừ prefetch phía server).
4. **Component trang** ở thư mục tính năng, đủ 4 trạng thái: đang tải, lỗi (có thử lại), rỗng, có dữ liệu. Dùng component trạng thái có sẵn của dự án.
5. **Tiêu đề**: theo quy ước dự án (thường đúng một `h1`; có dự án dùng breadcrumb làm tiêu đề).
6. **Metadata**: trang riêng tư noindex; trang công khai có title, description, canonical và có trong sitemap.
7. **Điều hướng**: thêm vào menu/sidebar/breadcrumb; đổi URL thì thêm redirect.
8. **State trên URL**: trang, lọc, tab ở search params, không ở `useState`.
9. **Test**: e2e vào trang (tải, rỗng, lỗi, mobile 390px); logic trang tách model + unit test.
10. **Kiểm**: lint, typecheck, test, e2e của trang.
