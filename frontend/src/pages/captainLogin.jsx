import React,{useState} from 'react'
import { Link, Links } from 'react-router-dom'


const CaptainLogin = () => {

const [email,setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [captainData,setCaptainData] = useState({})
      const submitHandler = (e)=>{
            e.preventDefault()
            setCaptainData({
                  email:email,
                  password:password
            })
            

            setEmail('')
            setPassword('')
      }
  return (
      <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
       <img  className='w-20  mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
      
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
      <p className='text-center'>Join a fleet <Link to='/captain-SignUp' className='text-blue-600'>Register as a Captain </Link>
      </p>
         
      
      </div> 
      <div>
       <Link
        to='/Login'
        className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as User</Link>
       </div>

      </div>
    
  )
}

export default CaptainLogin