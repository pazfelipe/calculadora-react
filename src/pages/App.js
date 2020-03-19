import React, { Component } from 'react'
import Calculadora from '../components/Calculadora/Calculadora'
import classes from '../assets/css/App.module.css'

export default class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <div className={classes.AppHeader}>
          <p>Calculadora em React</p>
          <Calculadora />
        </div>
      </div>
    )
  }
}
