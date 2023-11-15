import React, { useEffect, useState } from 'react';
import { IPost, getPosts } from '../services/posts';
import { Post } from './Post';

export function PostList() {

    const [posts, setPosts] = useState<IPost[]>([]);

    // Show all posts obtained when starting the app
    useEffect(() => {
        getPosts()
            .then((data) => setPosts(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h2>Post List</h2>
            <div>
                {
                    posts.map((post) => (
                        <Post 
                            key={post.id}
                            userId={post.userId}
                            title={post.title}
                            body={post.body}
                        />
                    ))
                }
            </div>
        </div>
    );
};