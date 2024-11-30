import React from 'react'
import Aboutbox from './Aboutbox'
import { BsBarChart } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import img1 from './images/about-mission.jpg'
import img2 from './images/about-plan.jpg'
import img3 from './images/about-vision.jpg'
import team1 from './images/team1.png';
import team2 from './images/team2.png';
import team3 from './images/team3.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Services from './Services';


function About() {
    return (
        <>
            <div style={{ padding: '40px' }} className='container'>
                <div className="headH1" >
                    <div className='flex'>
                        <h1>About US</h1>
                    </div>
                    <div className='flex' style={{ marginBottom: '20px' }}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
                    <p className='flex' style={{ textAlign: 'center'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quod vero pariatur accusantium velit facere veritatis laboriosam quidem, officia numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam magnam amet necessitatibus.</p>
                </div>
                <div className='flex'>
                    <Row className='aboutRow'>
                        <Col lg="4" md="12" sm="12" className="px-1" >
                            <Aboutbox img={img1} logo={<BsBarChart />} title='Our Mission' para=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quod vero pariatur accusantium velit facere veritatis laboriosam quidem, officia numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' />
                        </Col>
                        <Col lg="4" md="12" sm="12" className="px-1">
                            <Aboutbox img={img2} logo={<IoSunnyOutline />} title='Our Plan' para=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quod vero pariatur accusantium velit facere veritatis laboriosam quidem, officia numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' />
                        </Col>
                        <Col lg="4" md="12" sm="12" className="px-1">
                            <Aboutbox img={img3} logo={<FaRegCalendarAlt />} title='Our Vision' para=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quod vero pariatur accusantium velit facere veritatis laboriosam quidem, officia numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.' />
                        </Col>
                    </Row >
                </div>
            </div >
        </>

    )
}

export default About
