import React from 'react'

export const Weather7Days = ({lat, lon, lenguaje}) => {

    useEffect(() => {
        const fetchData = async () => {
            try {


                 const responseData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=4b56f215333470bc78211cf09c98602e&lang=${lenguaje}`);
                 const dataResponse = await responseData.json();
                 console.log(dataResponse)
            } catch (error) {
                console.error('Error al obtener datos del clima:', error);
            }
        };
    
        fetchData();
    }, [lat, lon, lenguaje]);

  return (
    <div>Weather7Days</div>
  )
}
