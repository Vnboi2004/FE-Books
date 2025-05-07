import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="w-full h-screen">
            {/* Image */}
            <div className="relative bg-[url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')] w-full h-[400px] bg-no-repeat bg-center mt-28"></div>
            {/* Content */}
            <div className="flex flex-col items-center gap-4">
                {/* Title */}
                <h1 className="text-primary text-5xl font-bold">Look like you're lost</h1>
                {/* Description */}
                <p className="text-primary text-base">the page you are looking for not avaible!</p>
                {/* Button back to home() */}
                <Link 
                    to="/" 
                    className="text-on-primary bg-primary font-bold p-4 rounded-xl hover:bg-primary-shade duration-150 transition-all ease-in-out">
                        Go to Home
                </Link>        
            </div>
        </div>
    
    )
}

export default NotFound
