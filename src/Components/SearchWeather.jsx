import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'; 
import { useForm } from "react-hook-form"
import Reloj from './Reloj';
import { SearchGeoCoding } from './SearchGeoCoding';


export const SearchWeather = () => {

  const initialCiudad = "" || "Tucuman"
  const initialLenguaje = "" || "es"
  const initialResultados = "" || 1

    const [Ciudad, setCiudad] = useState(initialCiudad)
    const [Resultados, setResultados] = useState(initialLenguaje)
    const [Lenguaje, setLenguaje] = useState(initialResultados)


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        setCiudad(data.Ciudad)
        setResultados(data.Resultados)
        setLenguaje(data.Lenguaje)
    }

   console.log(Lenguaje)

  return (
    <>
    <div className='d-flex justify-content-between flex-row-reverse mb-5'>

    <Form className='d-flex justify-content-end align-content-end gap-3' onSubmit={handleSubmit(onSubmit)}>

    <Form.Group className="mb-3 d-flex flex-column gap-3">
      <div className='d-flex gap-3'>
      <Button id='buttonSearch' type='submit'><i class="bi bi-search"></i></Button>
      <Form.Control 
      placeholder="Ingrese Ciudad o ZIP"
      type='text'
      id='inputSearch'
      className="custom-placeholder"
      {...register("Ciudad")}
      />

      </div>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Select
      {...register("Resultados")}
      id="inputSelect" >
        <option value="null">Resultados</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Select
      {...register("Lenguaje")}
      id="inputLenguaje" >
        <option value="null">Idioma</option>
        <option value="en">Ingles</option>
        <option value="pt">Portugues</option>
        <option value="es">Spanish</option>
      </Form.Select>
    </Form.Group>
          </Form>

          <Reloj/>
        </div>
          <SearchGeoCoding ciudad={Ciudad}  resultados={parseInt(Resultados)} lenguaje={Lenguaje}/>
  </>
  )
}
