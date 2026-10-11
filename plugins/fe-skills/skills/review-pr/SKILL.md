---
name: review-pr
description: Review pull request / diff / branch frontend - lấy phạm vi thay đổi, chạy lint, typecheck, test và e2e liên quan, soát theo checklist (quy ước dự án, design system, form, routing, dữ liệu và lỗi, a11y, mobile, hiệu năng, test, bảo mật, commit), ghi phát hiện theo mức chặn/nên sửa/gợi ý và nói rõ cái nào đã chạy thật. Dùng khi người dùng yêu cầu review PR, review diff, review branch, kiểm code trước khi merge hoặc tự rà trước khi commit.
metadata:
  author: tiendat2204
  version: "1.0"
---

# Review PR

## Bước 0: tìm quy ước của dự án

1. Nếu repo có `.claude/skills/<tên skill này>/SKILL.md` (bản riêng dự án) thì **làm theo bản đó**; skill này chỉ bổ sung chỗ bản dự án không nói.
2. Đọc `AGENTS.md` / `CLAUDE.md` / `README.md` ở gốc repo.
3. Không có hai thứ trên: khảo sát nhanh (package.json, cấu hình lint, tsconfig, 2-3 file cùng loại) và làm theo cái code đang làm nhiều nhất. Gợi ý người dùng chạy `/fe-skills:bootstrap-fe-skills` để sinh bộ skill riêng.
4. Quy tắc dưới đây là mặc định tốt; khi repo làm khác thì theo repo.

## 1. Phạm vi

```bash
git diff --stat <nhánh chính>...HEAD      # hoặc: gh pr diff <số>
```

Mô tả PR cần có: thay đổi người dùng thấy, lệnh đã chạy, ảnh chụp khi đổi giao diện, giả định về API/config.

## 2. Chạy máy

Lint, typecheck, unit test; e2e cho luồng bị đổi; build Storybook nếu đổi story. Ghi kết quả thật. Test fail có sẵn trên nhánh chính thì kiểm bằng `git worktree` / `git stash` trên bản sao, **không** di chuyển thư mục nguồn đang được dev server dùng.

## 3. Soát

Theo [references/checklist.md](references/checklist.md). Mỗi phát hiện:

```
<file>:<dòng> - [chặn|nên sửa|gợi ý] <vấn đề>. <cách sửa>. (đã chạy | chỉ đọc code)
```

- **chặn**: sai nghiệp vụ, mất dữ liệu, bảo mật, lint/type/test fail, đổi contract/API không báo.
- **nên sửa**: lệch quy ước, thiếu test cho logic mới, a11y, thiếu trạng thái tải/lỗi/rỗng.
- **gợi ý**: đặt tên, đơn giản hóa.

Xác minh từng phát hiện trong code trước khi báo. Không khen, không lặp lại diff.

## 4. Kết luận

`Approve` / `Request changes` + số phát hiện mỗi mức + lệnh đã chạy và kết quả.
