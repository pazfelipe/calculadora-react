import React from 'react'
import classes from '../../assets/css/Calculadora.module.css'

import Visor from './Visor/Visor'
import ContainerBotoes from './ContainerBotoes/ContainerBotoes'
import ContainerNumeros from './ContainerBotoes/ContainerNumeros/ContainerNumeros'
import TeclaNumero from './ContainerBotoes/ContainerNumeros/TeclaNumero/TeclaNumero'
import TeclaNumeroZero from './ContainerBotoes/ContainerNumeros/TeclaNumero/Tecla0'
import TeclaNumeroZeroZero from './ContainerBotoes/ContainerNumeros/TeclaNumero/Tecla00'
import Tecla from './ContainerBotoes/TeclaDefault/TeclaDefault'

export default class Calculadora extends React.Component {
  state = {
    tecla: '',
    teclaID: '',
    valor: '',
    acao: '',
    numero: ''
  }

  _onClicked = valor => {
    if (valor === 'undefined' || valor === undefined) return
    if (isNaN(valor)) {
      if (valor === 'limpar') {
        this._limpaCaptura()
        return this._limpar()
      }

      if (valor !== '=') {
        this.setState({
          acao: valor,
          numero: this.state.valor
            ? parseFloat(this.state.valor)
            : parseFloat(valor),
          valor: ''
        })
      } else {
        const numero1 = this.state.numero || 0
        const numero2 = parseFloat(this.state.valor) || 0
        const acao = this.state.acao || '+'
        const operacao = String(numero1) + acao + String(numero2)

        const resultado = eval(operacao)

        this.setState({
          valor:
            isNaN(resultado) ||
            ((acao === '*' || acao === '/') && (numero1 === 0 || numero2 === 0))
              ? 0
              : resultado
        })
      }
    } else {
      this.setState({
        valor: this.state.valor.replace(/^(0)+/, '') + valor
      })
    }
  }

  _limpar = () => this.setState({ tecla: '', teclaID: '', valor: '', acao: '' })

  _capturaTecla = event => {
    let tecla
    if (
      (event.keyCode >= 48 && event.keyCode <= 57) ||
      (event.keyCode >= 96 && event.keyCode <= 105)
    ) {
      event.preventDefault()
      tecla = String.fromCharCode(
        96 <= event.keyCode && event.keyCode <= 105
          ? event.keyCode - 48
          : event.keyCode
      )

      this.setState({
        teclaID: `numero${tecla}`
      })
    }

    if (event.keyCode === 27) {
      event.preventDefault()
      this.setState({
        teclaID: 'teclaLimpar',
        numero: ''
      })

      tecla = 'limpar'

      const el = document.getElementById(this.state.teclaID)

      el.parentNode.classList.add('TeclaAtiva')
      el.parentNode.classList.add('Desligar')
    }

    if (event.keyCode === 111 || event.keyCode === 191) {
      event.preventDefault()
      this.setState({
        teclaID: 'teclaDividir',
        numero: ''
      })

      tecla = '/'
    }

    if ((event.shiftKey && event.keyCode === 56) || event.keyCode === 106) {
      event.preventDefault()
      this.setState({
        teclaID: 'teclaMulti',
        numero: ''
      })

      tecla = '*'
    }

    if (event.keyCode === 109) {
      event.preventDefault()
      this.setState({
        teclaID: 'teclaSub',
        numero: ''
      })

      tecla = '-'
    }

    if (event.keyCode === 61 || event.keyCode === 13) {
      event.preventDefault()
      this.setState({
        teclaID: 'teclaIgual'
      })

      tecla = '='
    }

    if (event.keyCode === 107) {
      event.preventDefault()
      this.setState({
        teclaID: 'teclaSomar',
        numero: ''
      })

      tecla = '+'
    }

    this._onClicked(tecla)

    if (this.state.teclaID) {
      document
        .getElementById(this.state.teclaID)
        .parentNode.classList.add('TeclaAtiva')
    }
  }

  _limpaCaptura = () => {
    if (this.state.teclaID) {
      const el = document.getElementById(this.state.teclaID)
      el.parentNode.classList.remove('TeclaAtiva')
      el.parentNode.classList.remove('Desligar')
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this._capturaTecla)
    window.addEventListener('keyup', this._limpaCaptura)
  }

  render() {
    const teclasNumericas = [...Array.from({ length: 9 }, (_, i) => `${i + 1}`)]

    const teclas = [
      {
        id: 'teclaLimpar',
        tecla: 'C',
        class: 'TeclaDesligar',
        acao: 'limpar'
      },
      { id: 'teclaDividir', tecla: '/', class: 'TeclaNumero', acao: '/' },
      { id: 'teclaMulti', tecla: '*', class: 'TeclaNumero', acao: '*' },
      { id: 'teclaSub', tecla: '-', class: 'TeclaNumero', acao: '-' }
    ]

    const teclasBottom = [
      { id: 'teclaSomar', tecla: '+', class: 'TeclaSomar', acao: '+' },
      { id: 'teclaIgual', tecla: '=', class: 'TeclaNumero', acao: '=' }
    ]

    return (
      <div className={classes.Calculadora}>
        <Visor valor={this.state.valor} />
        <ContainerBotoes>
          <ContainerNumeros>
            {teclasNumericas.map(tecla => {
              return (
                <TeclaNumero
                  key={tecla}
                  id={`numero${tecla}`}
                  numero={tecla}
                  onClicked={() => this._onClicked(String(tecla))}
                />
              )
            })}
            <TeclaNumeroZero onClicked={() => this._onClicked('0')} />
            <TeclaNumeroZeroZero onClicked={() => this._onClicked('00')} />
          </ContainerNumeros>
          <div className={classes.ContainerOperacoes}>
            {teclas.map(tecla => {
              return (
                <Tecla
                  key={tecla.id}
                  clicked={() => this._onClicked(tecla.acao)}
                  tecla={tecla.tecla}
                  id={tecla.id}
                  classTecla={classes[tecla.class]}
                />
              )
            })}
          </div>
          <div className={classes.ContainerBottom}>
            {teclasBottom.map(tecla => {
              return (
                <Tecla
                  key={tecla.id}
                  clicked={() => this._onClicked(tecla.acao)}
                  tecla={tecla.tecla}
                  id={tecla.id}
                  classTecla={classes[tecla.class]}
                />
              )
            })}
          </div>
        </ContainerBotoes>
      </div>
    )
  }
}
