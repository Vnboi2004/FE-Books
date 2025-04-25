import MainLayout from "../../components/layout/MainLayout"

const About = () => {
    return (
        <MainLayout>
            <div className="py-16">
                <h1 className="text-center">About us</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Welcome to our Bookstore! We are passionate about connecting readers with the books they love. 
                    Our mission is to provide a wide range of books across various genres to inspire, educate, and entertain.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Our goal is to create a platform where book enthusiasts can explore, discover, and share their love for books. 
                    We believe in the power of stories to transform lives and bring people together.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Contact Us</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    If you have any questions or feedback, feel free to reach out to us:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
                    <li>Email: support@bookstore.com</li>
                    <li>Phone: +1 234 567 890</li>
                    <li>Address: 123 Book Street, Reading City, Bookland</li>
                </ul>
            </div>
        </MainLayout>
    )
}

export default About
