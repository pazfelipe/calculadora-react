import React from 'react'
import classes from '../../../../../assets/css/Calculadora.module.css'

const teclaNumeroZeroZero = props => (
  <div
    className={classes.TeclaNumeroZeroZero}
    onClick={() => props.onClicked(props.numero)}
  >
    {props.numero}
  </div>
)

export default teclaNumeroZeroZero
