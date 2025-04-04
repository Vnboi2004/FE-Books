import axios from "axios";

export const fetchData = async () => {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:history&maxResults=40&key=${import.meta.env.VITE_API_URL}`);
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}