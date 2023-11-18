import '../styles/Login.css';

interface LoginProps {
    onHideModal: () => void;
}

export function Login({ onHideModal }: LoginProps) {

    // Function that will handle the Login
    const handleLogin = () => {
        onHideModal();
    }

    return (
        <div className='modalContainer'>
            <div className='modal'>
                <form className='modalForm'>
                    <div className='modalGroup'>
                        <input 
                            required 
                            name='email' 
                            type='text' 
                            className='modalField' 
                            placeholder='Email'
                        />
                        <label className='modalLabel'>Email</label>
                    </div>
                    <div className='modalGroup'>
                        <input 
                            type="password" 
                            required 
                            name='pass' 
                            className='modalField' 
                            placeholder='Password'
                        />
                        <label className='modalLabel'>Password</label>
                    </div>
                    <button
                        className='modalBtn'
                        type='submit'
                        onClick={handleLogin}
                    >
                        <span>Login</span>
                    </button>
                </form>        
            </div>
        </div>
    );
}