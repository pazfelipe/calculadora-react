import React from 'react'
import classes from '../../../../assets/css/Calculadora.module.css'

import TeclaNumero from './TeclaNumero/TeclaNumero'
import TeclaNumeroZero from './TeclaNumero/Tecla0'
import TeclaNumeroZeroZero from './TeclaNumero/Tecla00'

export default class ContainerNumeros extends React.Component {
  state = {
    numero: ''
  }

  _onClicked = numero =>
    this.setState({ numero }, () => console.log(this.state.numero, 'numero clicado'))

  render() {
    return (
      <div
        className={classes.ContainerNumeros}
        onClick={() => this.props.atualizaValor(this.state.numero)}
      >
        <TeclaNumero numero='1' onClicked={() => this._onClicked('1')} />
        <TeclaNumero numero='2' onClicked={() => this._onClicked('2')} />
        <TeclaNumero numero='3' onClicked={() => this._onClicked('3')} />
        <TeclaNumero numero='4' onClicked={() => this._onClicked('4')} />
        <TeclaNumero numero='5' onClicked={() => this._onClicked('5')} />
        <TeclaNumero numero='6' onClicked={() => this._onClicked('6')} />
        <TeclaNumero numero='7' onClicked={() => this._onClicked('7')} />
        <TeclaNumero numero='8' onClicked={() => this._onClicked('8')} />
        <TeclaNumero numero='9' onClicked={() => this._onClicked('9')} />
        <TeclaNumeroZero numero='0' onClicked={() => this._onClicked('0')} />
        <TeclaNumeroZeroZero
          numero='00'
          _onClicked={() => this.onClicked('00')}
        />
      </div>
    )
  }
}
