import FormContacto from "@/components/FormContacto"
import Title from "@/components/Title";

export default function Ayuda() {
    return (
        <main>
            <Title title="Contacto" h1={true}/>
            <p>Si tenés alguna duda o problema con ReservORT, por favor contactate a través de este formulario.</p>
            <FormContacto />
        </main>
    );
};