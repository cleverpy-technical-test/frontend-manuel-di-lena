import React, { useState } from 'react';
import '../styles/Form.css';
import { IPost } from '../services/posts';

interface FormProps {
    onAddPost: (newPost: IPost) => void;
    onHideForm: () => void;
    posts: IPost[];
}

export function Form({ onAddPost, onHideForm, posts }: FormProps) {

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [creator, setCreator] = useState<number>(0);

    // Function to validate and create post
    const handleAddPost = () => {
        // Validate the data
        if (title.trim() === '' || content.trim() === '' || creator === 0) {
            alert('Please complete all fields');
            return;
        };

        // Calculate the Id value
        const newPostId = posts.length + 1;

        // Create new post
        const newPost: IPost = {
            id: newPostId,
            userId: creator,
            title: title,
            body: content,
        };

        // Add the new post to the list
        onAddPost(newPost);

        // Clean the form fields
        setTitle('');
        setContent('');
        setCreator(0);

        // Hide the form
        onHideForm();
    }

    return (
        <div className='form'>
            <h3 className='subtitle'>New Post</h3>
            <div className='formGroup'>
                <input 
                    id='title'
                    type="input" 
                    className='formField' 
                    placeholder='Title' 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label className='formLabel'>Title</label>
            </div>
            <div className='formGroup'>
                <textarea 
                    id='content'
                    className='formField' 
                    placeholder='Content' 
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <label className='formLabel'>Content</label>
            </div>
            <div className='formGroup'>
                <input 
                    id='creator'
                    type="number" 
                    className='formField' 
                    placeholder='Creator' 
                    required
                    value={creator}
                    onChange={(e) => setCreator(Number(e.target.value))}
                />
                <label className='formLabel'>Creator</label>
            </div>
            <button 
                className='btnAdd' 
                type='submit' 
                onClick={handleAddPost}
            >
                <span>Add Post</span>
            </button>
        </div>
    );
};