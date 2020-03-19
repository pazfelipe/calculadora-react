import React from 'react'
import classes from '../../../assets/css/Calculadora.module.css'

import ContainerNumeros from './ContainerNumeros/ContainerNumeros'

const containerBotoes = props => (
  <div className={classes.ContainerBotoes}>
    <ContainerNumeros atualizaValor={valor => props.atualizaValor(valor)} />
  </div>
)

export default containerBotoes
