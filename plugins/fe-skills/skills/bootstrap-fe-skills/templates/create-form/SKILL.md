---
name: create-form
description: Tạo hoặc sửa form trong <DỰ ÁN> theo chuẩn <thư viện form> + <validate>, schema đặt trong <file>, field dựng bằng <component field>, lỗi hiển thị bằng <...>, chống bấm đôi, gửi qua <mutation>. Dùng khi người dùng yêu cầu tạo form, thêm field, validate input, đăng ký, thanh toán, hoặc sửa hiển thị lỗi form.
metadata:
  project: <dự án>
  version: "1.0"
---

# Tạo form

Chuẩn: <...>. Kiểu cũ không chép theo: <...>.

## Bước

1. Schema trong <file> - template `templates/schema.ts`.
2. Test schema ở <...>.
3. Component form - template `templates/form.tsx`: <defaultValues, submit, lỗi field, lỗi chung, trạng thái gửi, reset>.
4. Kiểm tra: <lệnh>.

Chi tiết: [references/form-patterns.md](references/form-patterns.md).
