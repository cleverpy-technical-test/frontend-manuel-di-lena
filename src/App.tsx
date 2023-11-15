import React from 'react';
import './App.css';
import { PostList } from './components/PostList';
import { Menu } from './components/Menu';
import { Sidebar } from './components/Sidebar';

function App() {
    return (
        <div className='main'>
            <Menu />
            <div className='container'>
                <Sidebar />
                <PostList />
            </div>
        </div>
    );
}

export default App;
