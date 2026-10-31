# Phase 2 — UI/UX Design Brief (v0.1)

**Ngày:** 2026-10-31  
**Trạng thái:** PROPOSED VISUAL DIRECTION — để tạo prototype, chưa phải UI cuối cùng.  
**Nguồn sự thật:** `PRODUCT_SPEC_v0.1_APPROVED.md`. Nếu có xung đột, Product Spec đã duyệt được ưu tiên.  
**Bước hiện tại:** 2A — Homepage prototype. Bước 2B (case-study template) chỉ làm sau khi owner review/chốt 2A.

## 1. Mục tiêu của prototype

Chứng minh nhà tuyển dụng có thể hiểu người sở hữu là ai, 3 trụ cột nghề nghiệp và cách tìm minh chứng năng lực trong khoảng 30–60 giây. Giao diện phải nhất quán trên mobile và desktop, không cần nhiều hiệu ứng. Đây là bản demo local, **chưa publish**.

## 2. Hướng mỹ thuật đầu tiên

**Tên hướng:** Modern Professional × Engineering, phiên bản `Light-first / Deep Ink + Blue & Teal`.

- Cảm giác: chỉn chu, tin cậy, kỹ thuật hiện đại; tránh giao diện hacker/neon, card loè loẹt, gradient dày đặc.
- Tổng thể: nền sáng, vùng hero đậm màu có thể dùng để tạo điểm nhấn; khoảng trắng rộng, chữ rõ ràng, bố cục phân cấp tốt.
- Màu nền chính: `#F8FAFC`, surface: `#FFFFFF`, primary text: `#101827`.
- Accent blue `#2563EB`, accent teal `#0D9488`, muted text `#475569`, border `#E2E8F0`.
- Không buộc dùng dark mode trong MVP. Chuẩn bị token thống nhất để dễ thêm về sau, **không tự triển khai theme switcher**.
- Font: ưu tiên system font stack để không tạo tải tài nguyên từ bên thứ ba trong prototype; có thể đánh giá font thương hiệu ở bước hoàn thiện sau.
- Icon: dùng SVG đơn giản hoặc icon package rất nhẹ khi thật sự cần; không cài UI framework nguyên bộ.
- Motion: hover, focus, reveal đơn giản nếu hữu ích; ưu tiên CSS và `prefers-reduced-motion`. Tránh parallax, autoplay, 3D và animation framework.

## 3. Bố cục Homepage — wireframe văn bản

```text
┌──────────────────────────────────────────────────────┐
│ HỒ VĂN DINH         About  Expertise  Work  Contact │
├──────────────────────────────────────────────────────┤
│ [Career focus]                                       │
│ Hồ Văn Dinh                                         │
│ Management · Data · AI                               │
│ [1–2 câu giá trị đem lại, không phóng đại]           │
│ [Explore Work] [Contact (chỉ nếu có link công khai)] │
├──────────────────────────────────────────────────────┤
│ ABOUT — cách tiếp cận công việc/học vấn              │
├──────────────────────────────────────────────────────┤
│ EXPERTISE                                            │
│ [Management] [Data] [AI & Software]                  │
├──────────────────────────────────────────────────────┤
│ EXPERIENCE — vai trò, trách nhiệm (không bịa số liệu)│
├──────────────────────────────────────────────────────┤
│ FEATURED WORK — 2–3 cards demo, tách data khỏi view  │
├──────────────────────────────────────────────────────┤
│ SKILLS — nhóm kỹ năng, không dùng % proficiency      │
├──────────────────────────────────────────────────────┤
│ CONTACT — CTA chỉ bật với kênh đã được duyệt         │
├──────────────────────────────────────────────────────┤
│ FOOTER                                               │
└──────────────────────────────────────────────────────┘
```

Thứ tự trên là đề xuất của prototype, không phải cam kết không thay đổi. Mục Skills có thể tích hợp vào Expertise nếu dễ hiểu hơn, miễn các tiêu chí Product Spec còn được đáp ứng.

## 4. Desktop và Mobile

| Tiêu chí | Desktop (>= 1024px) | Mobile (360–430px) |
|---|---|---|
| Navigation | Header ngang, sticky nếu không che nội dung | Nút menu rõ ràng, có thể dùng native `details`, đóng/mở được |
| Hero | Tiêu đề lớn, tối đa 2 cột | Một cột, CTA không tràn ngang |
| Expertise cards | 3 cột | 1 cột |
| Project cards | 2–3 cột theo chiều rộng | 1 cột |
| Experience | Timeline/list dễ quét | Danh sách dọc, không timeline quá phức tạp |
| Typography | Đủ phân cấp, content max-width | Thân chữ dễ đọc, không phải zoom |
| Spacing | Thoáng | Compact nhưng vẫn dễ chạm |

Kiểm tra tối thiểu các viewport: **360px, 390px, 768px, 1024px, 1440px**. Không có horizontal overflow. Các vùng bấm chính có kích thước hợp lý. Header/anchor phải không che heading.

## 5. Nội dung demo và quyền công khai

- Hiển thị tên công khai mặc định: **Hồ Văn Dinh** (được chốt để bắt đầu thiết kế).
- Hero/Experience/Projects chỉ sử dụng thông tin đã biết hoặc câu demo trung tính; có thể ghi `Demo` trong dev nếu chưa xác minh.
- Không đưa ngày sinh, số điện thoại, email, repo private, tài liệu SGOD/ChatSystem, đường dẫn CV chưa có lên website.
- Không giả định có ảnh đại diện. Dùng typographic composition hoặc hình khối trừu tượng (không cần asset stock).
- Không tự đặt KPI, doanh số, lượt người dùng, thâm niên hoặc tác động dự án nếu chưa xác nhận.
- Không tạo nút bấm trang trí dẫn `#` hay link giả. CTA dự án có thể chỉ đến section hoặc hiển thị trạng thái “Case study đang chuẩn bị” (không phải link giả).

## 6. Các component cấp prototype (chỉ tạo nếu hữu dụng)

- `BaseLayout` / `SiteHeader` / `SiteFooter`
- `Hero`, `SectionHeading`, `ExpertiseCard`, `ExperienceItem`, `ProjectCard`, `SkillsGroup`, `ContactSection`
- `src/data/demoContent.ts` (TypeScript data fixture tạm thời; sẽ chuyển sang Content Collections ở Phase 3)
- `src/styles/global.css` và tokens trong CSS. Tránh code style trùng lặp.

Không cần tạo các layer `services`, `repositories`, `hooks`, `stores`, `API`, `authentication` trong task này.

## 7. Nguyên tắc UX bắt buộc

- Mọi phần tử điều hướng cần đúng ngữ nghĩa: `<a>` cho link, `<button>` cho action.
- Có trạng thái hover/focus/keyboard; menu mobile thao tác được bằng bàn phím.
- Độ tương phản văn bản chính phù hợp, heading có thứ bậc; nội dung không phụ thuộc animation.
- Tôn trọng `prefers-reduced-motion`; dùng `scroll-margin-top` khi anchor với sticky header.
- Tránh các package JS chỉ để tạo hiệu ứng; chỉ thêm khi chứng minh cần.
- Không fetch dữ liệu runtime ở prototype; vẫn render HTML tĩnh.

## 8. Tiêu chí nghiệm thu Bước 2A

- [ ] Có prototype Homepage chạy local bằng Astro, TS strict, Tailwind v4 chuẩn.
- [ ] Hero thể hiện rõ tên và ba hướng nghề nghiệp trong màn hình đầu tiên.
- [ ] About, Expertise/Skills, Experience, Featured Work, Contact xuất hiện đúng bố cục.
- [ ] Mobile navigation hoạt động với bàn phím; không có CTA giả.
- [ ] Viewport 360 / 390 / 768 / 1024 / 1440 không tràn ngang.
- [ ] Cards được render từ data fixture riêng, không đặt mảng project trực tiếp trong component.
- [ ] Không để lộ dữ liệu cá nhân nhạy cảm, thông tin nội bộ hay metrics chưa có bằng chứng.
- [ ] Typecheck và production build thành công (nếu có tool chạy được).
- [ ] Có mô tả những gì chưa triển khai và báo cáo rõ phạm vi thay đổi.
- [ ] Owner đã xem giao diện và **chấp thuận** trước khi làm 2B.

## 9. Những gì chưa làm

- Không làm public blog, i18n, CMS, database, API, backend, auth, form gửi email, AI chatbot, theme switcher.
- Không tạo schema/content collection thật ở 2A; thực hiện Phase 3.
- Không làm production deploy, SEO hoàn chỉnh, CI/smoke test đầy đủ; thực hiện Phase 5.
- Không làm trang case study chi tiết ở 2A; chỉ cân nhắc sau khi duyệt thiết kế trang chủ.
