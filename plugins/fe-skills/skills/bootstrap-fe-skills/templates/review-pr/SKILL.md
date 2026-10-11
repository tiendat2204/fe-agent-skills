---
name: review-pr
description: Checklist review PR / diff frontend của <DỰ ÁN> - chạy <lint>, <typecheck>, <test>, e2e liên quan, rồi soát quy ước, design system, form, routing, nghiệp vụ, a11y, mobile, hiệu năng, test và bảo mật. Dùng khi người dùng yêu cầu review PR, review diff, review branch hoặc kiểm tra code trước khi merge.
metadata:
  project: <dự án>
  version: "1.0"
---

# Review PR

1. Phạm vi: `git diff --stat <nhánh chính>...HEAD`.
2. Chạy máy: <lệnh>. Lỗi lint ở rule <...> là chặn merge.
3. Soát [references/checklist.md](references/checklist.md). Mỗi phát hiện: `<file>:<dòng> - [chặn|nên sửa|gợi ý] <vấn đề>. <cách sửa>. (đã chạy | chỉ đọc code)`.
4. Kết luận: Approve / Request changes + số phát hiện mỗi mức + lệnh đã chạy.
