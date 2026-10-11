# Mẫu form

## Hiển thị lỗi

| Loại | Hiển thị |
|---|---|
| Validate field | dưới input, `role='alert'`, input có `aria-invalid` và `aria-describedby` trỏ tới lỗi |
| Lỗi server gắn được vào field | `form.setError(name, { type: 'server', message })` |
| Lỗi submit chung | một dòng `role='alert'` trên hàng nút |
| Thành công | toast hoặc điều hướng |

## A11y

- Mỗi input có label gắn `htmlFor`/`id` (dùng `useId`).
- Dấu `*` bắt buộc có `aria-hidden='true'`.
- Nút gửi `type='submit'`, nút hủy `type='button'`.

## Field tùy biến (select, combobox, OTP)

```tsx
<Controller
  control={form.control}
  name='itemId'
  render={({ field, fieldState }) => (
    <div>
      <label htmlFor={itemId}>Hàng hóa</label>
      <ItemSelect id={itemId} value={field.value} onChange={field.onChange} aria-invalid={Boolean(fieldState.error)} aria-describedby={fieldState.error ? errorId : undefined} />
      {fieldState.error ? <p id={errorId} role='alert'>{fieldState.error.message}</p> : null}
    </div>
  )}
/>
```

## Form trong dialog/sheet

Footer nằm trong `<form>` để nút submit là submit thật. Báo dirty/busy lên dialog để chặn đóng khi đang gửi hoặc còn thay đổi.

## Bẫy

- Đọc lỗi trong wrapper dùng chung bằng `useFormState({ control, name })`; `getFieldState` có thể gây setState-trong-render sau `reset`.
- Ô tiền tệ: giữ chuỗi số trong form, định dạng khi hiển thị; tránh `z.number()` trực tiếp cho input text.
- Lưu nháp `localStorage`: đọc lại qua schema nháp (mọi field optional + default) để chịu dữ liệu hỏng.
