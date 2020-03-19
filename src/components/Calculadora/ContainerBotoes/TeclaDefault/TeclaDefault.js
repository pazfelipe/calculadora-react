import React from 'react'

const TeclaDesligar = props => (
  <div className={props.classTecla} onClick={() => props.clicked()}>
    <span id={props.id}>{props.tecla}</span>
  </div>
)

export default TeclaDesligar
