import React from 'react'
import { useFetch } from '../hooks/useFetch'

import CardGroup from 'react-bootstrap/CardGroup';
import CardPartida from '../components/CardPartida';
import Container from 'react-bootstrap/Container'

const Partidas = () => {
  
  const url = "http://localhost:3000/partida"
  const { data: itens } = useFetch(url);  
  console.log(itens)

  return (
    <Container>
      <h1>Partidas</h1>
      <div className="card-flex">      
        { itens && itens.map( (item) =>           
             <CardPartida id={item.id} 
             ladoA={item.ladoA}
             ladoB={item.ladoB}
             data={item.dataEvento}
             image={item.competicao.logo}
             competicao={item.competicao.nome}
             ></CardPartida>
        )}
      
      </div>      
    </Container>
  )
}

export default Partidas