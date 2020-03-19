import React from 'react'
import classes from '../../assets/css/Calculadora.module.css'

import Visor from './Visor/Visor'
import ContainerBotoes from './ContainerBotoes/ContainerBotoes'

export default class Calculadora extends React.Component {
  state = {
    numero: ''
  }

  atualizaValor = valor => {
    this.setState(state => ({ numero: `${state.numero}${valor}` }))
  }

  render() {
    return (
      <div className={classes.Calculadora}>
        <Visor valor={this.state.numero} />
        <ContainerBotoes atualizaValor={this.atualizaValor} />
      </div>
    )
  }
}
