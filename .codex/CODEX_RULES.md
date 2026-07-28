# Codex Project Rules

Tài liệu này là quy chuẩn bắt buộc cho mọi lần chỉnh sửa code trong dự án KOL Summit.

## 1. Trình tự làm việc

1. Luôn đọc file này trước khi bắt đầu sửa code.
2. Kiểm tra ảnh hưởng đến font chữ, cỡ chữ, spacing, responsive và layout trước khi thay đổi.
3. Ưu tiên tái sử dụng rule sẵn có trong hệ thống thay vì thêm giá trị rời rạc mới.
4. Chỉ chỉnh đúng phần liên quan đến yêu cầu, tránh làm lệch hệ thống UI đang có.

## 2. Quy chuẩn typography

1. Chỉ dùng bộ font đã khai báo trong `src/index.css`.
2. Font body mặc định là `SVN-Apparat`.
3. Font tiêu đề/display dùng cùng hệ font hiện tại, không tự ý thêm font mới nếu chưa có yêu cầu.
4. Hạn chế dùng giá trị font-size tùy biến bằng ngoặc vuông `text-[...]` nếu đã có class Tailwind chuẩn phù hợp.
5. Khi cần thêm size mới, phải xác định rõ vai trò của nó trong hệ thống:
   - body text
   - label / caption
   - title nhỏ
   - title lớn
   - hero / display

## 3. Quy chuẩn cỡ chữ

1. Cỡ chữ phải đi theo một thang scale nhất quán.
2. Không tự phát sinh nhiều mức lẻ nếu cùng ngữ nghĩa đã có size chuẩn.
3. Nếu một khu vực dùng size riêng, phải có lý do rõ ràng như hero, statistic, marquee, hoặc hiệu ứng đặc biệt.
4. Ưu tiên dùng cùng pattern giữa các section có vai trò giống nhau.
5. Khi sửa font-size, cần kiểm tra luôn:
   - line-height
   - font-weight
   - tracking / letter-spacing
   - độ cân đối trên mobile và desktop

## 4. Quy chuẩn kỹ thuật

1. Không đổi kiến trúc component nếu chưa cần thiết.
2. Không thêm dependency mới nếu chưa thật sự cần.
3. Giữ code dễ đọc, dễ bảo trì, dễ đồng bộ về sau.
4. Nếu phát hiện lỗi thiết kế hệ thống, ghi chú rõ trước khi sửa.

## 5. Khi có yêu cầu mới

1. Đọc file này trước.
2. Xác định component hoặc file liên quan.
3. Đánh giá ảnh hưởng tới typography, responsive, spacing, và UI consistency.
4. Sau đó mới tiến hành code.

