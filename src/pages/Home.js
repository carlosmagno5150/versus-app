import React from 'react'
import { useFetch } from '../hooks/useFetch'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carroussel from '../components/Carroussel';

function Home() {
  
  return (
    <Container>      
      <h1>Home</h1>        
      <Carroussel></Carroussel>
        
      
    </Container>
  )
}

export default Home