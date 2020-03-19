import React from 'react'
import classes from '../../../assets/css/Calculadora.module.css'

const visor = props => (
  <div className={classes.Visor}>
    {props.valor}
  </div>
)

export default visor