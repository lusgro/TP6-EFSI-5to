"use client"

import { useContext, useState } from 'react';
import Title from '@/components/Title';
import ContainerCita from '@/components/ContainerCita';
import FormCitas from '@/components/FormCitas';
import Cita from '@/models/Cita';

import { CitaContext } from "@/CitaContext";

export default function Reservas() {
    const [citas, setCitas] = useContext(CitaContext);
    return (
        <main>
                <Title title="Administrador de Pacientes" h1={true} />
                <div className='row'>
                    <div className="one-half column">
                        <Title title="Crear mi cita" h1={false} />
                        <FormCitas />
                    </div>
                    <div className="one-half column">
                        <Title title="Administra tus citas" h1={false} />
                        {citas.map((cita, index) => {
                            return <ContainerCita key={index} index={index} valueMascota={cita.mascota} valueDueño={cita.dueño} valueFecha={cita.fecha} valueHora={cita.hora} valueSintomas={cita.sintomas} />
                        })}
                    </div>
                </div>
        </main>
    );
};