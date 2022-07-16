import { useForm } from "react-hook-form";
import Form from "./components/form";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { Reservations } from "./components/Reservations";
import { useEffect, useState } from "react";
import Button from "../../common/Button";

export default function CreateReservation() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState([]);
  const { register, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      id: Math.floor(Math.random() * 1000000) + 1,
      nombre_servicio: "",
      fecha: "",
      hora: "",
      cupos: "",
      sobrecupos: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://app-apirest2.herokuapp.com/reserva", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(data);
      });
  };

  return (
    <>
      <div className="m-[200px] flex justify-center  ">
        <div className="text-center ">
          <h1 className="text-xl"> reservas de usuarios</h1>

          <Button text={"Crear Reserva"} onClick={() => setIsOpen(true)} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form
              register={register}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              getValues={getValues}
              setValue={setValue}
            />
          </form>
          <Reservations />
        </div>
      </div>
    </>
  );
}
