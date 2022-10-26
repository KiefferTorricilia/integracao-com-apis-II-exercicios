import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")
  const [usuario, setUsuario] = useState()
  
  const onChangeNome = (event) =>{
    setNome(event.target.value)
  }
  const onChangeIdade = (event) => {
    setIdade(event.target.value)
  }
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }


  const funcFinal = () => {

    const formulario = {
      nome: nome,
      idade: idade,
      email: email,
    }

   setUsuario(formulario)
   console.log(formulario)

   setEmail("")
   setIdade("")
   setNome("")
  }
    
  
  
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={onChangeNome} />
        </label>
        <label>
          Idade:
          <Input value={idade} onChange={onChangeIdade} />
        </label>
        <label>
          E-mail:
          <Input value={email} onChange={onChangeEmail} />
        </label>
      <button onClick={funcFinal} >Enviar dados</button>
      </Form>
      
    </MainContainer>
  )
}

export default MainPage