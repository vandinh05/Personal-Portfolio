# Personal Portfolio — Product Specification

**Version:** 0.1 (approved requirements baseline)  
**Date:** 2026-10-31  
**Owner:** Hồ Văn Dinh  
**Product type:** Public personal bio / professional portfolio website  
**Career focus:** Management & Operations · Data Analytics/Engineering · AI & Software Engineering  
**Status:** **APPROVED — Requirements Baseline (2026-10-31)**. Giai đoạn 1 hoàn thành; Giai đoạn 2 đang chuẩn bị prototype.

## 1. Tóm tắt sản phẩm

Xây dựng một website cá nhân chuyên nghiệp để (1) giúp nhà tuyển dụng đánh giá năng lực nhanh; (2) trình bày minh chứng kinh nghiệm quản lý, dữ liệu và AI; (3) duy trì hồ sơ nghề nghiệp và dự án lâu dài bằng một hệ thống nội dung dễ cập nhật.

**Định vị:** Một người có kinh nghiệm quản lý/vận hành thực tế, đang xây dựng các giải pháp bằng dữ liệu, AI và phần mềm. Tránh tạo ba chân dung rời rạc.

**Tham khảo:** https://www.codeser.io.vn/#skills — lấy cảm hứng ở cấp độ ý tưởng Bio/Portfolio, KHÔNG sao chép bố cục, mã nguồn, nội dung, thương hiệu hoặc tài sản. Chưa có bản đánh giá pixel-level vì không truy xuất/render được đầy đủ giao diện tham khảo.

## 2. Đối tượng và nhu cầu

| Đối tượng | Cần thấy | Cách đáp ứng |
|---|---|---|
| Nhà tuyển dụng Management/Operations | Quá trình làm việc, trách nhiệm, kỹ năng quản lý, thành tích có căn cứ | Experience + trang Resume/CV Manager |
| Nhà tuyển dụng Data | Kiến thức, công cụ, giải quyết vấn đề, vai trò trong dự án | Skills + case study Data + CV Data |
| Nhà tuyển dụng AI/Software | Khả năng phân tích, thiết kế sản phẩm, triển khai, đánh giá kỹ thuật | Case study AI/Software + CV AI |
| Mentor/đồng đội/người quan tâm | Cách làm việc, quá trình phát triển, liên hệ | About, Projects, Contact |

**Hành vi chính mong muốn:** Trong khoảng 30–60 giây, người xem biết chủ sở hữu là ai, hướng nghề nghiệp, bằng chứng năng lực, và tìm được CV hoặc kênh liên hệ phù hợp.

## 3. Nguyên tắc sản phẩm

1. **Một hồ sơ thống nhất, nhiều góc nhìn nghề nghiệp:** Career tracks dùng để lọc/nhấn mạnh nội dung, không tạo ba website trùng lặp.
2. **Evidence-first:** Chỉ công bố kỹ năng, vai trò, kết quả và số liệu có thể xác minh; không bịa benchmark, thành tích hoặc trạng thái dự án.
3. **Content-driven:** Nội dung được tách khỏi component giao diện; thêm nội dung không yêu cầu chép code.
4. **Static-first:** Không tạo backend/database/CMS khi chưa có nhu cầu vận hành cụ thể.
5. **Mobile-first và accessible:** Nút bấm, điều hướng, văn bản, hình ảnh dùng tốt trên điện thoại và bàn phím.
6. **Performance-conscious:** Ưu tiên HTML/CSS, giới hạn JS và animation; hỗ trợ `prefers-reduced-motion`.
7. **Private-by-default:** Thông tin cá nhân, tài liệu nội bộ, dự án đội nhóm cần duyệt trước khi public.
8. **Incremental delivery:** Mỗi bước có nghiệm thu; chỉ chuyển giai đoạn khi chủ sở hữu duyệt.

## 4. Phạm vi MVP (Version 1.0)

### M1 — Homepage (`/`)

- Header: tên/wordmark, menu anchor, nút Contact hoặc Resume (chỉ bật khi có liên kết thật).
- Hero: tên, định vị ba trụ cột, một đoạn giới thiệu ngắn, CTA ưu tiên.
- About: tóm tắt học vấn và cách tiếp cận công việc.
- Expertise/Skills: nhóm Management & Operations, Data, AI & Software; không biến thành các thanh phần trăm tự đánh giá.
- Experience: vai trò công việc, thời gian và mô tả có căn cứ.
- Featured Projects: thẻ 2–4 dự án đã được duyệt công bố.
- Contact: các liên kết chủ sở hữu xác nhận dùng công khai.
- Footer: copyright và thông tin điều hướng cơ bản.

### M2 — Projects (`/projects/` và `/projects/[slug]/`)

- Danh sách dự án, hiển thị tiêu đề, mô tả, category/track, trạng thái, công nghệ nếu có.
- Trang case study chuẩn: Problem → Role/Scope → Approach → Implementation/Artifacts → Results/Evidence → Status/Next steps.
- Dự án chưa hoàn thành phải có nhãn trạng thái rõ ràng.
- Dự án chỉ ở bước tài liệu/ý tưởng không được mô tả như đã triển khai.
- Draft/Private không xuất hiện trên trang public, sitemap hoặc danh sách nội dung liên quan.

### M3 — Experience & Resume

- Experience có thể bắt đầu là một section trên trang chủ; chưa bắt buộc tách route riêng.
- Khu vực Resume hỗ trợ các bản CV Manager, Data, AI (chỉ hiển thị bản thực sự tồn tại, được phê duyệt public).
- Không tự xuất bản ngày sinh, số điện thoại, địa chỉ hoặc thông tin nhạy cảm.

### M4 — Kỹ thuật/phát hành

- Responsive mobile/tablet/desktop; semantic HTML, SEO metadata, Open Graph, sitemap, canonical URLs.
- Trang 404; alt text cho ảnh có ý nghĩa; menu dùng được bằng bàn phím.
- Build tĩnh, deploy HTTPS, CI check type/build và smoke test những luồng chính.
- Ghi lại cách cập nhật nội dung trong README.

## 5. Ngoài phạm vi MVP

Blog/Writing public, toàn bộ song ngữ, full-text search, CMS/admin riêng, auth, database, chat AI, analytics dashboard, dịch vụ gửi email, booking, API, Docker cho production, microservices, custom animation engine. Chỉ bổ sung khi có lý do và tiêu chí chấp nhận rõ.

## 6. Kiến trúc nội dung ở mức sản phẩm

Nội dung phân tách theo những nhóm logic:

- **Profile:** tên, headline, bio, học vấn, CTA, các liên kết được duyệt.
- **Skills:** nhóm, tên kỹ năng, minh chứng liên quan; không dùng mức phần trăm không có cơ sở.
- **Experience:** tổ chức, vai trò, khoảng thời gian, trách nhiệm, kết quả có dẫn chứng, visibility.
- **Projects:** `title`, `slug/id`, `summary`, `careerTracks[]`, `tags[]`, `status`, `featured`, `visibility`, `role`, `dates` (nếu biết), `links`, `evidence`, nội dung case study.
- **Resumes:** target track, language, file path/URL, availability, update date (khi biết); không hiện link rỗng.
- **Writing:** đề phòng mở rộng; chưa hiển thị trong MVP.

**Danh mục trạng thái dự án:** `planned`, `in-progress`, `completed`, `archived`.  
**Danh mục xuất bản:** `draft`, `public`, `private`; các mục không phải `public` phải loại khỏi mọi output public.  
**Career tracks:** `management`, `data`, `ai-software`. Một dự án có thể thuộc nhiều track.

**Quy tắc mở rộng:** URL ổn định theo slug; content schema được kiểm tra; tránh thiết kế dựa vào số lượng dự án cố định; dùng pagination/search khi nhu cầu thực sự xuất hiện; ảnh được tối ưu; tránh lặp nội dung giữa các trang; thay đổi schema có migration khi cần.

## 7. Nội dung dự kiến (chưa public mặc định)

| Nội dung | Nhóm | Trạng thái đề xuất |
|---|---|---|
| Trường UTH — chuyên ngành Khoa học dữ liệu | About/Education | Cần xác nhận tên học vị, thời gian, trạng thái học tập |
| Sunday Basic — F&B, trưởng ca/quản lý | Experience/Management | Cần xác nhận thời gian, thành tựu, quyền dùng tên/logo |
| Trợ giảng/Quản lý lớp học | Experience/Management | Cần xác nhận tổ chức, thời gian, nhiệm vụ |
| RoomBeacons | Data project | In-progress; không trình bày tính năng chưa kiểm chứng |
| TraceGuard AI | AI/Software project | Product specification; chưa triển khai |
| SGOD / ChatSystem | Team Data work | Private cho tới khi có quyền công bố nội dung cụ thể |
| DINO STARFALL | Side project | In-progress; có thể đưa vào nhóm Other Projects nếu phù hợp |

**Không public tự động:** SĐT, ngày sinh, email cá nhân, tài liệu nội bộ, đường dẫn repo riêng tư, ảnh đồng nghiệp, thông tin khách hàng, metrics không có nguồn.

## 8. UX & giao diện — design brief cho Giai đoạn 2

- Hướng: **Modern Professional × Engineering** — dễ đọc như hồ sơ nghề nghiệp, đủ cá tính công nghệ, tránh giao diện hacker quá tối hoặc hiệu ứng lấn át nội dung.
- Hero phải trả lời nhanh: tôi là ai → tôi làm được gì → tôi có minh chứng gì → liên hệ/CV ở đâu.
- Điều hướng desktop rõ ràng, mobile có menu tối giản.
- Card dự án nhất quán; ảnh chỉ dùng khi có giá trị; fallback đẹp khi không có thumbnail.
- Motion có chủ đích, không gây khó đọc hoặc giảm hiệu năng.
- Chưa chốt palette, typography, hình đại diện, ảnh nền, layout cụ thể: đây là quyết định của Giai đoạn 2.

## 9. Stack đã thống nhất ở mức sản phẩm

- Astro + TypeScript strict; Tailwind CSS; Content Collections và Markdown/MDX khi cần.
- Static build; GitHub + CI; hosting tĩnh qua Cloudflare hoặc lựa chọn tương đương.
- Client-side JS chỉ cho các phần tương tác nhỏ. React không là dependency mặc định.
- Không bắt buộc backend, database, Docker hoặc CMS.

Lý do: đáp ứng nhu cầu content-driven và prerender các route tĩnh, dễ mở rộng nội dung có schema. API được xác nhận tại tài liệu Astro chính thức: https://docs.astro.build/en/guides/content-collections/ .

## 10. Yêu cầu có thể nghiệm thu

| ID | Ưu tiên | Tiêu chí |
|---|---|---|
| AC-01 | Must | Header/Hero cho biết chủ sở hữu và 3 hướng nghề nghiệp một cách rõ ràng. |
| AC-02 | Must | Có About, Skills, Experience, Featured Projects, Contact trên homepage. |
| AC-03 | Must | Mọi dự án public có trang chi tiết với URL ổn định. |
| AC-04 | Must | Dự án có trạng thái; project chưa triển khai không bị mô tả thành đã hoàn thành. |
| AC-05 | Must | Thêm project mới không cần chỉnh component trình bày hoặc các trang liệt kê. |
| AC-06 | Must | Nội dung draft/private không xuất hiện ở bất cứ output public nào. |
| AC-07 | Must | Giao diện dùng được trên thiết bị nhỏ và điều hướng bằng bàn phím. |
| AC-08 | Must | Có title, description, canonical, social sharing preview, sitemap và 404. |
| AC-09 | Must | Typecheck, production build và các smoke test quan trọng chạy thành công. |
| AC-10 | Must | Không có link CV/Contact rỗng hoặc dẫn đến tài liệu chưa được duyệt. |
| AC-11 | Must | Không công bố thông tin cá nhân và dữ liệu nội bộ trái phép. |
| AC-12 | Must | Có hướng dẫn thêm/sửa project, experience và resume trong README. |
| AC-13 | Should | Trang có trải nghiệm chấp nhận được khi tắt JavaScript (ngoại trừ tương tác phụ). |
| AC-14 | Should | Tôn trọng `prefers-reduced-motion`; tối ưu ảnh và font. |
| AC-15 | Should | Có thể bổ sung nội dung hoặc track mà không thay đổi cấu trúc tổng thể. |

## 11. Kế hoạch phát triển theo cổng nghiệm thu

1. **Giai đoạn 1: Specification** — thống nhất yêu cầu, phạm vi MVP, thông tin công khai, nguyên tắc mở rộng. **APPROVED — 2026-10-31.**
2. **Giai đoạn 2: UI/UX Prototype** — thiết kế desktop/mobile, component và visual direction; review giao diện trước khi mở rộng. **IN PROGRESS — chờ nghiệm thu prototype.**
3. **Giai đoạn 3: Content System** — schema, collections, dữ liệu-driven pages, project routes.
4. **Giai đoạn 4: Real Content** — chuẩn hóa kinh nghiệm, kỹ năng, dự án và CV theo bằng chứng thật.
5. **Giai đoạn 5: Quality & Deployment** — SEO, a11y, performance, tests, CI, domain, HTTPS.
6. **Giai đoạn 6: Iteration** — chỉ phát triển writing, filtering, i18n, CMS, AI features khi có nhu cầu.

**Quy tắc quyết định:** Không tự chuyển giai đoạn khi chưa có kết luận nghiệm thu từ chủ sở hữu. Codex triển khai task giới hạn; trả về files changed, tests checked, remaining issues; chủ sở hữu quyết định tiếp tục.

## 12. Các quyết định sẽ xác minh trong Giai đoạn 2 và Giai đoạn 4

Các mặc định (tên Hồ Văn Dinh; tiếng Việt cho MVP; không bắt buộc ảnh chân dung; Modern Professional × Engineering) được chấp nhận để bắt đầu thiết kế. Các mục liên quan quyền công khai thông tin và tài sản **vẫn cần duyệt riêng trước khi phát hành**.

1. Tên/wordmark công khai (mặc định đề xuất: **Hồ Văn Dinh**).
2. Ngôn ngữ bản đầu (đề xuất: tiếng Việt, cấu trúc sẵn sàng thêm tiếng Anh nhưng chưa triển khai i18n).
3. Có đăng ảnh chân dung hay không (có thể triển khai đẹp mà không cần ảnh).
4. Liên kết công khai được phép: GitHub, LinkedIn, email, số điện thoại và các phiên bản CV.
5. Danh sách dự án được phép public, đặc biệt là SGOD/ChatSystem.
6. Hướng thẩm mỹ cuối cùng: chọn trong Giai đoạn 2 bằng prototype, không tự suy diễn giao diện của website tham khảo.

## 13. Definition of Done — Giai đoạn 1

- [x] Xác định mục tiêu, đối tượng và định vị.
- [x] Phân định Must / Should và ngoài phạm vi.
- [x] Xác định information architecture và nguyên tắc bảo trì.
- [x] Lập danh sách nội dung cần xác minh và chính sách publication.
- [x] Xác định acceptance criteria kiểm chứng được.
- [x] Chủ sở hữu đọc và **APPROVE** baseline yêu cầu ngày 2026-10-31.

**Bản ghi phê duyệt:** Người dùng đã xác nhận “chốt giai đoạn 1” ngày 2026-10-31. Bản v0.1 này là baseline. Mọi thay đổi phạm vi quan trọng từ đây cần ghi rõ thay đổi và có sự đồng ý của người dùng. Việc duyệt tài liệu **không đồng nghĩa cấp phép công khai** số điện thoại, ngày sinh, email, dữ liệu SGOD/ChatSystem, repos, nội dung nội bộ hoặc các đường dẫn chưa được xác nhận.
