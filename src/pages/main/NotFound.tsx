import { Link } from "react-router-dom"
import MainLayout from "../../components/layout/MainLayout"

const NotFound = () => {
    return (
        <MainLayout>
            <div className="h-screen w-full relative bg-[#3E92CC]">
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-slate-100 w-sm rounded-md">
                    <h1 className="text-4xl font-semibold text-center py-6">Not Found 404</h1>
                    <div className="flex justify-center py-6">
                        <Link to='/' className=" p-2 bg-black font-medium text-white rounded-md">
                            Back to home
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default NotFound
