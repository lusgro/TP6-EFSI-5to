const FormContacto = () => {
    return (
        <form>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default FormContacto;