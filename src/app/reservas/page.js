"use client"

import Title from '@/components/Title';
import FormCitas from '@/components/FormCitas';
import Citas from '@/components/Citas';

export default function Reservas() {
    return (
            <main>
                <Title title="Administrador de Pacientes" h1={true} />
                <div className='row'>
                    <div className="one-half column">
                        <Title title="Crear mi cita" h1={false} />
                        <FormCitas />
                    </div>
                    <Citas />
                </div>
            </main>
    );
}