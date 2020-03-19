import React from 'react'
import classes from '../../../../../assets/css/Calculadora.module.css'

const TeclaNumero = props => (
  <div
    className={getClass(props.numero)}
    onClick={() => props.onClicked(props.numero)}
  >
    {props.numero}
  </div>
)

function getClass (numero) {
  return {
    '0': classes.TeclaNumeroZero,
    '00': classes.TeclaNumeroZeroZero
  }[numero] || classes.TeclaNumero
}

export default TeclaNumero
