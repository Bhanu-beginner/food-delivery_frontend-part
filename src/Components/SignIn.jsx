import logo from '../assets/LOGO 1.png'
import { useState } from 'react';
import axios from 'axios';
import img from "../assets/Group 8.svg";
import { useNavigate } from 'react-router-dom';
import {Toaster, toast} from 'react-hot-toast'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
            toast.success('User logged in successfully');
            navigate('/home');
            res.status(200).json({message: 'User logged in Successfully'});
        } catch (err) {
            console.log(err);
            toast.error('Error logging in');
        }
    };

    return (

        <div className='signin'>
          <div className='leftside'>
              <form className='form-fields'>  
                <img src={logo} className="logo"  alt="heading pic" />
                <h2>Welcome Back  👋</h2>
                <h4>Today is a new day. It&apos;s your day. You shape it. 
                     Sign in to start ordering.</h4>

                     
                <label htmlFor="email">Email</label>
                <input type="mail" id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Example@email.com" />

                <label htmlFor="password">Password</label>
                <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" />

                <button onClick={handleLogin}>Sign In</button>
                <p>Don&apos;t you have an account? <a href='/Register'>Sign up</a></p>
             </form>
          </div>
            
            <img src={img} className="img" alt="burger pic" />

          <Toaster/>  
       </div>

    );
};

export default SignIn;
