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
                    <div className='formGroup'>
                        <label>Email</label>
                        <input required name='email' id='email' type='text' />
                    </div>
                    <div className='formGroup'>
                        <label>Password</label>
                        <input type="password" required name='pass' id='pass' />
                    </div>
                    <button
                        className='formBtn'
                        type='submit'
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </form>        
            </div>
        </div>
    );
}