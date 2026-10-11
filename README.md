# fe-agent-skills

Bộ [Agent Skills](https://agentskills.io/specification) cho dự án frontend, đóng gói thành plugin Claude Code.

| Skill | Gọi | Làm gì |
|---|---|---|
| `bootstrap-fe-skills` | `/fe-skills:bootstrap-fe-skills` | Đọc repo và sinh bộ skill **riêng** cho dự án vào `.claude/skills/` |
| `fe-conventions` | tự kích hoạt | Đặt file, đặt tên, state, import |
| `design-system` | tự kích hoạt | Token, component có sẵn, điều cấm, thăm dò lint |
| `create-component` | `/fe-skills:create-component` | Component + model + test + story |
| `create-form` | `/fe-skills:create-form` | react-hook-form + zod |
| `create-page` | `/fe-skills:create-page` | Route mới (Next.js, React Router, TanStack Router, Vue Router) |
| `review-pr` | `/fe-skills:review-pr` | Checklist review và định dạng phát hiện |

Các skill chung luôn đọc skill riêng của dự án (`.claude/skills/<tên>/`) và `AGENTS.md`/`CLAUDE.md` trước, rồi mới dùng mặc định của mình.

## Cài

Trong Claude Code:

```
/plugin marketplace add tiendat2204/fe-agent-skills
/plugin install fe-skills@tiendat-skills
```

Hoặc trong shell:

```bash
claude plugin marketplace add tiendat2204/fe-agent-skills
claude plugin install fe-skills@tiendat-skills
```

Repo private: máy cài cần đăng nhập GitHub có quyền đọc repo (`gh auth login` hoặc SSH key).

Cập nhật: `claude plugin marketplace update tiendat-skills`, rồi mở session mới hoặc chạy `/reload-plugins`.

Dùng thử khi đang sửa repo này (không cần cài):

```bash
claude --plugin-dir ./plugins/fe-skills
```

## Dùng cho dự án mới

1. Mở Claude Code trong repo dự án.
2. `/fe-skills:bootstrap-fe-skills` - trả lời các câu hỏi về chỗ code mâu thuẫn.
3. Review rồi commit `.claude/skills/` cho cả team.
4. Từ đó cứ nói bình thường ("tạo form địa chỉ", "review diff") - skill tự kích hoạt.

## Cấu trúc

```
.claude-plugin/marketplace.json      # marketplace "tiendat-skills"
plugins/fe-skills/
  .claude-plugin/plugin.json         # plugin "fe-skills"
  skills/<tên>/SKILL.md              # + references/, templates/
```

Sửa skill: tăng `version` trong `plugin.json` để máy đã cài nhận bản mới.
