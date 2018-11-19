import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Header from '../components/Header'

import React from 'react'
import { HashRouter } from 'react-router-dom'


export default props =>
    <HashRouter>
       <div className="app">            
           <Header/>
        </div>     
    </HashRouter>
    