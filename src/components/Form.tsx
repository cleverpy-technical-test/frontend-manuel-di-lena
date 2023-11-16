import React from 'react';
import '../styles/Form.css';

export function Form() {
    return (
        <div className='form'>
            <h3 className='subtitle'>New Post</h3>
            <div className='formGroup'>
                <input type="input" className='formField' placeholder='Title' required />
                <label className='formLabel'>Title</label>
            </div>
            <div className='formGroup'>
                <textarea className='formField' placeholder='Content' required></textarea>
                <label className='formLabel'>Content</label>
            </div>
            <div className='formGroup'>
                <input type="input" className='formField' placeholder='Creator' required />
                <label className='formLabel'>Creator</label>
            </div>
            <button className='btnAdd' type='submit'>
                <span>Add Post</span>
            </button>
        </div>
    );
};