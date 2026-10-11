# Bố cục 6 skill dự án

## Frontmatter (bắt buộc)

```yaml
---
name: create-form            # trùng tên thư mục, a-z0-9 và '-', không bắt đầu/kết thúc bằng '-', không có '--'
description: <làm gì> + <khi nào dùng, kèm từ khóa người dùng hay nói>. Tối đa 1024 ký tự.
metadata:
  project: <tên dự án>
  version: "1.0"
---
```

Description quyết định skill có được kích hoạt hay không: liệt kê động từ và danh từ người dùng sẽ gõ ("tạo form", "thêm field", "validate", "đăng ký"...), và tên lỗi lint nếu skill giúp sửa lỗi đó.

## Nội dung từng skill

| Skill | SKILL.md | references/ | templates/ |
|---|---|---|---|
| `fe-conventions` | quy tắc bắt buộc kiểm được (lệnh), bảng "đặt file ở đâu", tóm tắt state | `structure.md` (cây thư mục, bảng đặt tên, import, ranh giới module), `state-and-data.md` (bảng chọn state, query key, mutation, auth), `code-style.md` (rule lint, comment, xử lý lỗi) | - |
| `design-system` | bảng điều cấm + rule lint + cách thay, thứ tự chọn component, ví dụ đúng/sai | `tokens.md` (màu, chữ, spacing, radius, utility tùy chỉnh), `components.md` (component UI, khối dùng chung, định dạng tiền/ngày, icon) | - |
| `create-component` | bước tạo, bảng file sinh ra (component, model, test, story), lệnh kiểm | - | `component.tsx`, `component-model.ts`, `component-model.test.ts`, `component.stories.tsx`, `component.test.tsx` |
| `create-form` | chuẩn thư viện, bước schema -> test -> component, đúng/sai | `form-patterns.md` (hiển thị lỗi, a11y, field tùy biến, form trong dialog/sheet) | `schema.ts`, `form.tsx` |
| `create-page` | bảng chọn chỗ đặt route, bước (route mỏng, component trang, metadata, điều hướng, quyền, test) | `routing.md` (cây route hiện tại, mẫu page, URL state, params) | `page.tsx`, `page-component.tsx` |
| `review-pr` | lấy phạm vi diff, lệnh máy, mức độ phát hiện, định dạng kết luận | `checklist.md` (tự động, quy ước, design system, form, routing, nghiệp vụ, lỗi/dữ liệu, a11y, mobile/hiệu năng, test, commit) | - |

Khung trống cho từng skill: `templates/<skill>/SKILL.md` trong skill này.

## Placeholder trong template

`__Name__` PascalCase, `__camelName__` camelCase, `__name__` kebab-case, `___NAME___` SCREAMING_SNAKE, `__path__` thư mục con. Ghi bảng placeholder trong SKILL.md của skill dùng template.

## Mỗi quy tắc nên có

1. Câu quy tắc ngắn, đo được.
2. Cách kiểm (rule lint, lệnh, grep).
3. Ví dụ đúng từ repo (đường dẫn file) và ví dụ sai.
