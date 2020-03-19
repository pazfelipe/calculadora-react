import React from 'react'
import classes from '../../assets/css/Calculadora.module.css'

import Visor from './Visor/Visor'
import ContainerBotoes from './ContainerBotoes/ContainerBotoes'

export default class Calculadora extends React.Component {
  state = {
    numero: ''
  }

  _atualizaValor = valor => this.setState({numero: valor}) //this.setState({ numero: valor })

  render() {
    return (
      <div className={classes.Calculadora}>
        <Visor />
        <ContainerBotoes atualizaValor={valor => this._atualizaValor(valor)} />
      </div>
    )
  }
}
