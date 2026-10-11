# Checklist review

## A. Tự động
- [ ] Lint, typecheck, test xanh; không `@ts-ignore` không lý do; hạn chế `as` và `!`.
- [ ] Không commit file rác: ảnh chụp ở gốc repo, config tạm, `*.tsbuildinfo`, output build, `.env*` (trừ `.env.example`).

## B. Quy ước
- [ ] File đúng thư mục, đúng kiểu tên; export đúng quy ước.
- [ ] Import alias cho code khác vùng.
- [ ] Component không gọi HTTP trực tiếp; key server state lấy từ factory chung.
- [ ] Không copy dữ liệu server vào store toàn cục; state lọc/trang ở URL.
- [ ] Không `console.log`, không code bị comment-out.

## C. Design system
- [ ] Không màu thô/hex, inline style, class động, đè style component UI.
- [ ] Tái dùng empty/error/loading state, layout, data table có sẵn.
- [ ] Định dạng tiền/ngày qua helper chung.
- [ ] Không thêm dependency mới khi đã có thứ tương đương; nếu thêm, PR nêu lý do.

## D. Form
- [ ] Schema validate, thông báo theo ngôn ngữ giao diện, trim chuỗi, giới hạn khớp backend.
- [ ] `defaultValues` đầy đủ; disable khi gửi; chống bấm đôi khi tạo bản ghi.
- [ ] Lỗi field dưới field, lỗi chung trên nút, lỗi server theo field gắn vào field.
- [ ] Thành công thì reset trạng thái dirty.

## E. Routing
- [ ] File route mỏng; params động xử lý đúng kiểu framework.
- [ ] Đúng một `h1` (hoặc theo quy ước dự án); đủ trạng thái tải/lỗi/rỗng/có dữ liệu.
- [ ] Trang riêng tư noindex; trang công khai có canonical, sitemap.
- [ ] Đổi URL có redirect.

## F. Nghiệp vụ
- [ ] Đối chiếu tài liệu nghiệp vụ của dự án (AGENTS.md, docs/). Không đổi contract với hệ thống khác khi chưa kiểm phía bên kia.

## G. Dữ liệu và lỗi
- [ ] Lỗi API thu hẹp kiểu, có thông báo mặc định.
- [ ] 401 để interceptor xử lý; không retry 4xx xác định; 409 tải lại.
- [ ] `localStorage` đọc qua schema, chịu dữ liệu hỏng và bị chặn.
- [ ] Đổi người dùng thì xóa cache cũ.

## H. A11y
- [ ] Phần tử bấm được là button/link thật.
- [ ] Icon trang trí `aria-hidden`; nút chỉ có icon có `aria-label`.
- [ ] Input có label; lỗi có `role='alert'` và `aria-describedby`.
- [ ] Trạng thái tải có `role='status'`/`aria-busy`; heading không nhảy cấp.
- [ ] Link bọc trong Button không dùng `disabled` để vô hiệu hóa.

## I. Mobile và hiệu năng
- [ ] Không tràn ngang ở 390px; vùng chạm ≥ 40px trên màn cảm ứng; input ≥ 16px trên iOS.
- [ ] Không setState trong render; effect đủ dependency.
- [ ] Giá trị context không tạo object/hàm mới mỗi render khi nhiều consumer.
- [ ] Không gửi request mỗi phím gõ (debounce).
- [ ] Ảnh qua component/helper ảnh của dự án.

## J. Test
- [ ] Logic mới có unit test; story cho component hiển thị mới (nếu dự án có Storybook).
- [ ] Luồng đổi hành vi có e2e cập nhật; test sửa lỗi tái hiện được lỗi.

## K. Commit / PR
- [ ] Theo quy ước commit của repo (thường Conventional Commits); PR có ảnh chụp và lệnh đã chạy.
