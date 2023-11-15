import React from 'react';
import '../styles/Post.css';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

interface PostProps {
    userId: number;
    title: string;
    body: string;
};

export function Post({ userId, title, body }: PostProps) {
    return (
        <div className='post'>
            <div className='info'>
                <p>Creator: {userId}</p>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            <div className='btns'>
                <button className='btn edi'>
                    <CiEdit className='edit' />
                </button>
                <button className='btn del'>
                    <MdDeleteOutline className='delete' />
                </button>
            </div>
        </div>
    );
};