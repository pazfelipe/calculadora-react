import React from 'react'
import classes from '../../../../assets/css/Calculadora.module.css'
import TeclaNumero from './TeclaNumero/TeclaNumero'

const numbers = [
  ...Array.from({ length: 9 }, (_, i) => `${i + 1}`),
  '0',
  '00'
]

export default class ContainerNumeros extends React.Component {
  render() {
    return (
      <div
        className={classes.ContainerNumeros}
      >
        {numbers.map(number => (
          <TeclaNumero
            key={number}
            numero={number}
            onClicked={this.props.atualizaValor}
          />
        ))}
      </div>
    )
  }
}
