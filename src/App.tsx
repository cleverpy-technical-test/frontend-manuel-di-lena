import React from 'react';
import './App.css';
import { PostList } from './components/PostList';
import { Menu } from './components/Menu';
import useToggle from './hooks/useToggle';
import { Login } from './components/Login';

function App() {

    const [modalVisible, toggleModal] = useToggle(false);

    return (
        <div className='main'>
            <Menu onHideModal={toggleModal} />
            {
                modalVisible 
                ?
                <Login onHideModal={toggleModal} />
                :
                <PostList />
            }
        </div>
    );
}

export default App;
