import { Fragment } from "react";
import './AttributeCita.css'

const AttributeCita = (props) => {
    return (
        <Fragment>
            <p className="attribute">
                {props.attribute}:
                <span> {props.value}</span>
            </p>
        </Fragment>
    )
}

export default AttributeCita