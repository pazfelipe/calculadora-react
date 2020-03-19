import React from 'react'
import classes from '../../../../../assets/css/Calculadora.module.css'

const TeclaNumeroZero = props => (
  <div
    className={classes.TeclaNumeroZero}
    onClick={() => props.onClicked(props.numero)}
  >
    <span id="numero0">0</span>
  </div>
)

export default TeclaNumeroZero
