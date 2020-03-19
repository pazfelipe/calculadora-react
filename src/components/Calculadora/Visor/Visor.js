import React from 'react'
import classes from '../../../assets/css/Calculadora.module.css'

const Visor = props => (
  <div className={classes.Visor}>
    {props.valor || '0'}
  </div>
)

export default Visor
