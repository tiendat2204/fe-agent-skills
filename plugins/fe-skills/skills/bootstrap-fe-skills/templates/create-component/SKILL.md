---
name: create-component
description: Tạo component mới cho <DỰ ÁN> đúng quy ước - file <kiểu tên> đúng thư mục, logic tách ra <model> có unit test <test runner>, story <Storybook nếu có>, dùng token và component UI có sẵn. Dùng khi người dùng yêu cầu tạo component, widget, card, section, khối UI mới, hoặc tách JSX lớn thành component riêng. Không dùng cho form (create-form) hay trang (create-page).
metadata:
  project: <dự án>
  version: "1.0"
---

# Tạo component

Đọc trước `fe-conventions` và `design-system`.

## Bước

1. Kiểm tra đã có chưa trong <thư mục>.
2. Chọn vị trí.
3. Tạo file từ template (placeholder: `__Name__`, `__name__`, `__path__`):

   | File | Template | Bắt buộc |
   |---|---|---|
   | | | |

4. Viết component: <quy tắc chính>.
5. Kiểm tra: `<lint>`, `<typecheck>`, `<test>`, `<storybook build>`.

## Ví dụ thật nên tham khảo

-
