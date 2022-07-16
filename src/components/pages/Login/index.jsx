import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";

function logic({ value, data }) {
  if (value) {
  } else {
  }
}
export default function Login() {
  //   const { user, setSession } = useAuth();
  const { login, setLogin } = useState(false);
  const { response, setResponse } = useState([]);

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      correo: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    const res = await axios.get("https://app-apirest2.herokuapp.com/login");
    console.log(res.data.items.docs);
    res.data.items.docs.map((value) => {
      value.correo === data.correo &&
        value.password === data.password &&
        console.log("sesion iniciada");
    });
  };

  return (
    <>
      <div className="m-[250px] flex flex-col justify-center px-16   ">
        <h1 className="pb-8 text-center text-2xl font-bold"> Login</h1>
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="mx-auto flex  w-[300px] flex-col items-center border-2 border-solid bg-slate-400 py-6">
            <div className="flex flex-col ">
              <label htmlFor="email" className="mx-16 font-bold">
                Email
                <input
                  type="email"
                  id="email"
                  className="border-2 border-solid px-2 py-1"
                  {...register("correo")}
                />
              </label>
            </div>

            <div className="flex flex-col ">
              <label htmlFor="password" className="mx-16 font-bold">
                Clave
                <input
                  type="password"
                  id="password"
                  className="border-2 border-solid px-2 py-1"
                  {...register("password")}
                />
              </label>
            </div>
            <button
              type="submit"
              className=" mt-10 w-24 rounded-md border-2 border-black text-center duration-500 hover:bg-black hover:p-4 hover:text-lime-500 "
            >
              {" "}
              Ingresar
            </button>
            <Link to="../Register"> Registrarme</Link>
          </div>
        </form>
      </div>
    </>
  );
}
