import React,{useState} from 'react'
import { Link, Links } from 'react-router-dom'

const UserLogin = () => {

      const [email,setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [userData,setUserData] = useState({})
      const submitHandler = (e)=>{
            e.preventDefault()
            setUserData({
                  email:email,
                  password:password
            })
          

            setEmail('')
            setPassword('')
      }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
       <img  className='w-20  mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc//Uber_logo_2018.png" alt="" />
      
      <form  onSubmit={(e)=>{
          submitHandler(e)  
      }}>
      <h3 className='text-lg font-medium mb-2'> What's your Email?</h3>

      <input 
      value={email}
      onChange={(e)=>
            setEmail(e.target.value)

      }
      className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
       required type="email"
       placeholder='email@example.com' 
      />

      <h3 className='text-lg font-medium mb-2'>Enter your Password</h3>

      <input 
        value={password}
      onChange={(p)=>
            setPassword(p.target.value)

      }
       className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
     
       required type="password"
       placeholder='Enter your password' 
      />

      <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>

      
      </form>  
      <p className='text-center'>New here ? <Link to='/signUp' className='text-blue-600'>Create a new Account </Link>
      </p>
         
      
      </div>  
      <div>
            <Link
            to='/captain-Login'
             className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin