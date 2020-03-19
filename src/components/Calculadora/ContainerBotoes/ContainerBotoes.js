import React from 'react'
import classes from '../../../assets/css/Calculadora.module.css'


const containerBotoes = props => (
  <div className={classes.ContainerBotoes}>{props.children}</div>
)

export default containerBotoes
