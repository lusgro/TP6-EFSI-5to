import AttributeCita from '../AttributeCita'
import BtnEliminar from '../BtnEliminar'

import './containercita.css'

const ContainerCita = (props) => {
    return (
        <div className="container">
            <AttributeCita attribute="Mascota" value={props.valueMascota} />
            <AttributeCita attribute="Dueño" value={props.valueDueño} />
            <AttributeCita attribute="Fecha" value={props.valueFecha} />
            <AttributeCita attribute="Hora" value={props.valueHora} />
            <AttributeCita attribute="Sintomas" value={props.valueSintomas} />
            
            <BtnEliminar onClick={() => eliminarCita()}/>
        </div>
    )
}

export default ContainerCita