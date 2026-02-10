# 🎬 Movie Discovery App - Ứng Dụng Khám Phá Phim

Đây là một ứng dụng web hiện đại giúp bạn khám phá, tìm kiếm và tìm hiểu thông tin về các bộ phim nổi tiếng từ khắp nơi trên thế giới.

## 📋 Mục Lục
- [Tính Năng](#tính-năng)
- [Công Nghệ Sử Dụng](#công-nghệ-sử-dụng)
- [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
- [Hướng Dẫn Sử Dụng](#hướng-dẫn-sử-dụng)
- [Cài Đặt](#cài-đặt)
- [Tính Năng Chi Tiết](#tính-năng-chi-tiết)

## ✨ Tính Năng

### 🔍 Tìm Kiếm Phim
- Tìm kiếm phim theo tên một cách nhanh chóng
- Kết quả tìm kiếm được cập nhật real-time khi bạn gõ
- Hỗ trợ tìm kiếm không phân biệt chữ hoa/thường

### 🎭 Lọc Theo Thể Loại
- Lọc phim theo các thể loại khác nhau (Action, Drama, Comedy, Sci-Fi, v.v.)
- Chọn hoặc bỏ chọn nhiều thể loại cùng một lúc
- Nút "Chọn tất cả" và "Bỏ chọn tất cả" để tiện lợi

### 📊 Sắp Xếp Phim
- Sắp xếp theo năm phát hành (mới nhất/cũ nhất)
- Sắp xếp theo tên phim (A-Z / Z-A)
- Tùy chọn sắp xếp linh hoạt

### 🌙 Chế Độ Tối
- Giao diện hỗ trợ chế độ sáng và chế độ tối
- Chuyển đổi chế độ bằng nút toggle ở góc trên cùng
- Tiết kiệm pin cho thiết bị và mắt khi sử dụng vào ban đêm

### 📱 Giao Diện Chi Tiết
- Modal hiển thị thông tin chi tiết từng phim:
  - Poster/hình ảnh phim
  - Năm phát hành
  - Thể loại
  - Đạo diễn
  - Diễn viên
  - Mô tả chi tiết
  - Xếp hạng sao

### 📊 Thống Kê
- Hiển thị số lượng phim được tìm thấy dựa trên bộ lọc
- Cập nhật số lượng theo thời gian thực

### 📱 Responsive Design
- Tương thích hoàn toàn với mọi kích thước màn hình
- Hiển thị tốt trên desktop, tablet và điện thoại di động

## 🛠️ Công Nghệ Sử Dụng

### Frontend
- **HTML5** - Cấu trúc trang web
- **CSS3** - Thiết kế giao diện với:
  - Gradient tuyệt đẹp
  - Animations mượt mà
  - Flexbox & Grid layout
  - Responsive design
- **JavaScript (Vanilla)** - Logic ứng dụng

### Thư Viện & Framework
- **Font Awesome 6.4.0** - Thư viện icon
- **Google Fonts** - Fonts Poppins & Roboto
- **CSS Grid & Flexbox** - Layout hiện đại

## 📁 Cấu Trúc Dự Án
movie-discovery-app/
├── index.html # File HTML chính
├── css/
│ └── style.css # Toàn bộ CSS và styling
├── js/
│ └── app.js # Logic JavaScript
├── images/ # Thư mục chứa poster phim
└── README.md # File này


## 💻 Hướng Dẫn Sử Dụng

### 1. Mở Ứng Dụng
- Mở file `index.html` trong trình duyệt web

### 2. Tìm Kiếm Phim
- Nhập tên phim vào ô tìm kiếm ở sidebar trái
- Ứng dụng sẽ lọc và hiển thị kết quả phù hợp

### 3. Lọc Theo Thể Loại
- Chọn/bỏ chọn các thể loại phim bạn quan tâm
- Danh sách phim sẽ tự động cập nhật

### 4. Sắp Xếp Phim
- Chọn tiêu chí sắp xếp từ dropdown ở trên cùng
- Các tùy chọn: Năm (mới/cũ), Tên (A-Z / Z-A)

### 5. Xem Chi Tiết Phim
- Click vào bất kỳ card phim nào để xem thông tin chi tiết
- Modal sẽ hiển thị tất cả thông tin về phim
- Click nút "Đóng" hoặc dấu X để đóng modal

### 6. Chuyển Đổi Chế Độ
- Click nút toggle "Dark Mode" ở góc trên cùng bên phải
- Giao diện sẽ chuyển sang chế độ tối/sáng

## ⚙️ Cài Đặt

### Yêu Cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Kết nối internet (để tải Google Fonts và Font Awesome)

### Bước Cài Đặt
1. **Tải về dự án**
   ```bash
   git clone <https://github.com/Nguyen-DucQuang/movie-discovery>
   cd movie-discovery-app
   Mở trong trình duyệt

Cách 1: Double-click file index.html
Cách 2: Click chuột phải → Open with → Chọn trình duyệt
Cách 3: Dùng Live Server (nếu có)
Hoàn tất!

Ứng dụng sẽ tải danh sách phim và sẵn sàng sử dụng
📋 Tính Năng Chi Tiết
Phần Sidebar (Bên Trái)
Thanh Tìm Kiếm: Nhập tên phim để tìm kiếm
Bộ Lọc Thể Loại: Danh sách các thể loại phim
Nút Hành Động: "Chọn tất cả" và "Bỏ chọn tất cả"
Thông Tin: Hiển thị số lượng phim được tìm thấy
Phần Main (Bên Phải)
Tiêu Đề & Sắp Xếp: Tên phần và tùy chọn sắp xếp
Grid Phim: Hiển thị các card phim dưới dạng lưới
Card Phim: Mỗi card hiển thị:
Poster phim
Xếp hạng sao
Overlay thông tin khi hover
Năm phát hành
Thể loại
Modal Chi Tiết
Poster: Hình ảnh phim
Thông Tin: Năm, thể loại, đạo diễn, diễn viên
Mô Tả: Tóm tắt nội dung phim
Xếp Hạng: Điểm đánh giá dưới dạng sao
🎨 Giao Diện & Thiết Kế
Màu Sắc Chính
Chế độ Sáng: Nền trắng, accent xanh tím
Chế độ Tối: Nền đen, accent sáng
Typography
Heading: Poppins (Bold)
Body: Roboto (Regular)
Font Sizes: Responsive và dễ đọc
Effects
Gradient đẹp mắt ở header
Hover effects mượt mà
Animations smooth
Shadow effects chuyên nghiệp
📊 Dữ Liệu Phim
Ứng dụng bao gồm danh sách 9 bộ phim nổi tiếng:

Inception (2010) - Sci-Fi, Action, Thriller
The Shawshank Redemption (1994) - Drama
The Dark Knight (2008) - Action, Crime, Drama
Parasite (2019) - Comedy, Drama, Thriller
The Godfather (1972) - Crime, Drama
Interstellar (2014) - Adventure, Drama, Sci-Fi
The Matrix (1999) - Action, Sci-Fi
Forrest Gump (1994) - Drama, Romance
Avengers: Endgame (2019) - Action, Adventure, Drama
...
🚀 Cách Phát Triển Thêm
Tính Năng Có Thể Thêm
⭐ Chức năng "Yêu Thích" hoặc "Bookmark"
💾 Lưu trữ dữ liệu dùng LocalStorage
🔗 Kết nối API phim thực (TMDB, OMDb)
🔐 Xác thực người dùng
💬 Hệ thống bình luận
⭐ Đánh giá phim của người dùng
Cải Tiến Hiệu Năng
📦 Tối ưu hóa hình ảnh
🔄 Lazy loading cho poster
⚡ Minify CSS/JS
🗜️ Gzip compression
📝 Giấy Phép
Dự án này được phát hành dưới giấy phép MIT. Bạn có thể sử dụng, sửa đổi và phân phối mã nguồn tự do.

👨‍💻 Tác Giả
Tên: Nguyễn Đức Quang
GitHub: github.com/Nguyen-DucQuang
Portfolio: nguyen-ducquang.github.io/newprofile
🤝 Đóng Góp
Nếu bạn muốn đóng góp cho dự án này:

Fork dự án
Tạo branch cho tính năng mới (git checkout -b feature/TenTinhNang)
Commit thay đổi (git commit -m 'Thêm tính năng mới')
Push lên branch (git push origin feature/TenTinhNang)
Mở Pull Request
❓ Hỏi Đáp
Làm sao để thêm phim mới?
Mở file js/app.js và thêm object phim vào mảng movies
Đảm bảo poster phim đã được lưu trong thư mục images/
Làm sao để thay đổi màu sắc?
Mở file css/style.css
Tìm phần :root và sửa giá trị các biến CSS
Hoặc sửa các giá trị màu trong body.dark-mode
Tại sao poster không hiển thị?
Kiểm tra đường dẫn ảnh trong dữ liệu phim
Đảm bảo file ảnh tồn tại trong thư mục images/
Kiểm tra tên file và phần mở rộng
Làm sao để sử dụng API thực?
Đăng ký account tại themoviedb.org
Lấy API key
Sửa file app.js để fetch dữ liệu từ API
📞 Liên Hệ & Hỗ Trợ
Nếu bạn gặp vấn đề hoặc có câu hỏi:

📧 Email: [sssquang992@gmail.com]
🐛 Report bug: Tạo issue trên GitHub
💡 Gợi ý: Gửi pull request hoặc discussion

🙏 Cảm Ơn
Cảm ơn bạn đã sử dụng Movie Discovery App! Hy vọng ứng dụng này giúp bạn khám phá thế giới điện ảnh thú vị.  
