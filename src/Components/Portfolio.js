import React from 'react';
import Button from 'react-bootstrap/Button';
import PortfolioBox from './PortfolioBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import folio1 from './images/folio1.jpg';
import folio2 from './images/folio2.jpg';
import folio3 from './images/folio3.jpg';
import folio4 from './images/folio4.jpg';
import folio5 from './images/folio5.jpg';
import folio6 from './images/folio6.jpg';
import folio7 from './images/folio7.jpg';
import folio8 from './images/folio8.jpg';
import folio9 from './images/folio9.jpg';
import Contact from './Contact';

function Portfolio() {
    return (
        <div className='container' style={{marginBottom:'90px'}}>
            <div div style={{ padding: '40px' }} className='container'>
                <div className="headH1" >
                    <div className='flex'>
                        <h1>Portfolio</h1>
                    </div>
                    <div className='flex' style={{ marginBottom: '20px' }}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <Button variant="outline-success active" style={{ marginRight: '30px' }}>ALL</Button>
                <Button variant="outline-success" style={{ marginRight: '30px' }}>APP</Button>
                <Button variant="outline-success" style={{ marginRight: '30px' }}>CARD</Button>
                <Button variant="outline-success">WEB</Button>
            </div>
            <Row>
               <Col className='flex' md="6" lg="4"><PortfolioBox img={folio1} title="App 1" des="APP"/></Col>
               <Col className='flex' md="6" lg="4"><PortfolioBox img={folio2} title="Web 3" des="WEB"/></Col>
               <Col className='flex' md="6" lg="4"><PortfolioBox img={folio3} title="App 2" des="APP"/></Col>
               <Col className='flex' md="6" lg="4"><PortfolioBox img={folio4} title="Card 2" des="CARD"/></Col>
               <Col className='flex' md="6" lg="4"><PortfolioBox img={folio5} title="Web 2" des="WEB"/></Col>
               <Col className='flex' md="6" lg="4"><PortfolioBox img={folio6} title="App 3" des="APP"/></Col>
               <Col className='flex' md="6" lg="4"><PortfolioBox img={folio7} title="Card 1" des="CARD"/></Col>
               <Col className='flex' md="6" lg="4"><PortfolioBox img={folio8} title="Card 3" des="CARD"/></Col>
               <Col className='flex' md="6" lg="4"><PortfolioBox img={folio9} title="Web 1" des="WEB"/></Col>
            </Row>
        </div>
    )
}

export default Portfolio
