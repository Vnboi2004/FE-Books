import MainLayout from "../../components/layout/MainLayout"
import avatar from '../../assets/images/AvatarMe.jpg';
import JavaScriptImage from '../../assets/images/js.svg';
import ReactImage from '../../assets/images/react.svg';
import ReactRouterImage from '../../assets/images/ReactRouter.svg';
import ViteImage from '../../assets/images/Vitejs-logo.svg.png';
import AxiosImage from '../../assets/images/Axios.svg';
import SwiperImage from '../../assets/images/swiper-logo.svg';
import MotionImage from '../../assets/images/motion.png';


const About = () => {
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
                        <div>
                            <div className="border border-outline-variant rounded-3xl p-6 flex flex-col items-center">
                                <img src={JavaScriptImage} alt="" className="w-[123px] h-[123px] object-contain"/>
                                <h1 className="text-on-surface font-semibold text-center mt-4">JavaScript</h1>
                            </div>
                        </div>
                        {/* Card ReactJS */}
                        <div>
                            <div className="border border-outline-variant rounded-3xl p-6 flex flex-col items-center">
                                <img src={ReactImage} alt="" className="w-[123px] h-[123px] object-contain"/>
                                <h1 className="text-on-surface font-semibold text-center mt-4">React</h1>
                            </div>
                        </div>
                        {/* Card Vite */}
                        <div>
                            <div className="border border-outline-variant rounded-3xl p-6 flex flex-col items-center">
                                <img src={ViteImage} alt="" className="w-[123px] h-[123px] object-contain"/>
                                <h1 className="text-on-surface font-semibold text-center mt-4">Vite</h1>
                            </div>
                        </div>
                        {/* React Router */}
                        <div>
                            <div className="border border-outline-variant rounded-3xl p-6 flex flex-col items-center">
                                <img src={ReactRouterImage} alt="" className="w-[123px] h-[123px] object-contain"/>
                                <h1 className="text-on-surface font-semibold text-center mt-4">React Router</h1>
                            </div>
                        </div>
                        {/* Card Axios */}
                        <div>
                            <div className="border border-outline-variant rounded-3xl p-6 flex flex-col items-center">
                                <img src={AxiosImage} alt="" className="w-[123px] h-[123px] object-contain"/>
                                <h1 className="text-on-surface font-semibold text-center mt-4">Axios</h1>
                            </div>
                        </div>
                        {/* Card Swiper */}
                        <div>
                            <div className="border border-outline-variant rounded-3xl p-6 flex flex-col items-center">
                                <img src={SwiperImage} alt="" className="w-[123px] h-[123px] object-contain"/>
                                <h1 className="text-on-surface font-semibold text-center mt-4">Swiper</h1>
                            </div>
                        </div>
                        {/* Card Motion */}
                        <div>
                            <div className="border border-outline-variant rounded-3xl p-6 flex flex-col items-center">
                                <img src={MotionImage} alt="" className="w-[123px] h-[123px] object-contain"/>
                                <h1 className="text-on-surface font-semibold text-center mt-4">Motion</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tính năng */}
                <div className="mb-28"></div>
                {/* Hướng phát triển */}
                <div className="mb-28"></div>
                {/* Liên hệ */}
                <div className="mb-28"></div>
            </div>
        </MainLayout>
    )
}

export default About
