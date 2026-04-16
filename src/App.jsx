import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <>
     <div className="imc-container">
        <div className="imc-header">
          <h1>login</h1>
        </div>

        <div className="imc-form">
          <input 
            type="email" 
            placeholder='Ex: Digite seu e-mail' 
          />
          <input 
            type="senha" 
            placeholder='Ex: digite sua senha' 
          />
          <button>Entrar</button>
        </div>
     </div> {/* Fecha Container */}
    </>
  )
}

