import {GrUserAdmin} from 'react-icons/gr'
import { FiMail } from 'react-icons/fi';
import {BsEye,BsEyeSlash} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
const Login = () => {
    const [ShowPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
    
    async function loginUser(e) {
            e.preventDefault()
            const response = await fetch('https://multi-chain-server.vercel.app/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    password,
                    email,
                })
            })
            const data = await response.json()
            
            if(data.user) {
                localStorage.setItem('token', data.user)
                window.location.href = '/dashboard'
                    Toast.fire({
                        icon: 'success',
                        title: 'login succesfull, redirecting to dashboard'
                    })
            } else {
                Toast.fire({
                    icon: 'error',
                    title: 'please check username and password'
                })
                console.log('please check username and password');
            }
            console.log(data);
    }
    return (
        <div className="flex items-center justify-center h-full">
            <div className="h-full rounded-xl shadow-2xl py-10 px-5 w-96 my-28">
                <div className="text-center">
                    <img src="/5.png" alt="" />
                    <p className="text-xs py-5">Welcome to Multichainfinance, login and enjoy the best investment experience.</p>
                </div>
                    <form onSubmit={loginUser}>
                        <div>
                            <label htmlFor="email" className='text-violet-900 font-bold text-xs'>Email</label>
                            <div className="relative flex items-center   py-1 pb-2">
                                <FiMail className='w-4 h-4 absolute ml-3'/>
                                <input
                                type="text"
                                placeholder="John@gmail.com"
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
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
                                onChange={(e) => setPassword(e.target.value)}
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
            <p>LOGIN</p> </button>
            </form>
                    <div className="flex items-center justify-between gap-2">
                            <div className="underline3"/>
                            <p className='text-gray-500'>Or</p>
                            <div className="underline3"/>
                        </div> 
                        <div className="text-center text-sm text-violet-300 py-3">
                            <Link to='/register'><p className=''>create account</p></Link>
                            <Link to='/'> <p>Terms and Conditions</p></Link>
                        </div>
                    
            </div>
        </div>
      );
};

export default Login;
