import React, {useState} from 'react';
import './index.css';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from "../../firebase";
import {setDoc, doc, Timestamp} from "firebase/firestore";
import {useNavigate} from "react-router-dom";



const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        error: null,
        isLoading: false
    })

    const navigate = useNavigate();


    const {name, email, password, error, loading} = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setData({...data, error: null, isLoading: true})
        if (!name || !email || !password) {
            setData({...data, error: 'Value is upset'});
        }
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, 'users', result.user.uid), {
                uid: result.user.uid,
                name,
                email,
                createdAt: Timestamp.fromDate(new Date()),
                isOnline: true
            });
            setData({name: '', error: null, password: '', email: '', isLoading: false})
            navigate('/')
        } catch (err) {
            setData({...data, error: err.message, isLoading: false})
        }
    }
    return (
        <section className='register-section'>
            <h3>Create an account</h3>
            <form className='form' onSubmit={handleSubmit}>
                <div className="input_container">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' value={name} onChange={handleChange}/>
                </div>
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
                    <button className='btn' disabled={loading}>{loading ?  'Registering in ...' : 'Register'}</button>
                </div>
            </form>
        </section>
    );
};

export default Register;