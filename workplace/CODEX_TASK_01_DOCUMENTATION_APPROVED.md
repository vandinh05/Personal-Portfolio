# Codex Task 01 — Repository documentation setup (APPROVED baseline)

**Mục tiêu:** Chuẩn bị tài liệu và quy tắc làm việc trong repository trống (hoặc hiện có). **Chỉ documentation**. Không lập trình website ở task này.

## Đầu vào

- `PRODUCT_SPEC_v0.1_APPROVED.md` — nguồn yêu cầu đã phê duyệt.
- `PHASE_2_UIUX_BRIEF_v0.1.md` — hướng thiết kế đề xuất để làm prototype, chưa được nghiệm thu.

## Việc cần làm

1. Đặt hai tài liệu trên vào `docs/` trong repo, bảo toàn nội dung và trạng thái.
2. Tạo `README.md` ngắn: mục tiêu website, trạng thái Phase 1 APPROVED / Phase 2 in progress, cách xem tài liệu và workflow Codex → user review.
3. Tạo `AGENTS.md` thật gọn: chỉ sửa phạm vi task; không overengineer; không bịa thông tin/thành tích; không công khai thông tin/dự án chưa được duyệt; tách nội dung khỏi UI; không thêm backend/CMS/database/auth/Docker; không tự chuyển phase; báo cáo thay đổi và kiểm chứng.
4. Ghi danh sách các mục còn cần xác minh trước khi public (ảnh, links liên hệ/CV, SGOD, chi tiết Experience) trong `docs/OPEN_DECISIONS.md`.

## Không làm

- Không scaffold Astro, không tạo UI, không cài dependency, không lập kiến trúc phức tạp.
- Không sửa hay đụng tới thư mục source của dự án khác.

## Báo cáo

- File created/changed; nội dung tóm tắt; việc chưa làm.
- Không tự chạy Task 02A.
