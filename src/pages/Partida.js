import React from 'react'
import { useParams, NavLink } from "react-router-dom"
import { useFetch } from '../hooks/useFetch'
import Container from 'react-bootstrap/Container'

const Partida = () => {

  const { id } = useParams("id")
  const url = "http://localhost:3000/partida/"+id;
  const { data: itens } = useFetch(url);  
  console.log(id)

  return (
    <Container>
      <h1>Partida </h1>
      <NavLink to="/partidas">Voltar</NavLink>
      { itens && (<div>
      id: {itens.id} <br/>
      data evento: {itens.dataEvento} <br/>
      lado A: {itens.ladoA} <br/>
      lado B: {itens.ladoB} <br/>
      </div>)} 
    </Container>
  )
}

export default Partida