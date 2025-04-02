import { ReactNode } from "react"
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
    children: ReactNode;
};

 
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header/>
            <main className="flex-grow max-w-[var(--container-width-lg)] mx-auto">{children}</main>
            <Footer/>
        </div>
    )
}

export default MainLayout
