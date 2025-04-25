import { 
    ArtSection, 
    HistorySection, 
    TechnologySection, 
    BiographySection, 
    FictionSection, 
    MedicalSection 
} from "../../components/BookSections";
import Banner from "../../components/layout/Banner";
import MainLayout from "../../components/layout/MainLayout"
import { IoSearchOutline } from "react-icons/io5";

 const Home = () => { 
    return (
        <MainLayout>
            {/* Search book */}
            <div className="pt-16 flex justify-center">
                <div className="relative w-full max-w-xl">
                    <input type="search" placeholder="Search book at here..." className="outline-none bg-slate-100 px-4 py-2.5 rounded-full w-full"/>
                    <button className="absolute p-2 rounded-full top-1/2 -translate-y-1/2 right-2 bg-primary text-on-primary 
                        cursor-pointer hover:bg-primary-shade hover:no-underline duration-200 transition-all ease-linear">
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
            {/* Fiction */}
            <FictionSection/>
            {/* Medical */}
            <MedicalSection/>
            {/* Biography */}
            <BiographySection/>
            {/* Banner */}
            <Banner/>

        </MainLayout>
    )
}

export default Home
