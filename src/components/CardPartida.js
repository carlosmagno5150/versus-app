import React from 'react'
import Card from 'react-bootstrap/Card';
import Moment from 'moment';
import { NavLink } from 'react-router-dom'

const CardPartida = (props) => {
  return (
    <Card style={{ width: '18rem' }} key={props.id}>
          <Card.Img variant="top" src={props.image} alt="" />
          <Card.Body>
            <Card.Title>
              {props.ladoA} vs {props.ladoB}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
            {props.competicao}  
            </Card.Subtitle>
            <Card.Text>            
            Data: {Moment(props.data).format('DD/MM/YYYY HH:mm' )}
            <span>
              <br />
            <NavLink to={"/partida/"+props.id}>Detalhes</NavLink>
            </span>
            </Card.Text>
            {/* <Card.Link as="Link" to={"/partida"}>Card Link</Card.Link>             */}
          </Card.Body>
        </Card>       
  )
}

export default CardPartida