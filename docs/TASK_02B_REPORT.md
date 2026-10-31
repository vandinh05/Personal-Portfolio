# Task 02B — Project Listing & Case Study Prototype

Ngày: 2026-10-31. **Đã triển khai, chờ owner review. Không chuyển Phase 3.**

## Phạm vi và file chính

- `src/data/demoContent.ts`: thích nghi hai concept cũ thành đúng hai fixture Management/Operations và Data/AI; type `Project`, slug, tracks, status, visibility, demo, featured và các section. Dữ liệu không phải lịch sử công việc thực tế.
- `src/pages/projects/index.astro`: listing từ `visibleProjects`.
- `src/pages/projects/[slug].astro`: static routes từ cùng `visibleProjects`, dùng `getStaticPaths()`.
- `src/layouts/CaseStudyLayout.astro`: overview, metadata tình huống, breadcrumb, nhãn DEMO, mục lục, Context, Role/Scope, Approach, Artifacts, Evidence, Next steps và link quay lại.
- `src/components/ProjectCard.astro`: giữ phong cách card, thêm status và link chi tiết; `SiteFooter.astro` dùng chung cho trang mới.
- `src/components/SiteHeader.astro`: link về đúng homepage từ trang con; không gọi selector với hash rỗng khi chọn link listing trên mobile.
- `src/pages/index.astro`: Featured Work dùng `featuredProjects`, thêm link listing; giữ bố cục homepage đã duyệt.
- `src/styles/global.css`: header nền đặc, một anchor offset thay cho hai offset cộng dồn; styles listing/detail theo token cũ.
- `README.md`: cập nhật trạng thái 2A đã chấp thuận, cách chạy và thêm fixture.

Không thêm dependencies, Content Collections, backend, SEO hoàn chỉnh, filter/pagination hoặc triển khai production. Không sửa Product Spec APPROVED. Experience vẫn là placeholder.

## Kiểm chứng

| Mục | Kết quả | Bằng chứng / giới hạn |
|---|---|---|
| `npm.cmd run check` | PASS | 13 files, 0 errors, 0 warnings, 0 hints; chạy lại sau chỉnh sửa cuối. |
| `npm.cmd run build` | PASS | 4 trang static: homepage, listing và hai case study. |
| `npm.cmd run dev -- --host 127.0.0.1` | PASS | Cả bốn route render trong trình duyệt local. |
| Link nội bộ | PASS | Parser kiểm tra 78 link/fragment trong HTML build; không có link rỗng, `#` giả hay route/ID thiếu. |
| Luồng điều hướng | PASS | Listing → detail qua Enter; detail → listing; Featured Work homepage → Data demo; menu trang detail → About homepage. |
| Keyboard mobile | PASS | Enter mở menu; Tab tới link với outline solid; Enter điều hướng; Escape đóng và trả focus về summary. |
| Sticky header/anchor | PASS | Computed background `rgb(248, 250, 252)` không alpha. Desktop evidence target ~108px, header bottom ~89px; mobile About ~88px, header bottom ~73px. |
| Responsive/overflow | PASS | Đo DOM cả 4 route tại 360, 390, 768, 1024, 1440px, không tràn ngang. Lần đổi homepage sang 768 trả số đo 390 do resize chưa cập nhật; đã đo lại đúng 768 và pass. |
| Review hình ảnh | PASS trong phạm vi đã xem | Xem listing desktop/tablet/mobile, case study desktop/tablet/mobile; lưu ảnh trong `docs/screenshots/phase-2b/`. Không phải kiểm tra từng pixel của mọi route trên mọi viewport. |
| Console | PASS | Không có error/warn trong browser log đã kiểm tra. |
| Demo/noindex | PASS | Hai fixture có nhãn demo và status planned; bốn HTML có noindex. Chưa có sitemap. Không có KPI hay artifacts được mô tả là đã thực hiện. |
| Dữ liệu riêng tư | PASS trong fixture/build hiện tại | Kiểm tra không có tên dự án nội bộ, RoomBeacons/TraceGuard, mailto/tel trong HTML. |
| Visibility | PASS qua kiểm tra source | Homepage, listing và getStaticPaths đều dùng tập lọc `visibility === 'public'`; draft/private không đi vào các output này. Kiểm tra runtime hai fixture, slug duy nhất, exports đã lọc. Chưa chạy mutation test thêm fixture private rồi build. |
| Reduced motion | NOT VERIFIED ở chế độ giả lập | Source giữ media query tắt smooth scroll/transition/animation; công cụ browser hiện dùng không cung cấp API giả lập media preference. |
| Thiết bị thật, Safari/Firefox, screen reader, tắt JavaScript | NOT VERIFIED | Chưa kiểm tra trong task này. |

## Review local

Chạy `npm.cmd run dev` trong repository rồi mở:

- `http://localhost:4321/`
- `http://localhost:4321/projects/`
- `http://localhost:4321/projects/operations-case-demo/`
- `http://localhost:4321/projects/data-case-demo/`

Server kiểm thử được dừng sau kiểm chứng; xem README để chạy lại. Cần owner review khoảng cách anchor/header, listing, mục lục desktop và bố cục một cột mobile, cùng độ rõ của nhãn minh họa. Dừng tại Task 02B.
