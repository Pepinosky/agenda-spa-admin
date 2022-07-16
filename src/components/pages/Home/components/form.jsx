// import Button from "../../../layout/Button";
// import { Subtitle } from "../../../../../../../my-app/src/components/layout/Subtitle";
// import { Input } from "../../../../../../../my-app/src/components/common/Input";
import { useState, useEffect } from "react";
import { Input } from "../../../common/Input";
import SubTitle from "../../../layout/Subtitle";
import axios from "axios";
import { Select } from "../../../common/Select";
import ServicesList from "./ServicesList";
export default function Form({
  isOpen,
  setIsOpen,
  register,
  setValue,
  getValues,
}) {
  const [isClosed, setIsClosed] = useState("visible");
  const handleClose = () => {
    setIsOpen("false");
  };
  const [services, setServices] = useState([]);
  const handleSelect = (e) => {
    setValue("nombre_servicio", e.target.value);
    console.log(getValues("nombre_servicio"));
  };
  const handleDate = (e) => {
    setValue("fecha", e.target.value);
    console.log(getValues("fecha"));
  };
  useEffect(() => {
    axios.get("https://app-apirest2.herokuapp.com/servicio").then((res) => {
      console.log(res.data.items.docs);
      setServices(res.data.items.docs);
    });
  }, []);

  return (
    <>
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 z-10 bg-transparent py-12 transition duration-150 ease-in-out ${
          isOpen === false ? "hidden" : "visible"
        }`}
      >
        <div role="alert" class="container mx-auto w-11/12 max-w-lg md:w-2/3">
          <div class="relative space-y-10 rounded border border-gray-400 bg-white py-8 px-5 shadow-md md:px-10">
            <div class="mb-3 flex w-full justify-start text-gray-600"></div>
            <h1 class="font-lg mb-4 font-bold leading-tight tracking-normal text-gray-800">
              ingresa los datos
            </h1>
            <div className="space-y-10 ">
              <Input
                inputClass={"hidden"}
                type={"text"}
                register={register}
                name={"id"}
                value={Math.floor(Math.random() * 1000000) + 1}
              />

              <Input
                inputClass={"custom-date w-full"}
                type={"date"}
                label={"Fecha"}
                register={register}
                name={"fecha"}
                onChange={() => handleDate}
              />
              <Input
                label={"Hora"}
                labelClass={" flex flex-col "}
                inputClass={"default-input"}
                type={"text"}
                register={register}
                name={"hora"}
              />
              <Input
                label={"cupos"}
                labelClass={" flex flex-col "}
                inputClass={"default-input"}
                type={"text"}
                register={register}
                name={"cupos"}
              />
              <Input
                label={"sobrecupos"}
                labelClass={" flex flex-col "}
                inputClass={"default-input"}
                type={"text"}
                register={register}
                name={"sobrecupos"}
              />

              <Select
                selectClass={
                  "form-select appearance-none  block  w-full  px-3py-1.5 text-basefont-normaltext-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300"
                }
                register={register}
                name={"nombre_servicio"}
                label={"Servicio"}
                options={services}
                onChange={() => handleSelect}
              />
            </div>

            <div class="flex w-full items-center justify-start">
              <button
                class="rounded bg-green-700 px-8 py-2 text-sm text-white transition duration-150 ease-in-out  focus:outline-none focus:ring-2  focus:ring-offset-2"
                onClick={() => console.log("submit")}
                type="submit"
              >
                Crear
              </button>
              <button
                class="m-6 rounded-lg border border-transparent px-12 py-3 text-center text-sm font-medium text-green-700 hover:bg-green-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600 dark:hover:text-white dark:focus:ring-green-800"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                Cerrar
              </button>
            </div>
            <button
              class="absolute top-0 right-0 mt-4 mr-5 cursor-pointer rounded text-gray-400 transition duration-150 ease-in-out hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
              onClick={() => setIsOpen(false)}
              aria-label="close modal"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
