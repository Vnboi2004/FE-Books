import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";
const Footer = () => {
    return (
        <div>
            {/* Contact */}
            <div className="bg-surface-2">
                <div className="py-10">
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl text-inverse-surface font-semibold">Follow us on</h1>
                        <div className="flex items-center gap-4 py-6">
                            <a href="" className="text-primary p-2 border border-outline-variant rounded-md group hover:bg-primary duration-200 transition-all">
                                <FaFacebookF className="group-hover:text-on-primary"/>
                            </a>
                            <a href="" className="text-primary p-2 border border-outline-variant rounded-md group hover:bg-primary duration-200 transition-all">
                                <BiLogoInstagramAlt className="group-hover:text-on-primary"/>
                            </a>
                            <a href="" className="text-primary p-2 border border-outline-variant rounded-md group hover:bg-primary duration-200 transition-all">
                                <IoLogoGithub className="group-hover:text-on-primary"/>
                            </a>
                            <a href="" className="text-primary p-2 border border-outline-variant rounded-md group hover:bg-primary duration-200 transition-all">
                                <MdEmail className="group-hover:text-on-primary"/>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex-1 border-t border-outline-variant"></div>
                        <span className="mx-2 text-on-surface-variant text-sm">2025 © Books by Truong Phuoc Hung</span>
                        <div className="flex-1 border-t border-outline-variant"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
