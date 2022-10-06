import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import './index.css';
import {signOut} from "firebase/auth"
import {auth, db} from "../../firebase";
import {updateDoc, doc} from "firebase/firestore";
import {AuthContext} from "../../context/auth";

const Navbar = () => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = async ()=>{
        await updateDoc(doc(db, 'users', auth.currentUser.uid), {
            isOnline: false,
        })
        await signOut(auth);
        navigate('/login')
    }
    return (
        <nav className='navbar'>
            <h3><Link to='/'>Messenger</Link></h3>
            {
                user ? <div className='navbar__auth'>
                    <Link to='/profile' className={'profile_btn'}>Profile</Link>
                    <button className='btn' onClick={handleSignOut} className={'login_btn'}>Logout</button>
                </div> : <div className='navbar__auth'>
                    <Link to='/register' className={'profile_btn'}>Register</Link>
                    <Link to='/login' className={'login_btn'}>Login</Link>
                </div>
            }
        </nav>
    );
};

export default Navbar;