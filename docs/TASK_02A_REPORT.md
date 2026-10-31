# Task 02A — Homepage Prototype

Ngày: 2026-10-31. Trạng thái: triển khai xong prototype, **chờ owner review**, chưa nghiệm thu Phase 2.

## Phạm vi và file chính

- `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`: Astro 7.4.4, TypeScript 5.9.3 strict, Tailwind 4.3.3 qua `@tailwindcss/vite`, static output.
- `src/pages/index.astro`: homepage gồm Header/Navigation, Hero, About, Expertise/Skills (gộp), Experience, Featured Work, Contact/Resume, Footer.
- `src/layouts/BaseLayout.astro`: layout tiếng Việt, skip link, metadata cơ bản, noindex.
- `src/components/`: SiteHeader, SectionHeading, ExpertiseCard, ProjectCard.
- `src/data/demoContent.ts`: nội dung và các mảng dữ liệu minh họa, tách khỏi UI.
- `src/styles/global.css`: tokens light/deep ink/blue/teal, responsive, focus, reduced-motion.
- `README.md`: hướng dẫn chạy và giới hạn prototype.
- `docs/screenshots/`: ảnh desktop 1440px và mobile 390px, toàn trang và phần đầu trang.

Experience, dự án và học vấn chưa được xác nhận được ghi rõ minh họa/chờ xác nhận. Không thêm email, số điện thoại, CV, repo hay dự án nội bộ. Hình dự án là CSS trang trí có nhãn minh họa, không phải biểu đồ kết quả thật. Không thêm ảnh hoặc font ngoài.

## Kiểm chứng thực tế

| Kiểm tra | Kết quả |
|---|---|
| Cài dependency | Thành công; npm báo 0 vulnerabilities tại thời điểm cài. Sandbox ban đầu không phân giải được npm registry; đã chạy lại với quyền được cấp. |
| `npm run check` | PASS: 9 files, 0 errors, 0 warnings, 0 hints. |
| `npm run build` | PASS: static build, 1 route `/`, tạo `dist/index.html`. Đã chạy lại sau các chỉnh sửa cuối. |
| `npm run dev -- --host 127.0.0.1` | PASS: mở homepage trong trình duyệt tại `http://127.0.0.1:4321/`. Server sandbox ban đầu timeout; server chạy ngoài sandbox sau khi được cấp quyền truy cập được. |
| Responsive | Đo DOM ở 360, 390, 768, 1024, 1440px: không overflow ngang; đã xem ảnh tại cả năm chiều rộng, review toàn trang mobile. |
| Menu bàn phím | Enter mở menu, Tab tới liên kết, Enter tới About và chuyển focus vào section; menu tự đóng. Escape đóng và trả focus về summary. |
| Anchor/CTA | Tất cả anchor có đích tồn tại, không có link `#` rỗng; CTA Khám phá dự án và Về đầu trang hoạt động. Heading Work không bị sticky header che. Contact/Resume không có link ngoài chưa duyệt. |
| Console | Không có error/warn trong log trình duyệt lúc kiểm tra. |
| Nội dung build | Không có tên dự án nội bộ SGOD/ChatSystem hoặc liên kết `mailto:`/`tel:` trong HTML build. |
| Tài liệu gốc | SHA-256 của Product Spec và UI/UX Brief trong docs khớp bản gốc workplace; không chỉnh baseline. |
| Reduced motion | Đã rà soát CSS có media query tắt smooth scroll/transition/animation; chưa giả lập tùy chọn hệ điều hành trong browser. |

Không dùng kết quả HTTP PowerShell ban đầu làm bằng chứng PASS: lần đó bị chặn socket/timeout trước khi đổi server. Bằng chứng trang dev hoạt động là homepage thực tế được render và điều hướng trong browser sau khi sửa quyền chạy server.

## Giới hạn và bước tiếp theo

- Chưa kiểm tra thiết bị thật, Safari/Firefox, screen reader, chế độ tắt JavaScript hoặc audit accessibility/performance toàn diện.
- Chưa xác nhận nội dung thật và quyền public trong `OPEN_DECISIONS.md`.
- Chưa deploy, chưa SEO đầy đủ, CI/smoke suite, content collections, trang case study, Task 02B hay Phase 3.
- Không tạo branch vì thư mục hiện tại chưa là Git repository.
- Dừng tại đây để chủ sở hữu review/chốt giao diện 02A; xem README để khởi động lại local.
