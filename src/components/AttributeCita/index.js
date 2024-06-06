import { Fragment } from "react";
import './attributecita.css'

const attributeCita = (props) => {
    return (
        <Fragment>
            <p className="attribute">
                {props.attribute}:
                <span> {props.value}</span>
            </p>
        </Fragment>
    )
}

export default attributeCita