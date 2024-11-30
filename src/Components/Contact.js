import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoLocationOutline } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

function Contact() {
    return (
        <div className='contactMain'>
            <div div style={{ padding: '40px' }} className='container'>
                <div className="headH1" >
                    <div className='flex'>
                        <h1>Contact US</h1>
                    </div>
                    <div className='flex' style={{ marginBottom: '20px' }}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
                    <p className='flex' style={{ textAlign: 'center', marginBottom: '35px' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <Row>
                    <Col md="4" className='' style={{ borderRight: '1px solid #9e9e9e60' }}>
                        <div className='flex' style={{ marginBottom: '13px', fontSize: '50px', color: '#18d26e' }}><IoLocationOutline /></div>
                        <div className='flex'><p className='' style={{ fontSize: '20px', fontWeight: 'bold', color: '#9e9e9e', marginBottom: '13px' }}>ADDRESS</p></div>
                        <div className='flex'><p>A108 Adam Street, NY 535022, USA</p></div>
                    </Col>
                    <Col md="4" className='' style={{ borderRight: '1px solid #9e9e9e60' }}>
                        <div className='flex' style={{ marginBottom: '13px', fontSize: '50px', color: '#18d26e' }}><BsPhone /></div>
                        <div className='flex'><p className='' style={{ fontSize: '20px', fontWeight: 'bold', color: '#9e9e9e', marginBottom: '13px' }}>PHONE NUMBER</p></div>
                        <div className='flex'><p>+1 5589 55488 55</p></div>
                    </Col>
                    <Col md="4" className='' style={{ borderRight: '1px solid #9e9e9e60' }}>
                        <div className='flex' style={{ marginBottom: '13px', fontSize: '50px', color: '#18d26e' }}><MdOutlineMailOutline /></div>
                        <div className='flex'><p className='' style={{ fontSize: '20px', fontWeight: 'bold', color: '#9e9e9e', marginBottom: '13px' }}>Email</p></div>
                        <div className='flex'><p>info@example.com</p></div>
                    </Col>
                </Row>
                <div className='contactData'>
                    <div className='flex'>
                        <input type="text" className='contactName' placeholder='Your Name'/>
                        <input type="text" className='contactName' placeholder='Youe Email'/>
                    </div>
                    <div className='flex'>
                        <input type="text"  className='contactSub' placeholder='Subject'/>
                    </div>
                    <div className='flex'>
                        <textarea name="" cols={'144'} rows={'5'} id="" className='contactArea' placeholder='Message'></textarea>
                    </div>
                    <div className='flex'>
                        <button className='contactBtn'>Send Message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
