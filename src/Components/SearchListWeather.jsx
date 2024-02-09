import React from 'react'

export const SearchListWeather = ({ciudad, resultados, lenguaje}) => {

    const API_KEY = "fd2e5b9da6c6cb6b46a6863fc911ca7c"

    const fetchData = async () => {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${API_KEY}`)
    }

  return (
    <div>SearchListWeather</div>
  )
}
