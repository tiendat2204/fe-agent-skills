# Khảo sát repo

Nếu repo có index code (ví dụ `.codegraph/`) thì dùng công cụ đó trước, đọc file sau.

## Cấu hình

| Đọc | Rút ra |
|---|---|
| `package.json` (scripts, dependencies) | framework, router, state, form, UI lib, test runner, Storybook, package manager |
| lockfile (`pnpm-lock.yaml`, `yarn.lock`, `package-lock.json`) | lệnh cài đặt |
| `tsconfig.json` (`paths`, `strict`) | alias import, mức strict |
| `eslint.config.*`, `.eslintrc*`, `.prettierrc*`, `biome.json` | style (chấm phẩy, nháy, dấu phẩy cuối), rule cấm, thư mục bị ignore |
| `tailwind.config.*` hoặc CSS có `@theme` (Tailwind v4) | token màu/chữ/khoảng cách |
| `components.json` | shadcn: style, baseColor, alias, icon library, registry |
| `next.config.*`, `vite.config.*` | redirect, ảnh, alias |
| `playwright.config.*`, `vitest.config.*`, `jest.config.*` | cách chạy test, cổng dev server |
| `.storybook/` | có Storybook không |
| `.github/workflows/`, `.gitlab-ci.yml` | CI chạy gì |
| `AGENTS.md`, `CLAUDE.md`, `README.md`, `docs/` | quy ước đã ghi, nghiệp vụ |

## Code

- Cây thư mục `src/` 2-3 cấp: theo loại (`components/hooks/pages`) hay theo tính năng (`features/...`).
- 2-3 file tiêu biểu mỗi loại: component UI, component tính năng, hook, store, gọi API, page/route, layout, form, schema, test.
- Đếm để thấy kiểu nào là chuẩn, kiểu nào là cũ:

```bash
grep -rl "useForm" src | wc -l               # form
grep -rl "from 'zod'" src | wc -l            # schema
grep -rl "from 'zustand'" src                # store
grep -rl "createContext" src                 # context
grep -rn "console.log" src | wc -l
grep -rn ": any\b\|as any" src | wc -l
grep -rn "from '\.\./\.\./" src | wc -l      # import leo nhiều cấp
grep -rhoE "icon=['\"][a-z]+:" src | sort | uniq -c   # icon dạng chuỗi
```

- Ranh giới module: thư mục dùng chung (`components/ui`) có import ngược vào code tính năng không.

## Lịch sử

```bash
git log --format='%s' -50          # quy ước commit, loại lỗi hay sửa
git log --format='%s' | grep -i "fix" | head -30
```

Tài liệu review cũ (`docs/*review*`) cho biết lỗi hay bị nhắc - dùng cho skill review-pr.

## Ghi chú

Mỗi kết luận ghi kèm nguồn (`file:dòng`, lệnh, số đếm) để khi viết skill có ví dụ thật.
