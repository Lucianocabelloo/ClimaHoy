import React from 'react'
import { useState, useEffect } from 'react';

export const SearchWeatherData = ({lat, lon, lenguaje}) => {

    const [Clima, setClima] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4b56f215333470bc78211cf09c98602e
                `);
                const data = await response.json();
                console.log(data)
            } catch (error) {
                console.error('Error al obtener datos del clima:', error);
            }
        };

        fetchData();
    }, [lat, lon, lenguaje]);

  return (
    <div>SearchWeatherData</div>
  )
}
