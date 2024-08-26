import React from 'react';

export const Projects = () => {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div>
        <h3>BARRERA DE TREN</h3>
        <img className='imagen_proyecto' src="./imgs/proyecto1(0).png"/>
        <p>Con mis compañeros hicimos un proyecto que consiste en crear un dispositivo que avise
           cuando el tren esté acercándose y se aleje, por otro lado habrá un cartel
           que tenga dos Advertencias las cuales son: 
           “NO PASAR” cuando el tren esté pasando y “PUEDE PASAR” cuando el tren
           se vaya, al mismo tiempo sonará una ALARMA transmitiendo una señal de ruido
           para que la gente avance(agregamos esos componentes de alarma como cartel
           para las personas discapacitadas).
</p>
      </div>
      <div>
        <h3>Proyecto 2</h3>
        <p>Descripción del Proyecto 2.</p>
      </div>
    </section>
  );
};
