
import './style.css';
import logo from '../../images/Group 3.png'
import logoNome from '../../images/PASSOS DO PATRIMÔNIO.svg'
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function Preloader() {
  const [visivel, setVisivel] = useState(true)

  useEffect(() => {
    
    setTimeout(()=>{
      setVisivel(false)
     }, 3000)
  },[])


  return (
    <>
    {visivel ? 
      <Container fluid>
        <Row>
          <Col>
          <div className="Preloader">
            <img src={logo} alt="Logo da aplicação Passos do Patrimônio" />
            <img src={logoNome} alt="Passos do Patrimônio" />
          </div>
          </Col>
        </Row>
      </Container>
    : null
    }
    </>
  );
}

export default Preloader;
