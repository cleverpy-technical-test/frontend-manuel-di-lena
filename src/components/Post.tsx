import React from 'react';
import '../styles/Post.css';
import { MdDeleteOutline } from "react-icons/md";

interface PostProps {
    userId: number;
    title: string;
    body: string;
    onDelete: () => void;
};

export function Post({ userId, title, body, onDelete }: PostProps) {
    return (
        <div className='post'>
            <div className='info'>
                <p>Creator: {userId}</p>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            <div className='btns'>
                <button className='btnDel' onClick={onDelete}>
                    <MdDeleteOutline className='delete' />
                </button>
            </div>
        </div>
    );
};