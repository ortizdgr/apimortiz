import { useState } from "react"
import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {
  const [info, setInfo] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [resultadoBusqueda, setResultadoBusqueda] = useState([])

  return (
    <>
      <Container fluid>

        <Row id="header" >
          
          <Col> <h1>COUNTRIES</h1></Col> </Row>   

        <Row id="busq" >  
  
            <Buscador info={info} busqueda={busqueda} setBusqueda={setBusqueda} setResultadoBusqueda={setResultadoBusqueda} />
    
        </Row>
       
        <Row id="main">
          <Col>
            <MiApi setInfo={setInfo} resultadoBusqueda={resultadoBusqueda} />
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default App;
