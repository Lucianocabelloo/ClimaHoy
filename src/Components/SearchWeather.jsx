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
    <Form onSubmit={handleSubmit(onSubmit)}>

    <Form.Group className="mb-3">
      <Form.Label>Ingrese Ciudad</Form.Label>
      <Form.Control 
      placeholder="Ingrese nombre o codigo de ciudad"
      type='text'
      {...register("Ciudad")}
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Numero de Resultados</Form.Label>
      <Form.Select
      {...register("Resultados")} >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Elige Lenguaje</Form.Label>
      <Form.Select
      {...register("Lenguaje")} >
        <option value="en">Ingles</option>
        <option value="pt">Portugues</option>
        <option value="sp">Spanish</option>
      </Form.Select>
    </Form.Group>
    <Button variant="primary" type="submit">Enviar</Button>
          </Form>

          <SearchGeoCoding ciudad={Ciudad}  resultados={parseInt(Resultados)} lenguage={Lenguaje}/>
  </>
  )
}
