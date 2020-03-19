import React from 'react'
import classes from '../../../../../assets/css/Calculadora.module.css'

const TeclaNumero = props => (
  <div
    className={classes.TeclaNumero}
    onClick={() => props.onClicked(props.numero)}
  >
    <span id={props.id}>{props.numero}</span>
  </div>
)

export default TeclaNumero
