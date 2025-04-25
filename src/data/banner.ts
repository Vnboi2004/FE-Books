import { bannerTypes } from "../types";
import imageHistory from '../assets/images/History.jpg';
import imageArt from "../assets/images/Art.jpg";
import imageTechnology from "../assets/images/Technology.jpg";
import imageBiography from "../assets/images/Biography.avif";

export const banners: bannerTypes[] = [
    { id: 1, category: "Lịch sử", image: imageHistory },
    { id: 2, category: "Nghệ thuật", image: imageArt },
    { id: 3, category: "Công Nghệ", image: imageTechnology },
    { id: 5, category: "Tiểu sử", image: imageBiography },
    { id: 6, category: "Y tế", image: imageBiography },
    { id: 7, category: "Viễn tưởng", image: imageBiography },
    { id: 8, category: "Khoa học", image: imageBiography },
    { id: 9, category: "Kinh doanh", image: imageBiography },
    { id: 10, category: "Du lịch", image: imageBiography },
    { id: 11, category: "Tôn giáo", image: imageBiography },
    { id: 12, category: "Thơ", image: imageBiography },
];