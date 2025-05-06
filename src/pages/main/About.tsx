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
import { FaUser } from "react-icons/fa";
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import { FaCommentDots } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { BsFillClockFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
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
                    <h1 className="text-5xl text-center text-inverse-surface font-bold">Main Features</h1>
                    <div className="bg-surface-1 w-full h-auto px-18 py-14 mt-14 rounded-3xl flex flex-col gap-6">
                        <div className="bg-surface-2 px-6 py-2 rounded-xl relative">
                            {/* Text */}
                            <h1 className="text-on-surface text-xl font-bold mb-2">View Book List by Categories</h1>
                            <p className="text-base text-on-surface-variant">
                                Easily browse books organized by categories such as novels, self-help, science, and more.
                                This helps users find books that match their interests faster.
                            </p>
                            {/* List icons */}
                            <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                        </div>
                        <div className="bg-surface-2 px-6 py-2 rounded-xl relative">
                            {/* Text */}
                            <h1 className="text-on-surface text-xl font-bold mb-2">Read Books Online</h1>
                            <p className="text-base text-on-surface-variant">
                                Access the full content of each book directly on the website. The book detail page provides 
                                a clean and readable layout for an enjoyable reading experience.
                            </p>
                            {/* List icons */}
                            <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                        </div>
                        <div className="bg-surface-2 px-6 py-2 rounded-xl relative">
                            {/* Text */}
                            <h1 className="text-on-surface text-xl font-bold mb-2">Search for Books</h1>
                            <p className="text-base text-on-surface-variant">
                                Quickly find books by typing keywords in the search bar. The feature supports title, author, 
                                or genre matching.
                            </p>
                            {/* List icons */}
                            <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                        </div>
                        <div className="bg-surface-2 px-6 py-2 rounded-xl relative">
                            {/* Text */}
                            <h1 className="text-on-surface text-xl font-bold mb-2">Responsive Layout</h1>
                            <p className="text-base text-on-surface-variant">
                                The interface adapts smoothly to different screen sizes, providing a seamless experience on 
                                both desktop and mobile devices..
                            </p>
                            {/* List icons */}
                            <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                        </div>
                    </div>
                </div>
                {/* Hướng phát triển */}
                <div className="mb-28">
                    {/* Title */}
                    <h1 className="text-5xl text-center text-inverse-surface font-bold">Future Plans</h1>
                    {/* Content */}
                    <div className="mt-14 grid grid-cols-3 gap-8">
                        {/* Cols 1 */}
                        <div className="flex flex-col gap-6">
                            {/* Card 1 */}
                            <div className="grid grid-cols-[auto_1fr] items-start gap-4 bg-surface-1 p-6 rounded-3xl border border-outline-variant shadow-navigation">
                                {/* Icon */}
                                <div className="bg-primary-container p-4 rounded-xl flex flex-col justify-start">
                                    <FaUser className="text-on-surface text-3xl"/>
                                </div>
                                {/* Text */}
                                <div>
                                    <h1 className="text-on-surface text-xl font-bold mb-2">User Accounts</h1>
                                    <p className="text-base text-on-surface-variant">
                                        Implement a secure login and registration system so that users can create personal accounts, 
                                        manage their preferences, and store their reading history.
                                    </p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="grid grid-cols-[auto_1fr] items-start gap-4 bg-surface-1 p-6 rounded-3xl border border-outline-variant shadow-navigation">
                                {/* Icon */}
                                <div className="bg-primary-container p-4 rounded-xl flex flex-col justify-start">
                                    <FaRegFaceKissWinkHeart className="text-on-surface text-3xl"/>
                                </div>
                                {/* Text */}
                                <div>
                                    <h1 className="text-on-surface text-xl font-bold mb-2">Favorite Book Collections</h1>
                                    <p className="text-base text-on-surface-variant">
                                        Allow users to save their favorite books into a personal collection or reading list, 
                                        making it easier to access and revisit books they love.
                                    </p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="grid grid-cols-[auto_1fr] items-start gap-4 bg-surface-1 p-6 rounded-3xl border border-outline-variant shadow-navigation">
                                {/* Icon */}
                                <div className="bg-primary-container p-4 rounded-xl flex flex-col justify-start">
                                    <BsBookmarkCheckFill className="text-on-surface text-3xl"/>
                                </div>
                                {/* Text */}
                                <div>
                                    <h1 className="text-on-surface text-xl font-bold mb-2">Bookmark Pages</h1>
                                    <p className="text-base text-on-surface-variant">
                                        Users can bookmark specific pages in a book to return to them later with ease,
                                        making the reading experience more personalized and convenient.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Cols 2 */}
                        <div className="flex flex-col gap-8">
                            {/* Card 1 */}
                            <div className="grid grid-cols-[auto_1fr] items-start gap-4 bg-surface-1 p-6 rounded-3xl border border-outline-variant shadow-navigation">
                                {/* Icon */}
                                <div className="bg-primary-container p-4 rounded-xl flex flex-col justify-start">
                                    <GrInProgress className="text-on-surface text-3xl"/>
                                </div>
                                {/* Text */}
                                <div>
                                    <h1 className="text-on-surface text-xl font-bold mb-2">Reading Progress Tracking</h1>
                                    <p className="text-base text-on-surface-variant">
                                        Save the user's current reading position in each book so they can easily continue where 
                                        they left off, even on different devices.
                                    </p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="grid grid-cols-[auto_1fr] items-start gap-4 bg-surface-1 p-6 rounded-3xl border border-outline-variant shadow-navigation">
                                {/* Icon */}
                                <div className="bg-primary-container p-4 rounded-xl flex flex-col justify-start">
                                    <FaCommentDots className="text-on-surface text-3xl"/>
                                </div>
                                {/* Text */}
                                <div>
                                    <h1 className="text-on-surface text-xl font-bold mb-2">Comment & Rating System</h1>
                                    <p className="text-base text-on-surface-variant">
                                        Enable users to leave comments and rate books to help other readers discover 
                                        high-quality content and share opinions.
                                    </p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="grid grid-cols-[auto_1fr] items-start gap-4 bg-surface-1 p-6 rounded-3xl border border-outline-variant shadow-navigation">
                                {/* Icon */}
                                <div className="bg-primary-container p-4 rounded-xl flex flex-col justify-start">
                                    <MdLanguage className="text-on-surface text-3xl"/>
                                </div>
                                {/* Text */}
                                <div>
                                    <h1 className="text-on-surface text-xl font-bold mb-2">Multilingual Support</h1>
                                    <p className="text-base text-on-surface-variant">
                                        Add support for multiple languages (e.g., Vietnamese and English) 
                                        to reach a wider audience and enhance accessibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Cols 3*/}
                        <div className="flex flex-col gap-8">
                            {/* Card 1 */}
                            <div className="grid grid-cols-[auto_1fr] items-start gap-4 bg-surface-1 p-6 rounded-3xl border border-outline-variant shadow-navigation">
                                {/* Icon */}
                                <div className="bg-primary-container p-4 rounded-xl flex flex-col justify-start">
                                    <RiComputerFill className="text-on-surface text-3xl"/>
                                </div>
                                {/* Text */}
                                <div>
                                    <h1 className="text-on-surface text-xl font-bold mb-2">Multidevice Sync</h1>
                                    <p className="text-base text-on-surface-variant">
                                        Users can continue reading seamlessly across different devices by syncing 
                                        their progress with their account.
                                    </p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="grid grid-cols-[auto_1fr] items-start gap-4 bg-surface-1 p-6 rounded-3xl border border-outline-variant shadow-navigation">
                                {/* Icon */}
                                <div className="bg-primary-container p-4 rounded-xl flex flex-col justify-start">
                                    <BsFillClockFill className="text-on-surface text-3xl"/>
                                </div>
                                {/* Text */}
                                <div>
                                    <h1 className="text-on-surface text-xl font-bold mb-2">Estimated Reading Time</h1>
                                    <p className="text-base text-on-surface-variant">
                                        Show an estimated reading time based on the book's length to help users 
                                        plan their reading sessions better.
                                    </p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="grid grid-cols-[auto_1fr] items-start gap-4 bg-surface-1 p-6 rounded-3xl border border-outline-variant shadow-navigation">
                                {/* Icon */}
                                <div className="bg-primary-container p-4 rounded-xl flex flex-col justify-start">
                                    <FaHistory className="text-on-surface text-3xl"/>
                                </div>
                                {/* Text */}
                                <div>
                                    <h1 className="text-on-surface text-xl font-bold mb-2">Recently Read Books</h1>
                                    <p className="text-base text-on-surface-variant">
                                        The platform keeps track of books the user recently opened, allowing quick 
                                        access to continue reading without searching again.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default About
