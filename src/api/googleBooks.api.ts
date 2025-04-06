import { GoogleBooksResponse } from "../types/googleBooks.types";
import axiosClient from "./axiosClient";


const API_KEY = import.meta.env.VITE_API_BASE_URL;

export const googleBooksApi = {
  // Lấy dữ liệu sách
  getBooksBySubject: async (
    subject: string,
    maxResults: number = 20
  ): Promise<GoogleBooksResponse> => {
    const response = await axiosClient.get<GoogleBooksResponse>(
      `/volumes?q=subject:${subject}&maxResults=${maxResults}&key=${API_KEY}`
    );
    return response.data;
  },
};