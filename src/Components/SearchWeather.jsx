import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'; 
import { useForm } from "react-hook-form"
import { SearchGeoCoding } from './SearchGeoCoding';


export const SearchWeather = () => {


    const [Ciudad, setCiudad] = useState("")
    const [Resultados, setResultados] = useState("")
    const [Lenguaje, setLenguaje] = useState("")

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

    console.log(Ciudad)
    console.log(Resultados)
    console.log(Lenguaje)

  return (
    <>
    <Form className='d-flex justify-content-end align-content-end gap-3' onSubmit={handleSubmit(onSubmit)}>

    <Form.Group className="mb-3 d-flex flex-column gap-3">
      <div className='d-flex gap-3'>
      <Button id='buttonSearch'><i class="bi bi-search"></i></Button>
      <Form.Control 
      placeholder="Ingrese nombre o codigo de ciudad"
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
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Select
      {...register("Lenguaje")}
      id="inputLenguaje" >
        <option value="en">Ingles</option>
        <option value="pt">Portugues</option>
        <option value="sp">Spanish</option>
      </Form.Select>
    </Form.Group>
          </Form>

          <SearchGeoCoding ciudad={Ciudad}  resultados={parseInt(Resultados)} lenguage={Lenguaje}/>
  </>
  )
}
