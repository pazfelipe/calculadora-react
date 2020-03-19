import React from 'react'
import classes from '../../../../../assets/css/Calculadora.module.css'

const TeclaNumeroZeroZero = props => (
  <div
    className={classes.TeclaNumeroZeroZero}
    onClick={() => props.onClicked(props.numero)}
  >
     <span id="numero00">00</span>
  </div>
)

export default TeclaNumeroZeroZero
