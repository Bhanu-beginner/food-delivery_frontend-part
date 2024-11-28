import { useState } from 'react'; 
import axios from 'axios';
import logo from '../assets/LOGO 1.png';
import img from '../assets/Group 8.svg';



const Signup = () => {
    const [name, setName] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [phoneNumber, setPhoneNumber] = useState(''); 
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(''); 



    const handleSignup = async (e) => { 
        e.preventDefault();
        try {
             const res = await axios.post('http://localhost:5000/api/users/register', { name, password, phoneNumber, email }); 
             setMessage('User registered successfully');
             console.log(res.data);
             } 
             catch (err) {
                 console.log(err); 
                 setMessage('Please Enter your details');
                 }
     };

      
    return (
        <div className='signup'>
            <div className='leftside'>
                <form className='form-fields'>
                    <img src={logo} className="logo" alt="heading pic" />

                       <h2>Welcome  👋</h2>
                       <h4>Today is a new day. It&apos;s your day. You shape it. 
                           Sign up to start ordering.</h4>

                       <label htmlFor="name">Name</label>
                       <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="eg. John A" /> 

                       <label htmlFor="phonenumber">Phone Number</label>
                       <input type="text" id='phonenumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your 10 digit mobile number" /> 

                       <label htmlFor="email">Email</label>
                       <input type="mail" id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Example@email.com" />

                       <label htmlFor="password">Password</label>
                       <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" /> 

                       <button onClick={handleSignup}>Continue</button>
                       {message && <p  className='error-msg'>{message}</p>}
                       <p>Already have an account? <a href="/">Sign in</a></p>
                </form>
            </div>
               <img src={img} className="img" alt="burger pic" />
        </div>
  );
};

export default Signup;

