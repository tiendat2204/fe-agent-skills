# Mặc định chi tiết

## Đặt file (khi dự án tổ chức theo tính năng)

```
src/
  app/ | pages/ | routes/     # chỉ routing, file mỏng
  components/ui/              # primitive, không import code tính năng
  features/<tính năng>/       # component, hook, api, model, schema của tính năng
  lib/                        # helper chung
  hooks/                      # hook UI chung
  types/
tests/ hoặc cạnh file nguồn   # theo dự án
```

## Đặt tên

| Thứ | Mặc định | Ví dụ |
|---|---|---|
| Component | `order-status-badge.tsx` -> `OrderStatusBadge` | |
| Logic thuần | `<tên>-model.ts` | `order-list-model.ts` |
| Schema | `<tên>-schemas.ts` | `address-schemas.ts` |
| API | `<domain>.api.ts` | `orders.api.ts` |
| Hook | `use-<tên>.ts` -> `use<Tên>` | `use-orders.ts` -> `useOrderPage` |
| Store | `<tên>-store.ts` -> `use<Tên>Store` | |
| Kiểu form | `<Tên>FormInput` / `<Tên>FormValues` | |

## Server state

- Key lấy từ một factory chung (`queryKeys.orders.list(params)`), không viết tay mảng ở từng chỗ.
- Mutation invalidate đúng resource bị ảnh hưởng; không retry lỗi 4xx xác định.
- Xung đột (409) thì tải lại để người dùng thấy bản mới.

## Ranh giới module

- `components/ui` không import code tính năng.
- Component không gọi HTTP client trực tiếp; đi qua hook dữ liệu.
- Route/page không chứa logic nghiệp vụ.

## Lỗi

```ts
// Đúng
} catch (cause) {
  setError(errorMessage(cause, 'Không thể lưu. Vui lòng thử lại.'))
}

// Sai
} catch (e: any) {
  alert(e.message)
}
```
