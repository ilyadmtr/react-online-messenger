import React, {useState} from 'react';
import './index.css'
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from "../../firebase";
import {updateDoc, doc} from "firebase/firestore";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        error: null,
        isLoading: false
    })

    const navigate = useNavigate();


    const {email, password, error, loading} = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setData({...data, error: null, isLoading: true})
        if (!email || !password) {
            setData({...data, error: 'Value is upset'});
        }
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            await updateDoc(doc(db, 'users', result.user.uid), {
                isOnline: true,
            });

            setData({error: null, password: '', email: '', isLoading: false})
            navigate('/')
        } catch (err) {
            setData({...data, error: err.message, isLoading: false})
        }
    }


    return (
        <section className='register-section'>
            <h3>Log in to your account</h3>
            <form className='form' onSubmit={handleSubmit}>
                <div className="input_container">
                    <label htmlFor="name">Email</label>
                    <input type="text" name='email' value={email} onChange={handleChange}/>
                </div>
                <div className="input_container">
                    <label htmlFor="name">Password</label>
                    <input type="password" name='password' value={password} onChange={handleChange}/>
                </div>
                {error ? <p className='error_p'>{error}</p> : null}
                <div className="btn_container">
                    <button className='btn' disabled={loading}>
                        {loading ? 'Logging in ...' : 'Login'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Login;