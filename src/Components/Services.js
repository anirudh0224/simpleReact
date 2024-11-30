import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsBriefcase } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { BsBinoculars } from "react-icons/bs";
import { BsBrightnessHigh } from "react-icons/bs";
import { BsCalendarWeek } from "react-icons/bs";
import Portfolio from './Portfolio';

function Services() {
  return (
   <>
    <div div style={{ padding: '40px' }} className='container'>
      <div className="headH1" >
        <div className='flex'>
          <h1>Services</h1>
        </div>
        <div className='flex' style={{ marginBottom: '20px' }}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
        <p className='flex' style={{ textAlign: 'center',marginBottom:'30px' }}>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.</p>
      </div>
      <div className="">
        <Row className='mt-4'>
          <Col lg="4" md="6" className='flex symbolSer'>
            <div className="iconSer">
              <BsBriefcase />
            </div>
            <div>
              <div><h4 style={{ cursor: 'pointer' }} className='headSer'>Dolor Sitema</h4> </div>
              <p className='descriptionSer'>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </Col>
          <Col lg="4" md="6" className='flex symbolSer'>
            <div className="iconSer">
              <BsCardChecklist />
            </div>
            <div>
              <div><h4 style={{ cursor: 'pointer' }} className='headSer'>Sed ut perspiciatis</h4> </div>
              <p className='descriptionSer'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </Col>
          <Col lg="4" md="6" className='flex symbolSer'>
            <div className="iconSer">
              <BsBarChart />
            </div>
            <div>
              <div><h4 style={{ cursor: 'pointer' }} className='headSer'>Magni Dolores</h4> </div>
              <p className='descriptionSer'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </Col>
          <Col lg="4" md="6" className='flex symbolSer'>
            <div className="iconSer">
              <BsBinoculars />
            </div>
            <div>
              <div><h4 style={{ cursor: 'pointer' }} className='headSer'>Nemo Enim</h4> </div>
              <p className='descriptionSer'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </Col>
          <Col lg="4" md="6" className='flex symbolSer'>
            <div className="iconSer">
              <BsBrightnessHigh />
            </div>
            <div>
              <div><h4 style={{ cursor: 'pointer' }} className='headSer'>Eiusmod Tempor</h4> </div>
              <p className='descriptionSer'>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </Col>
          <Col lg="4" md="6" className='flex symbolSer'>
            <div className="iconSer">
              <BsCalendarWeek />
            </div>
            <div>
              <div><h4 style={{ cursor: 'pointer' }} className='headSer'>Lorem Ipsum</h4> </div>
              <p className='descriptionSer'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
   </>
  )
}

export default Services
