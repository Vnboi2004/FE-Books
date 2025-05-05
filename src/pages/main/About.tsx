import MainLayout from "../../components/layout/MainLayout"
import avatar from '../../assets/images/AvatarMe.jpg';
import JavaScriptImage from '../../assets/images/js.svg';
import TypeScriptImage from '../../assets/images/TypeScript.png';
import TailwindCSSImage from '../../assets/images/TailwindCSS.svg';
import ReactImage from '../../assets/images/react.svg';
import ReactRouterImage from '../../assets/images/ReactRouter.svg';
import ViteImage from '../../assets/images/Vitejs-logo.svg.png';
import AxiosImage from '../../assets/images/Axios.svg';
import SwiperImage from '../../assets/images/swiper-logo.svg';
import MotionImage from '../../assets/images/motion.png';
import { useEffect, useRef, useState } from "react";

type PointId = '1' | '2' | '3' | '4' | '5' | '6' | '7'; // Các id của các điểm trong đồ thị
type Connection = {
    from: PointId;
    to: PointId;
};

const maxWidth = 1024; // Giới hạn chiều rộng tối đa của container
const maxHeight = 911; // Giới hạn chiều cao tối đa của container
const sizeContainer = 300; // Kích thước của container

const points: { id: string, x: number, y: number, label: string }[] = [
    { id: '1', x: maxWidth / 2, y: maxHeight / 2, label: 'Main Features' }, // Title
    // Left side
    { id: '2', x: 0, y: 0, label: 'View book list by categories' },
    { id: '3', x: 100, y: maxHeight / 2, label: 'Read books online' },
    { id: '4', x: 0, y: maxHeight, label: 'Search for books by keyword' },
    // Right side
    { id: '5', x: maxWidth, y: 0, label: 'Responsive layout for mobile and desktop' },
    { id: '6', x:maxWidth, y: maxHeight / 2, label: 'Table ABC' },
    { id: '7', x: maxWidth, y: maxHeight, label: 'Mobile DEF' },
];

const connections: Connection[] = [
    { from: '1', to: '2' },
    { from: '1', to: '3' },
    { from: '1', to: '4' },
    { from: '1', to: '5' },
    { from: '1', to: '6' },
    { from: '1', to: '7' },
];

const About = () => {
    const refs = useRef<Record<PointId, HTMLDialogElement | null>>({ 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null });
    const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number; id: string}[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const updateLines = () => {
          const containerRect = containerRef.current?.getBoundingClientRect();
          if (!containerRect) return;
      
          const newLines = connections.map(({ from, to }) => {
            const fromEl = refs.current[from];
            const toEl = refs.current[to];
            if (fromEl && toEl) {
              const fromRect = fromEl.getBoundingClientRect();
              const toRect = toEl.getBoundingClientRect();
              return {
                id: `${from}-${to}`,
                x1: fromRect.left + fromRect.width / 2 - containerRect.left,
                y1: fromRect.top + fromRect.height / 2 - containerRect.top,
                x2: toRect.left + toRect.width / 2 - containerRect.left,
                y2: toRect.top + toRect.height / 2 - containerRect.top,
              };
            }
            return null;
          }).filter(Boolean) as any[];
          setLines(newLines);
        };
      
        updateLines();
        window.addEventListener('resize', updateLines);
        return () => window.removeEventListener('resize', updateLines);
      }, []);


    return (
        <MainLayout>
            <div className="w-full py-16">
                {/* Giới thiệu */}
                <div className="mb-28">
                    <div className="grid grid-cols-2 gap-4 items-center justify-items-end">
                        {/* Text content */}
                        <div className="flex flex-col gap-8">
                            {/* Title */}
                            <h1 className="text-4xl text-inverse-surface font-bold">About This Project</h1>
                            {/* Description */}
                            <p className="text-sm text-on-surface-variant leading-7">
                                This is a personal project built with the goal of creating a user-friendly, 
                                free online reading platform for everyone.As a self-taught developer, 
                                I created this platform not only to improve my frontend development skills 
                                but also to solve a real-world problem — providing easy access to reading for those 
                                who enjoy books but prefer digital platforms.Through this project, I’ve worked with modern 
                                technologies like React, TypeScript, Tailwind CSS, and Vite to deliver a fast and responsive 
                                user experience. Every feature was carefully crafted to make reading more accessible and enjoyable.
                            </p>
                        </div>
                        {/* Image */}
                        <img src={avatar} alt="" className="w-[350px] h-auto object-cover border border-outline-variant rounded-3xl shadow-navigation"/>
                    </div>
                </div>
                {/* Mục tiêu */}
                <div className="mb-28">
                    <div className="grid grid-cols-2 gap-4 items-center">
                        {/* Image */}
                        <img src={avatar} alt="" className="w-[350px] h-auto object-cover border border-outline-variant rounded-3xl shadow-navigation"/>
                        {/* Text content */}
                        <div className="flex flex-col gap-8">
                            {/* Title */}
                            <h1 className="text-4xl text-inverse-surface font-bold">Project Goal</h1>
                            {/* Description */}
                            <p className="text-sm text-on-surface-variant leading-7">
                                My aim is to develop a simple and effective website where users can easily 
                                read and search for their favorite books directly in the browser, while also 
                                improving my frontend development skills through real-world experience.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Công nghệ sử dụng */}
                <div className="mb-28">
                    <h1 className="text-5xl text-center text-inverse-surface font-bold">Technologies Used</h1>
                    <div className="grid grid-cols-4 gap-8 mt-12">
                        {/* Card JavaScript */}
                        <a href="https://www.javascript.com/">
                            <div className="border border-outline-variant rounded-3xl p-6 flex flex-col items-center hover:shadow-js duration-200 transition-all ease-linear">
                                <img src={JavaScriptImage} alt="" className="w-[123px] h-[123px] object-contain"/>
                                <h1 className="text-on-surface font-semibold text-center mt-4">JavaScript</h1>
                            </div>
                        </a>
                        {/* Type script */}
                        <a href="https://www.javascript.com/">
                            <div className="border border-outline-variant rounded-3xl p-6 flex flex-col items-center hover:shadow-typeScript duration-200 transition-all ease-linear">
                                <img src={TypeScriptImage} alt="" className="w-[123px] h-[123px] object-contain"/>
                                <h1 className="text-on-surface font-semibold text-center mt-4">TypeScript</h1>
                            </div>
                        </a>
                        {/* TailwindCSS */}
                        <a href="https://www.javascript.com/">
                            <div className="border border-outline-variant rounded-3xl p-6 flex flex-col items-center hover:shadow-tailwindCSS duration-200 transition-all ease-linear">
                                <img src={TailwindCSSImage} alt="" className="w-[123px] h-[123px] object-contain"/>
                                <h1 className="text-on-surface font-semibold text-center mt-4">TailwindCSS</h1>
                            </div>
                        </a>
                        {/* Card ReactJS */}
                        <a href="https://react.dev/">
                            <div className="border border-outline-variant rounded-3xl p-6 flex flex-col items-center hover:shadow-react duration-200 transition-all ease-linear">
                                <img src={ReactImage} alt="" className="w-[123px] h-[123px] object-contain"/>
                                <h1 className="text-on-surface font-semibold text-center mt-4">React</h1>
                            </div>
                        </a>
                        {/* Card Vite */}
                        <a href="https://vite.dev/">
                            <div className="border border-outline-variant rounded-3xl p-6 flex flex-col items-center hover:shadow-vite duration-200 transition-all ease-linear">
                                <img src={ViteImage} alt="" className="w-[123px] h-[123px] object-contain"/>
                                <h1 className="text-on-surface font-semibold text-center mt-4">Vite</h1>
                            </div>
                        </a>
                        {/* React Router */}
                        <a href="https://reactrouter.com/">
                            <div className="border border-outline-variant rounded-3xl p-6 flex flex-col items-center hover:shadow-router duration-200 transition-all ease-linear">
                                <img src={ReactRouterImage} alt="" className="w-[123px] h-[123px] object-contain"/>
                                <h1 className="text-on-surface font-semibold text-center mt-4">React Router</h1>
                            </div>
                        </a>
                        {/* Card Axios */}
                        <a href="https://axios-http.com/">
                            <div className="border border-outline-variant rounded-3xl p-6 flex flex-col items-center hover:shadow-axios duration-200 transition-all ease-linear">
                                <img src={AxiosImage} alt="" className="w-[123px] h-[123px] object-contain"/>
                                <h1 className="text-on-surface font-semibold text-center mt-4">Axios</h1>
                            </div>
                        </a>
                        {/* Card Swiper */}
                        <a href="https://swiperjs.com/">
                            <div className="border border-outline-variant rounded-3xl p-6 flex flex-col items-center hover:shadow-swiper duration-200 transition-all ease-linear">
                                <img src={SwiperImage} alt="" className="w-[123px] h-[123px] object-contain"/>
                                <h1 className="text-on-surface font-semibold text-center mt-4">Swiper</h1>
                            </div>
                        </a>
                        {/* Card Motion */}
                        <a href="https://motion.dev/">
                            <div className="border border-outline-variant rounded-3xl p-6 flex flex-col items-center hover:shadow-motion duration-200 transition-all ease-linear">
                                <img src={MotionImage} alt="" className="w-[123px] h-[123px] object-contain"/>
                                <h1 className="text-on-surface font-semibold text-center mt-4">Motion</h1>
                            </div>
                        </a>
                    </div>
                </div>
                {/* Tính năng */}
                <div className="mb-28">
                    <div className="relative w-full h-screen" ref={containerRef}>
                        {points.map((point) => (
                            <div
                                key={point.id}
                                ref={(el) => (refs.current[point.id] = el)}
                                className="absolute px-6 py-10 bg-surface-1 text-on-surface border border-outline-variant rounded-3xl z-[1]"
                                style={{ top: point.y, left: point.x }}
                            >
                                {point.label} {/* Hiển thị label thay vì id */}
                            </div>
                        ))}
                        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-[0]">
                            {lines.map((line) => (
                                <line
                                    key={line.id}
                                    x1={line.x1}
                                    y1={line.y1}
                                    x2={line.x2}
                                    y2={line.y2}
                                    stroke="gray"
                                    strokeWidth="2"
                                />
                            ))}
                        </svg>
                    </div>
                </div>

                {/* Hướng phát triển */}
                <div className="mb-28">

                </div>
                {/* Liên hệ */}
                <div className="mb-28"></div>
            </div>
        </MainLayout>
    )
}

export default About
