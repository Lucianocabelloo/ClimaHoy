import React, { useEffect } from 'react';
import { useState } from 'react';

export const SearchListWeather = ({ ciudad, resultados, lenguaje }) => {

    const [Lat, setLat] = useState("")
    const [Lon, setLon] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=${resultados}&lang=${lenguaje}&appid=4b56f215333470bc78211cf09c98602e
`);
                const data = await response.json();
                if (data && data.length > 0) {
                    setLat(data[0].lat);
                    setLon(data[0].lon);
                } else {
                    console.error('La respuesta de la API está vacía o no contiene datos válidos.');
                }
            } catch (error) {
                console.error('Error al obtener datos del clima:', error);
            }
        };

        fetchData();
    }, [ciudad, resultados, lenguaje]);


    console.log(Lat)
    console.log(Lon)

    return (
        <div>SearchListWeather</div>
    );
};
