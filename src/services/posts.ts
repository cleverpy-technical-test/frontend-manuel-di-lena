import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export interface IPost {
    id: number;
    userId: number;
    title: string;
    body: string;
};

// Get all posts from the API
export const getPosts = async (): Promise<IPost[]> => {
    try {
        const res = await axios.get(`${apiUrl}`);
        return res.data as IPost[];

    } catch (err) {
        throw new Error('Could not get post list');
    }
};

// Delete a specific post
// export const deletePost = async (id: number): Promise<void> => {
//     try {
//         await axios.delete(`${apiUrl}/${id}`);

//     } catch (err) {
//         throw new Error('Post could not be deleted');
//     }
// }