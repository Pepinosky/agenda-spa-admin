import {useForm} from "react-hook-form"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"
import { useEffect } from "react"

export default function Home(){
    const {token, clearSession} = useAuth()
    const navigate = useNavigate();
    useEffect(() => {
        if (!token){
            navigate("/login")
            return
        }
        
        
    }, [token, navigate, clearSession ])


    return (
        <>
          <div className="flex justify-center m-[200px]  ">
              <div className="text-center " >
              <h1 className="text-xl"> Logeado</h1>
             
              <button onClick={clearSession} className=' w-24 text-center border-2 border-black rounded-md hover:bg-black hover:text-lime-500 hover:p-4 duration-500 mt-10 '  > cerrar sesion</button>
            
              </div>
              
          </div>
        
        </>
    )
}