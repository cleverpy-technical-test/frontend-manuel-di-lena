import React, { useEffect, useState } from 'react';
import '../styles/PostList.css';
import { IPost, getPosts } from '../services/posts';
import { Post } from './Post';
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { Form } from './Form';

export function PostList() {

    const [posts, setPosts] = useState<IPost[]>([]);
    const [formVisible, setFormVisible] = useState<Boolean>(false);

    // Show all posts obtained when starting the app
    useEffect(() => {
        getPosts()
            .then((data) => setPosts(data))
            .catch((error) => console.error(error));
    }, []);

    // Function to delete a post
    const deletePost = (postId: number) => {
        setPosts((prevPosts) => prevPosts.filter(post => post.id !== postId));
    };

    const formVisibility = () => {
        setFormVisible(!formVisible);
    }

    return (
        <div className='container'>
            <div className='postList'>
                <div className='header'>
                    <h2>Post List</h2>
                    <IoIosAddCircleOutline 
                            className='icon' 
                            onClick={formVisibility}
                    />
                </div>
                <div className='list'>
                    {
                        posts.map((post) => (
                            <Post 
                                key={post.id}
                                userId={post.userId}
                                title={post.title}
                                body={post.body}
                                onDelete={() => deletePost(post.id)}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='postForm' style={{ display: formVisible ? 'flex' : 'none' }}>
                <Form />
            </div>
        </div>

    );
};