import {useForm} from "react-hook-form"
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"
import { useEffect } from "react"


export default function Login(){
    const { user, setSession } = useAuth()
    
    const navigate = useNavigate();
    useEffect(() => {
      if (user){
          navigate("/")
          return
      }
     

    }, [user, navigate])

    const {register, handleSubmit} = useForm (
        { defaultValues: {
            email: "nilson@email.com",
            password:"nilson"
        } 
        }
    )
const onSubmit = async (data) => {
    const res = await axios.post('http://localhost:8000/auth/login', data)
    const token = res.data.access_token
    console.log(token)
    setSession(token)
    navigate("/")
}
    

    return (
        <>
        <div className="flex flex-col justify-center m-[250px] px-16   ">
            <h1 className="font-bold text-2xl text-center pb-8"> Login</h1>
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col  items-center border-solid border-2 py-6 bg-slate-400 w-[300px] mx-auto">
                    <div className="flex flex-col ">
                    <label htmlFor="email" className="font-bold mx-16">
                        Email
                        <input 
                        type="email" id="email"  className="border-solid border-2 px-2 py-1"  
                        {...register('email')} 
                        />
                    </label>
                    </div>

                    <div className="flex flex-col ">
                    <label htmlFor="password" className="font-bold mx-16">
                        Clave
                        <input type="password" id="password" className="border-solid border-2 px-2 py-1" 
                         {...register('password')}/>
                    </label>
                    </div>
                    <button type='submit' className=' w-24 text-center border-2 border-black rounded-md hover:bg-black hover:text-lime-500 hover:p-4 duration-500 mt-10 '  > Ingresar</button>
                    <Link to="../Register" > Registrarme</Link>
                </div>

            </form>
        </div>
        
        </>
    )
}