import axios from "axios";

// Tạo một instance cấu hình mặc định
const axiosClient = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1', // cấu hình địa chỉ gốc cho tất cả request
    headers: {
        'Content-Type': 'application/json', // Gửi nội dung type json
    },
});

export default axiosClient;