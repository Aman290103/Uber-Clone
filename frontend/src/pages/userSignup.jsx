import React , {useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/userContext'

const UserSignup = () => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [phone, setPhone]=useState('')
      const [FirstName, setFirstName] = useState('')
      const [LastName, setLastName] = useState('')
      const [user,setUser] = useContext(UserDataContext)

     const  navigate = useNavigate()



      const submitHandler = async (e)=>{
            e.preventDefault()
            try {
                // Client-side validation
                
                const newUser = {
                    fullname:{
                             firstname: FirstName,
                             lastname: LastName
                    },
                    email: email,
                    password: password 
                }
                
                console.log("Sending data:", newUser);
                
                const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
                
                console.log("Response:", response.data);
                
                if(response.status === 200 || response.status === 201){
                   const data = response.data;
                   setUser(data.user);
                   navigate('/home');
                   
                   setEmail('');
                   setPassword('');
                   setPhone('');
                }
            } catch (error) {
                console.error("Registration error:", error);
                alert("Registration failed: " + (error.response?.data?.message || error.message));
            }
      }

      
  return (
     <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img  className='w-20  mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc//Uber_logo_2018.png" alt="" />
      
      <form  onSubmit={(e)=>{
          submitHandler(e)  
      }}>

      <h3 className='text-base font-medium mb-2'> What's your Name?</h3>

      <div  className='flex gap-4 mb-6'>

      <input 
       className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-base placeholder:text-base '
       required type="text"
       placeholder='Enter your FirstName' 
       value={FirstName}
       onChange={(e)=>{
            setFirstName(e.target.value)
       }}
       
      />
      <input 
       className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-base placeholder:text-base '
       required type="text"
       placeholder='Enter your LastName'
       value={LastName}
       onChange={(e)=>{
            setLastName(e.target.value)
       }} 
      />

      </div>

      <h3 className='text-base font-medium mb-2'> What's your Phone Number?</h3>

      <input 
      
      className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-sm '
       required type="number"
       placeholder='Enter your Phone number' 
       value={phone}
       onChange={(e)=>{
            setPhone(e.target.value)
       }}
      />
      

      <h3 className='text-base font-medium mb-2'> What's your Email?</h3>

      <input 
      
      className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-sm '
       required type="email"
       placeholder='email@example.com'
       value={email}
       onChange={(e)=>{
            setEmail(e.target.value)
       }} 
      />

      <h3 className='text-base font-medium mb-2'>Enter your Password</h3>

      <input 
       
       className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-sm '
     
       required type="password"
       placeholder='Enter your password'
       value={password}
       onChange={(e)=>{
            setPassword(e.target.value)
       }} 
      />

      <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>SignUp</button>

      
      </form>  
      <p className='text-center'>Already have a Account? <Link to='/Login' className='text-blue-600'>Login here </Link>
      </p>
         
      
      </div>  
      <div>
            <p className='text-[10px] leading-tight'>
                 This site is protected by reCAPTCHA and the <span className='underline'>Google
                 Privacy Policy </span> and <span className='underline'>Terms of Service apply.</span>
            </p>
      </div>
    </div>
  )
}


export default UserSignup