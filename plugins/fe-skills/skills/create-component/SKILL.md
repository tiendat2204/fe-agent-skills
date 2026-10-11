---
name: create-component
description: Tạo React component mới (TypeScript) theo quy ước của dự án - kiểm tra component có sẵn, chọn thư mục, tách logic thuần ra file model có unit test, thêm story nếu dự án dùng Storybook, dùng token và component UI có sẵn. Dùng khi người dùng yêu cầu tạo component, widget, card, section, khối UI mới, hoặc tách JSX lớn thành component riêng. Không dùng cho form (create-form) hay trang (create-page).
metadata:
  author: tiendat2204
  version: "1.0"
---

# Tạo component

## Bước 0: tìm quy ước của dự án

1. Nếu repo có `.claude/skills/<tên skill này>/SKILL.md` (bản riêng dự án) thì **làm theo bản đó** và dùng template của nó; skill này chỉ bổ sung chỗ bản dự án không nói.
2. Đọc `AGENTS.md` / `CLAUDE.md` / `README.md` ở gốc repo.
3. Không có hai thứ trên: mở 2-3 file cùng loại trong repo và làm giống chúng. Gợi ý người dùng chạy `/fe-skills:bootstrap-fe-skills`.
4. Template dưới đây là điểm khởi đầu: sửa import, component UI, style code cho khớp repo trước khi dùng.

## Bước

1. **Đã có chưa?** Tìm trong thư mục UI và thư mục tính năng. Có rồi thì dùng hoặc thêm `variant`.
2. **Vị trí** theo `fe-conventions` của dự án.
3. **File** (placeholder: `__Name__` PascalCase, `__name__` kebab-case, `__path__` đường import tới thư mục):

   | File | Template | Khi nào |
   |---|---|---|
   | `<name>.tsx` | [templates/component.tsx](templates/component.tsx) | luôn |
   | `<name>-model.ts` | [templates/component-model.ts](templates/component-model.ts) | có logic thuần |
   | test của model | [templates/component-model.test.ts](templates/component-model.test.ts) | có model (bắt buộc) |
   | `<name>.stories.tsx` | [templates/component.stories.tsx](templates/component.stories.tsx) | dự án có Storybook và component hiển thị |

   Test template viết cho `node:test`; dự án dùng Vitest/Jest thì đổi sang `describe/it/expect`.
4. **Viết**: named export; props là `interface __Name__Props`; dữ liệu server lấy qua hook dự án, component hiển thị nhận props; phần tử bấm được là Button/Link; icon trang trí `aria-hidden`; chuỗi theo ngôn ngữ giao diện.
5. **Kiểm**: lint, typecheck, test của file mới, build Storybook nếu có.

## Đúng / sai

```tsx
// Sai - logic trong JSX, màu thô, div bấm được, any
export default function OrderBadge (props: any) {
  return <div onClick={props.onClick} className='text-green-600'>{props.status === 'Delivered' ? 'Đã giao' : '...'}</div>
}

// Đúng - nhãn ở model (có test), token, component UI
export function OrderStatusBadge ({ status }: { status: OrderStatus }) {
  const { label, variant } = getOrderStatusPresentation(status)

  return <Badge variant={variant}>{label}</Badge>
}
```
