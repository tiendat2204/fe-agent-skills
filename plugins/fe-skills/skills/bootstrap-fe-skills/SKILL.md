---
name: bootstrap-fe-skills
description: Đọc một repo frontend (React, Next.js, Vue...) rồi sinh bộ Agent Skills riêng cho dự án đó trong .claude/skills/ - fe-conventions, design-system, create-component, create-form, create-page, review-pr - dựa trên quy ước thật trong code, kèm ví dụ đúng/sai lấy từ repo và danh sách câu hỏi cho chỗ chưa chắc. Dùng khi người dùng muốn tạo skill, viết quy ước, chuẩn hóa code, onboarding AI cho một dự án frontend mới, hoặc cập nhật bộ skill dự án đã cũ.
metadata:
  author: tiendat2204
  version: "1.0"
---

# Sinh bộ skill cho dự án frontend

Kết quả: 6 skill trong `<repo>/.claude/skills/`, theo chuẩn https://agentskills.io/specification. Bộ skill chung trong plugin này (`fe-skills:*`) sẽ đọc các skill dự án đó trước khi làm việc.

## Nguyên tắc

- **Không bịa quy ước.** Mỗi quy tắc phải chỉ ra được file thật, rule lint thật hoặc lệnh kiểm được. Chỗ không chắc đưa vào danh sách câu hỏi.
- **Code thắng lời kể.** Khi tài liệu (README, AGENTS.md, CLAUDE.md) mâu thuẫn với code, ghi lại mâu thuẫn và hỏi người dùng.
- **Ví dụ đúng/sai lấy từ repo**, không tự nghĩ ra. Ví dụ "sai" về lint phải được xác nhận bằng cách chạy linter thật.
- SKILL.md ngắn (dưới ~100 dòng); chi tiết đưa vào `references/`, file mẫu vào `templates/`.

## Bước

1. **Khảo sát repo** theo [references/discovery.md](references/discovery.md): package.json, lockfile, tsconfig, linter/formatter, CSS/token, cấu trúc `src`, routing, state, form, test, CI, lịch sử commit, tài liệu review cũ.
2. **Tự trả lời bảng câu hỏi** [references/questionnaire.md](references/questionnaire.md) từ những gì đã đọc. Ghi nguồn cho từng câu trả lời.
3. **Hỏi người dùng** (AskUserQuestion, tối đa 4 câu mỗi lần) chỉ những điểm: code tự mâu thuẫn (hai kiểu form, hai kiểu icon...), yêu cầu không có trong repo (Storybook, test bắt buộc...), phạm vi (commit cho team hay cá nhân). Đưa phương án khuyên dùng lên đầu.
4. **Thăm dò lint**: tạo file tạm trong `src/` chứa các vi phạm nghi ngờ (màu thô, inline style, thẻ thô, `any`...), chạy linter, ghi lại rule nào bắt được, rồi xóa file. Chỉ ghi "lint chặn" cho rule thực sự bắn.
5. **Viết 6 skill** từ khung trong `templates/` - xem [references/skill-layout.md](references/skill-layout.md) cho nội dung từng skill và yêu cầu frontmatter.
6. **Kiểm chứng template**: điền placeholder vào một bản sao trong repo (component, model, test, story, form, page), chạy lint + typecheck + test (+ build Storybook nếu có), rồi xóa bản sao.
7. **Kiểm frontmatter**: `name` trùng tên thư mục, chỉ `a-z0-9-`, description 1-1024 ký tự.
8. **Không làm hỏng build**: nếu linter quét toàn repo (`eslint .`), thêm `.claude/**` vào ignore vì template chứa placeholder như `__Name__`.
9. **Báo cáo**: danh sách file đã tạo, mâu thuẫn tìm thấy, câu hỏi còn mở. Không tự commit.

## An toàn khi làm việc

- Repo có thể đang có thay đổi chưa commit và session/dev server khác đang chạy. **Không** di chuyển, đổi tên hay thay thế thư mục nguồn (`src/`) để thử nghiệm - dev server sẽ mất route, session khác có thể mất file. Muốn so sánh với bản gốc thì dùng `git worktree` hoặc một bản sao ở thư mục khác.
- Codemod lớn: sao lưu file trước, chạy dry-run, chỉ sửa đúng file cần, kiểm lại các thư mục được ghi là "không sửa" (vendored, bản sao từ dự án khác).
- Không thêm dependency hay đổi cấu hình build khi người dùng chưa đồng ý.
