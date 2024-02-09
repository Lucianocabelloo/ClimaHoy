import React from 'react'
import { useState, useEffect } from 'react';

export const SearchWeatherData = ({lat, lon, lenguaje}) => {

    const [TempMinima, setTempMinima] = useState("")
    const [TempMaxima, setTempMaxima] = useState("")
    const [Nombre, setNombre] = useState("")
    const [Pais, setPais] = useState("")
    const [Humedad, setHumedad] = useState("")
    const [Clima, setClima] = useState("")
    const [ClimaDescription, setClimaDescription] = useState("")
    const [ClimaIcon, setClimaIcon] = useState("")

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${lenguaje}&appid=4b56f215333470bc78211cf09c98602e&units=metric`);
                const data = await response.json();
                // Acceder a los campos necesarios y establecer los estados correspondientes
                setTempMinima(data.main.temp_min);
                console.log('Temperatura Mínima:', data.main.temp_min);
                
                setTempMaxima(data.main.temp_max);
                console.log('Temperatura Máxima:', data.main.temp_max);
                
                setNombre(data.name);
                console.log('Nombre de la Ciudad:', data.name);
                
                setPais(data.sys.country);
                console.log('Código de País:', data.sys.country);
                
                setHumedad(data.main.humidity);
                console.log('Humedad:', data.main.humidity);
                
                setClima(data.weather[0].main);
                console.log('Clima:', data.weather[0].main);
                
                setClimaDescription(data.weather[0].description);
                console.log('Descripción del Clima:', data.weather[0].description);
                setClimaIcon(data.weather[0].icon);
                console.log('Icono del clima:',data.weather[0].icon);
                
                console.log(data); // Puedes inspeccionar los datos completos en la consola

                // const responseData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=4b56f215333470bc78211cf09c98602e&lang=${lenguaje}`);
                // const dataResponse = await responseData.json();

                // console.log(dataResponse)
            } catch (error) {
                console.error('Error al obtener datos del clima:', error);
            }
        };
    
        fetchData();
    }, [lat, lon, lenguaje]);
    

  return (
    <div>
    </div>
  )
}
