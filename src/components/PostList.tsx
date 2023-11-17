import React, { useEffect, useState } from 'react';
import '../styles/PostList.css';
import { IPost, getPosts } from '../services/posts';
import { Post } from './Post';
import { IoIosAddCircleOutline } from "react-icons/io";
import { Form } from './Form';
import useToggle from '../hooks/useToggle';

export function PostList() {

    const [posts, setPosts] = useState<IPost[]>([]);
    //const [formVisible, setFormVisible] = useState<Boolean>(false);
    const [formVisible, toggleForm] = useToggle(false);

    // Show all posts obtained when starting the app
    useEffect(() => {
        getPosts()
            .then((data) => setPosts(data))
            .catch((error) => console.error(error));
    }, []);

    // Function to add new posts
    const addPost = (newPost: IPost) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]);
    }

    // Function to delete a post
    const deletePost = (postId: number) => {
        setPosts((prevPosts) => prevPosts.filter(post => post.id !== postId));
    };

    // const formVisibility = () => {
    //     setFormVisible(!formVisible);
    // }

    return (
        <div className='container'>
            <div className='postList'>
                <div className='header'>
                    <h2>Post List</h2>
                    <IoIosAddCircleOutline 
                        className='icon' 
                        onClick={toggleForm}
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
            {
                formVisible 
                    &&
                <div className='postForm'>
                    <Form 
                        onAddPost={addPost}
                        onHideForm={toggleForm}
                        posts={posts}
                    />
                </div>
            }
        </div>

    );
};