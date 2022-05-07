import React from 'react';
import useHooks from '../../hooks/useHooks';


const Login = () => {
    const { singInWithGoogle } = useHooks();

    return (
        <div>
            <h3>Please login</h3>
            <form >

                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Your password' />
                <br />
                <input type="submit" value="LogIn" />

            </form>
            <button onClick={singInWithGoogle}>Google Sign In</button>
        </div>
    );
};

export default Login;