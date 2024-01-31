import { FaGlobeAmericas } from 'react-icons/fa'
import { SlPhone } from 'react-icons/sl'
import {GrUserAdmin} from 'react-icons/gr'
import {BiUser} from 'react-icons/bi'
import { FiMail } from 'react-icons/fi';
import {BsEye,BsEyeSlash} from 'react-icons/bs'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Signup = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [ShowPassword, setShowPassword] = useState(false);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

    const navigate = useNavigate()
    async function registerUser (e) {
        e.preventDefault()
        if(firstname == '' || lastname == ''|| email == ''|| password == ''|| username == ''|| confirmpassword == ''|| country == ''|| phone == '') {
            console.log('please fill in the empty fields');
        }  else if(confirmpassword !== password){
            console.log('confirm password must be same with password');
        }
        
        else {
            const response = await fetch('http://localhost:1337/api/register', { 
                method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        firstname,
                        lastname,
                        username,
                        email,
                        phone,
                        country,
                        password,
                        confirmpassword,
                    }),
                    
                })
                const data = await response.json()
        
                if(data.status === 'ok') {
                    Toast.fire({
                        icon: 'success',
                        title: 'Registration succesfull, redirecting to login page'
                    })
                    navigate('/login')
                }
                console.log(data);
        }
    }
  return (
    <div className="flex items-center justify-center h-full">
        <div className="h-full rounded-xl shadow-2xl py-10 px-5 w-96 my-28">
            <div className="text-center">
                <img src="/5.png" alt="" />
                <p className="text-xs py-5">Get started with Multichainfinance, just create an account and enjoy the experience. Get started to get $10 bonus</p>
            </div>
                <form onSubmit={registerUser}>
                    <div>
                        <label htmlFor="firstname" className='text-violet-900 font-bold text-xs'>Firstname</label>
                        <div className="relative flex items-center   py-1 pb-2">
                            <BiUser className='w-4 h-4 absolute ml-3'/>
                            <input
                            type="text"
                            placeholder="John"
                            value={firstname}
                            onChange={(e)=> setFirstname(e.target.value)}
                            className="px-3 py-2 pl-10 pr-3 font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-violet-950 outline-none focus:ring-2 w-full transition-all duration-300 ease-in-out"
                            />
                        </div>      
                    </div>
                    <div>
                        <label htmlFor="lastname" className='text-violet-900 font-bold text-xs'>Lastname</label>
                        <div className="relative flex items-center   py-1 pb-2">
                            <BiUser className='w-4 h-4 absolute ml-3'/>
                            <input
                            type="text"
                            placeholder="Doe"
                            value={lastname}
                            onChange={(e)=> setLastname(e.target.value)}
                            className="px-3 py-2 pl-10 pr-3 font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-violet-950 outline-none focus:ring-2 w-full transition-all duration-300 ease-in-out"
                            />
                        </div>      
                    </div>
                    <div>
                        <label htmlFor="Username" className='text-violet-900 font-bold text-xs'>Username</label>
                        <div className="relative flex items-center   py-1 pb-2">
                            <BiUser className='w-4 h-4 absolute ml-3'/>
                            <input
                            type="text"
                            placeholder="Johnsmith"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            className="px-3 py-2 pl-10 pr-3 font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-violet-950 outline-none focus:ring-2 w-full transition-all duration-300 ease-in-out"
                            />
                        </div>      
                    </div>
                    <div>
                        <label htmlFor="email" className='text-violet-900 font-bold text-xs'>Email</label>
                        <div className="relative flex items-center   py-1 pb-2">
                            <FiMail className='w-4 h-4 absolute ml-3'/>
                            <input
                            type="email"
                            placeholder="john@gmail.com"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            className="px-3 py-2 pl-10 pr-3 font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-violet-950 outline-none focus:ring-2 w-full transition-all duration-300 ease-in-out"
                            />
                        </div>      
                    </div>
                    <div>
                        <label htmlFor="phone" className='text-violet-900 font-bold text-xs'>Phone</label>
                        <div className="relative flex items-center   py-1 pb-2">
                            <SlPhone className='w-4 h-4 absolute ml-3'/>
                            <input
                            type="tel"
                            placeholder="+44"
                            value={phone}
                            onChange={(e)=> setPhone(e.target.value)}
                            className="px-3 py-2 pl-10 pr-3 font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-violet-950 outline-none focus:ring-2 w-full transition-all duration-300 ease-in-out"
                            />
                        </div>      
                    </div>
                    <div>
                        <label htmlFor="Country" className='text-violet-900 font-bold text-xs'>Country</label>
                        <div className="relative flex items-center   py-1 pb-2">
                            <FaGlobeAmericas className='w-4 h-4 absolute ml-3'/>
                            <input
                            type="text"
                            placeholder="Argentina"
                            value={country}
                            onChange={(e)=> setCountry(e.target.value)}
                            className="px-3 py-2 pl-10 pr-3 font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-violet-950 outline-none focus:ring-2 w-full transition-all duration-300 ease-in-out"
                            />
                        </div>      
                    </div>
                    <div>
                        <label htmlFor="password" className='text-violet-900 font-bold text-xs'>Password</label>
                        <div className="relative flex items-center py-1 pb-2">
                            <GrUserAdmin className='w-4 h-4 absolute ml-3'/>
                            <input
                            type={ShowPassword ?`text`:`password`}
                            placeholder="password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            className="px-3 py-2 pl-10 pr-3 font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-violet-950 outline-none focus:ring-2 w-full transition-all duration-300 ease-in-out"
                            />
                            <div className='w-4 h-4 absolute mr-3 right-0' onClick={()=>{
                                    setShowPassword(!ShowPassword)
                                }}>
                                    {
                                        ShowPassword ? 
                                        <BsEye/>
                                            :
                                        <BsEyeSlash />
                                    }
                                </div>
                        </div>      
                    </div>
                    <div>
                        <label htmlFor="c-password" className='text-violet-900 font-bold text-xs'>Confirm Password</label>
                        <div className="relative flex items-center   py-1 pb-2">
                            <GrUserAdmin className='w-4 h-4 absolute ml-3'/>
                            <input
                            type={ShowPassword ?`text`:`password`}
                            placeholder="Confirm password"
                            value={confirmpassword}
                            onChange={(e)=> setConfirmpassword(e.target.value)}
                            className="px-3 py-2 pl-10 pr-3 font-semibold placeholder-gray-500 text-black rounded-md border-none ring-2 ring-gray-300 focus:ring-violet-950 outline-none focus:ring-2 w-full transition-all duration-300 ease-in-out"
                            />
                            <div className='w-4 h-4 absolute mr-3 right-0' onClick={()=>{
                                    setShowPassword(!ShowPassword)
                                }}>
                                    {
                                        ShowPassword ? 
                                        <BsEye/>
                                            :
                                        <BsEyeSlash />
                                    }
                                </div>
                        </div>      
                    </div>
                    <button className="text-violet-100 bg-violet-950 rounded-md text-center w-full my-5 py-2 font-semibold m-auto flex items-center justify-center gap-3">
            <p>REGISTER</p> </button>
                </form>
                <div className='text-gray-500 text-sm'>Already have an account ? <Link to='/login' className='text-violet-400'>Sign in</Link> </div>
        </div>
    </div>
  );
};

export default Signup;
