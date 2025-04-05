export interface GoogleBooksResponse {
    kind: string;
    totalItems: number;
    items: GoogleBookItem[];
};

export interface GoogleBookItem {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        publisher?: string;
        publishedDate?: string;
        description?: string;
        imageLinks?: {
            smallThumbnail?: string;
            thumbnail?: string;
        };
    },
};