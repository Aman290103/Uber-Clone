import React, {useState} from 'react'
import { Link, Links } from 'react-router-dom'


const CaptainSignup = () => {
           const [email, setEmail] = useState('')
            const [password, setPassword] = useState('')
            const [phone, setPhone]=useState('')
            const [FirstName, setFirstName] = useState('')
            const [LastName, setLastName] = useState('')
            const [captainData,setCaptainData] = useState({})
            const submitHandler = (e)=>{
                  e.preventDefault()
                  setCaptainData({
                        captainName:{
                         FirstName:FirstName,
                        LastName:LastName,
                  },
                         phone:phone,
                        email:email,
                        password:password 
                  })
      
                  setEmail('')
                  setPassword('')
                  setPhone('')
            }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      
       <img  className='w-16  mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
      
      <form  onSubmit={(e)=>{
          submitHandler(e)  
      }}>

      <h3 className='text-base font-medium mb-2'> What's our Captain's Name?</h3>

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

      <h3 className='text-base font-medium mb-2'> What's our Captain's Phone Number?</h3>

      <input 
      
      className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-sm '
       required type="number"
       placeholder='Enter your Phone number' 
       value={phone}
       onChange={(e)=>{
            setPhone(e.target.value)
       }}
      />
      

      <h3 className='text-base font-medium mb-2'> What's our Captain's Email?</h3>

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
      <p className='text-center'>Already have a Account? <Link to='/captain-Login' className='text-blue-600'>Login here </Link>
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

export default CaptainSignup