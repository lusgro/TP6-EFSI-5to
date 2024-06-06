import useCitas from "@/hooks/useCitas";

import InputCita from "../InputCita";
import BtnAgregarCita from "../BtnAgregar";
import Cita from "@/models/Cita";

const FormCitas = () => {
    const { citas, setCitas } = useCitas()

    const handleSubmit = (e) => {
        e.preventDefault();
        const { mascota, dueño, fecha, hora, sintomas } = Object.fromEntries(new FormData(e.target))
        if (!validateInput(mascota) || !validateInput(dueño) || !validateInput(fecha) || !validateInput(hora) || !validateInput(sintomas)) {
            alert('Todos los campos son obligatorios')
            return
        }
        setCitas([...citas, new Cita(mascota, dueño, fecha, hora, sintomas)])
        e.target.reset()
    }

    const validateInput = (input) => {
        return input.length > 0
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputCita type="text" placeholder="Nombre Mascota" name="mascota" label="Nombre Mascota"/>
            <InputCita type="text" placeholder="Nombre dueño de la mascota" name="dueño" label="Nombre Dueño" />
            <InputCita type="date" name="fecha" label="Fecha" />
            <InputCita type="time" name="hora" label="Hora" />
            <InputCita type="textbox" name="sintomas" label="Sintomas" />
            <BtnAgregarCita />
        </form>
    )
}

export default FormCitas;   