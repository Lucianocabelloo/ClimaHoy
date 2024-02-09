import React, { useEffect } from 'react';
import { useState } from 'react';
import { SearchWeatherData } from './SearchWeatherData';

export const SearchGeoCoding = ({ ciudad, resultados, lenguaje }) => {
    const [Lat, setLat] = useState("")
    const [Lon, setLon] = useState("")


    console.log(ciudad)
    console.log(resultados)
    console.log(lenguaje)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=${resultados}&lang=${lenguaje}&appid=4b56f215333470bc78211cf09c98602e
`);
                const data = await response.json();
                if (data && data.length > 0) {
                    setLat(data[0].lat);
                    setLon(data[0].lon);
                }
            } catch (error) {
                console.error('Error al obtener datos del clima:', error);
            }
        };

        fetchData();
    }, [ciudad, resultados, lenguaje]);




    return (
        <SearchWeatherData lat={Lat}  lon={Lon} lenguaje={lenguaje} />
    );
};
