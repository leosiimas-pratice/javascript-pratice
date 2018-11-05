import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


ReactDOM.render(
  <div>
    <Pai nome="José" sobrenome="Rua">
      
    <Filho nome="Pedro"/>
    <Filho nome="Mari"/>
    <Filho nome="João"/>
    
    </Pai>
  </div>
  , document.getElementById('root'))
