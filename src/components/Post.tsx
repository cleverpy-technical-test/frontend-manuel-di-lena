import React from 'react';

interface PostProps {
    userId: number;
    title: string;
    body: string;
};

export function Post({ userId, title, body }: PostProps) {
    return (
        <div>
            <p>{userId}</p>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};