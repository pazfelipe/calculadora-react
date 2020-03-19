import React from 'react'
import classes from '../../../../assets/css/Calculadora.module.css'

const ContainerNumeros = props => (
  <div className={classes.ContainerNumeros}>{props.children}</div>
)

export default ContainerNumeros
