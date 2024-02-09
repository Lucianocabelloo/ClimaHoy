import React, { useState, useEffect } from 'react';

function Reloj() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);


    return () => clearInterval(interval);
  }, []); 

  const formatNumber = (number) => {
    return number < 10 ? '0' + number : number;
  };

  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const diasSemana = [
    'Domingo', 'Lunes', 'Martes', 'Miércoles',
    'Jueves', 'Viernes', 'Sábado'
  ];

  return (
    <div className='d-flex flex-column-reverse my-0 ContainerReloj'>
      <p className='fs-4'>{formatNumber(time.getHours())}:{formatNumber(time.getMinutes())}</p>
      <p className='fs-3'>{diasSemana[time.getDay()]}, {time.getDate()} de {meses[time.getMonth()]} de {time.getFullYear()}</p>
    </div>
  );
}

export default Reloj;
