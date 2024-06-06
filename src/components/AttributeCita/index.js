import { Fragment } from "react";
import './attributecita.css'

const attributeCita = (props) => {
    return (
        <Fragment>
            <p>
                {props.attribute}:
                <span> {props.value}</span>
            </p>
        </Fragment>
    )
}

export default attributeCita