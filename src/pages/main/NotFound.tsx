import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h1 className="text-center py-10">Not Found 404</h1>
            <Link to='/' className="text-center font-bold cursor-pointer">Bach to home</Link>
        </div>
    )
}

export default NotFound
