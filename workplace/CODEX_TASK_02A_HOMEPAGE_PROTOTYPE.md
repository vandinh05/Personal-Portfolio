# Codex Task 02A — Astro homepage UI prototype

**Điều kiện tiên quyết:** Task 01 hoàn thành (docs + AGENTS + README), owner đã cho phép bắt đầu prototype. Nếu trong repo có source hoặc project khác, không ghi đè. Làm trên branch riêng nếu đang dùng Git.

## Nguồn yêu cầu

1. `docs/PRODUCT_SPEC_v0.1_APPROVED.md` — **approved baseline, ưu tiên cao nhất**.
2. `docs/PHASE_2_UIUX_BRIEF_v0.1.md` — visual direction đề xuất để dựng prototype.
3. `AGENTS.md` — nguyên tắc thao tác repo.

## Phạm vi đúng task 02A

1. Khởi tạo **Astro + TypeScript strict** trong chính root của repo hiện tại, giữ nguyên docs, không tạo nested project.
2. Cài **Tailwind CSS v4 theo hướng dẫn Astro chính thức**: Vite plugin (`astro add tailwind` với CLI phù hợp), **không** dùng `@astrojs/tailwind` legacy.
3. Dựng **homepage only** (`/`) với những section: Header/Navigation, Hero, About, Expertise (Management/Data/AI), Experience, Featured Work, Skills, Contact và Footer. Cho phép gộp Expertise/Skills nếu không mất thông tin.
4. Dùng một layout chung và các component tái sử dụng có lý do rõ ràng; không tạo abstraction vô ích.
5. Demo content trong `src/data/demoContent.ts` hoặc file dữ liệu tương đương, không hardcode mảng projects/experiences trong component. **Không tạo content collections ở task này**.
6. Dùng color tokens trong CSS, nền sáng và accent blue/teal; mobile-first; đảm bảo menu mobile keyboard accessible.
7. Dùng link thật đã được phép hoặc ẩn CTA; không tạo link `#` vô nghĩa, không tự dựng CV/GitHub/email chưa xác nhận.
8. Chỉ CSS animations nhẹ và respect `prefers-reduced-motion`; không thêm framer-motion, UI framework, icon package nặng hoặc React nếu không cần.

## Nội dung & an toàn

- Chủ sở hữu: Hồ Văn Dinh. Career tracks: Management & Operations · Data Analytics/Engineering · AI & Software Engineering.
- Không xuất bản ngày sinh, số điện thoại, email, dữ liệu SGOD/ChatSystem, repo private hay những kết quả chưa được xác minh.
- Không tạo thành tích, số liệu, chức danh mới. Demo text chỉ sử dụng mô tả trung tính và phải dễ thay thế.
- Prototype chạy **local**, chưa triển khai production.

## Không làm

- Chưa làm `/projects/[slug]`, bộ lọc, resume generator, blog, SEO hoàn chỉnh, dark-mode switch, animation phức tạp, admin, API, DB, CMS, auth, Docker, server rendering.
- Không tự phát triển Phase 2B/Phase 3.

## Kiểm chứng bắt buộc

- Dev server mở trang `/` thành công.
- Astro/TypeScript check và production build pass. Nếu thiếu công cụ, chỉ cài minimal devDependencies cần thiết.
- Kiểm tra responsive tại 360, 390, 768, 1024, 1440px; nếu không có browser tooling sẵn có thì ghi rõ **chưa xác minh trực quan**, không tự nhận PASS.
- Kiểm tra keyboard navigation, overflow, CTA thật/ẩn, `prefers-reduced-motion`.

## Báo cáo cuối task

1. Files created/changed (ngắn gọn).
2. UI sections và kiến trúc tối thiểu đã thực hiện.
3. Commands & kết quả thật sự đã chạy; những điều chưa xác minh.
4. Cách chạy local bằng 2–3 lệnh.
5. Nếu có sẵn công cụ thì cung cấp desktop/mobile screenshots; **không cài Playwright chỉ để chụp hình**.
6. Dừng lại và đợi người dùng review/chốt 2A trước khi tiếp tục.
