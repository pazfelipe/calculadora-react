import React from 'react'
import classes from '../../../../../assets/css/Calculadora.module.css'

const teclaNumero = props => (
  <div
    className={classes.TeclaNumero}
    onClick={() => props.onClicked(props.numero)}
  >
    {props.numero}
  </div>
)

export default teclaNumero
