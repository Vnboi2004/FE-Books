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

type PointId = 'A' | 'B' | 'C' | 'D';
type Connection = {
    from: PointId;
    to: PointId;
};

const points: { id: PointId, x: number, y: number}[] = [
    { id: 'A', x: 50, y: 100 },
    { id: 'B', x: 400, y: 150 },
    { id: 'C', x: 200, y: 300 },
    { id: 'D', x: 600, y: 400 },
];

const connections: Connection[] = [
    { from: 'A', to: 'B' },
    { from: 'A', to: 'C' },
    { from: 'B', to: 'D' },
];

const About = () => {
    const refs = useRef<Record<PointId, HTMLDialogElement | null>>({ A: null, B: null, C: null, D: null});
    const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number; id: string}[]>([]);

    useEffect(() => {
        const updateLines = () => {
          const newLines = connections.map(({ from, to }) => {
            const fromEl = refs.current[from];
            const toEl = refs.current[to];
            if (fromEl && toEl) {
              const fromRect = fromEl.getBoundingClientRect();
              const toRect = toEl.getBoundingClientRect();
              return {
                id: `${from}-${to}`,
                x1: fromRect.left + fromRect.width / 2,
                y1: fromRect.top + fromRect.height / 2,
                x2: toRect.left + toRect.width / 2,
                y2: toRect.top + toRect.height / 2,
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
                    <div className="relative w-full h-screen">
                        {points.map((point) => (
                            <div
                            key={point.id}
                            ref={(el) => (refs.current[point.id] = el)}
                            className="absolute w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center"
                            style={{ top: point.y, left: point.x }}
                          >
                            {point.id}
                          </div>
                        ))}
                        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
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
                <div className="mb-28"></div>
                {/* Liên hệ */}
                <div className="mb-28"></div>
            </div>
        </MainLayout>
    )
}

export default About
