import './Citas.css'
import ContainerCita from '../ContainerCita'
import Title from '../Title'
import useCitas from '@/hooks/useCitas'

const Citas = () => {
    const { citas } = useCitas()

    return (
        <div className="one-half column">
            <Title title="Administra tus citas" h1={false} />
            {citas.map((cita, index) => {
                return <ContainerCita key={index} index={index} valueMascota={cita.mascota} valueDueño={cita.dueño} valueFecha={cita.fecha} valueHora={cita.hora} valueSintomas={cita.sintomas} />
            })}
        </div>
    )
}

export default Citas