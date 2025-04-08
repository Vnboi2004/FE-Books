import { ArtSection, HistorySection, TechnologySection } from "../../components/BookSections";
import MainLayout from "../../components/layout/MainLayout"
import { IoSearchOutline } from "react-icons/io5";

 const Home = () => { 
    return (
        <MainLayout>
            {/* Search book */}
            <div className="py-10 flex justify-center">
                <div className="relative w-full max-w-xl">
                    <input type="search" placeholder="Search book at here..." className="outline-none bg-slate-100 px-4 py-2.5 rounded-full w-full"/>
                    <button className="absolute p-2 rounded-full top-1/2 -translate-y-1/2 right-2 bg-[#3E92CC] text-white cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out">
                        <IoSearchOutline/>  
                    </button>
                </div>
            </div>
            {/* Categories */}
            {/* History */}
            <HistorySection/>
            {/* Art */}
            <ArtSection/>
            {/* Technology */}
            <TechnologySection/>
            <h1>Ngon</h1>
        </MainLayout>
    )
}

export default Home
