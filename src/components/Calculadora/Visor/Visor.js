import React from 'react'
import classes from '../../../assets/css/Calculadora.module.css'

const Visor = props => (
  <div className={classes.Visor}>
    <p>{props.valor}</p>
  </div>
)

export default Visor