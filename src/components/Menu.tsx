import React from 'react';
import '../styles/Menu.css';

interface MenuProps {
    onHideModal: () => void;
}

export function Menu({ onHideModal }: MenuProps) {
    return (
        <div className='menu'>
                <h1 className='title'>Technical Test</h1>
                <button 
                    className='btnLogin'
                    onClick={onHideModal}
                >
                    Login
                </button>
        </div>
    );
};