import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaAngleRight } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div style={{ backgroundColor: '#111111', color: 'white' }}>
                <div className='container' >
                    <div className='footerData'>
                        <Row>
                            <Col md="6" sm="12" lg="3">
                                <div>
                                    <div className='borderleft'><h3 className='footerLogo flex'>BizaPage</h3></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos blanditiis, veniam inventore reprehenderit excepturi libero eius ipsa accusamus temporibus! Harum hic illum magnam rem odit inventore nisi dolore ea aliquid!</p>
                                </div>
                            </Col>
                            <Col md="6" sm="12" lg="3">
                                <div>
                                    <h4 style={{ fontSize: '14px' }}>USEFUL LINKS</h4>
                                    <div className='lineFlex'>
                                        <div className='line4'></div>
                                        <div className='line5'></div>
                                        <div className='line5'></div>
                                        <div className='line5'></div>
                                        <div className='line5'></div>
                                        <div className='line5'></div>
                                    </div>
                                    <div style={{ borderBottom: '1px solid #66666642', marginBottom: '10px' }}>
                                        <div style={{ paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                            <FaAngleRight />
                                            <h5 style={{ marginBottom: '0px', fontSize: '14px', marginLeft: '10px' }}>Home</h5>
                                        </div>
                                    </div>
                                    <div style={{ borderBottom: '1px solid #66666642', marginBottom: '10px' }}>
                                        <div style={{ paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                            <FaAngleRight />
                                            <h5 style={{ marginBottom: '0px', fontSize: '14px', marginLeft: '10px' }}>Abot uS</h5>
                                        </div>
                                    </div>
                                    <div style={{ borderBottom: '1px solid #66666642', marginBottom: '10px' }}>
                                        <div style={{ paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                            <FaAngleRight />
                                            <h5 style={{ marginBottom: '0px', fontSize: '14px', marginLeft: '10px' }}>Services</h5>
                                        </div>
                                    </div>
                                    <div style={{ borderBottom: '1px solid #66666642', marginBottom: '10px' }}>
                                        <div style={{ paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                            <FaAngleRight />
                                            <h5 style={{ marginBottom: '0px', fontSize: '14px', marginLeft: '10px' }}>Term of service</h5>
                                        </div>
                                    </div>
                                    <div style={{ borderBottom: '1px solid #66666642', marginBottom: '10px' }}>
                                        <div style={{ paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                            <FaAngleRight />
                                            <h5 style={{ marginBottom: '0px', fontSize: '14px', marginLeft: '10px' }}>Privacy policy</h5>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col md="6" sm="12" lg="3">
                                <h4 style={{ fontSize: '14px' }}>CONTACT US</h4>
                                <div className='lineFlex'>
                                    <div className='line4'></div>
                                    <div className='line5'></div>
                                    <div className='line5'></div>
                                    <div className='line5'></div>
                                    <div className='line5'></div>
                                    <div className='line5'></div>
                                </div>
                                <div>
                                    <p>
                                        A108 Adam Street <br />
                                        New York, NY 535022<br />
                                        <strong>Phone:</strong> +1 5589 55488 55<br />
                                        <strong>Email:</strong> info@example.com<br />
                                    </p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ fontSize: '35px', marginRight: '5px' }}><FaTwitterSquare /></div>
                                    <div style={{ fontSize: '35px', marginRight: '5px' }}><FaFacebookSquare /></div>
                                    <div style={{ fontSize: '35px', marginRight: '5px' }}><FaInstagramSquare /></div>
                                    <div style={{ fontSize: '35px', marginRight: '5px' }}><FaLinkedin /></div>
                                </div>

                            </Col >
                            <Col md="6" sm="12" lg="3">
                                <h4 style={{ fontSize: '14px' }}>OUR NEWSLETTER</h4>
                                <div className='lineFlex'>
                                    <div className='line4'></div>
                                    <div className='line5'></div>
                                    <div className='line5'></div>
                                    <div className='line5'></div>
                                    <div className='line5'></div>
                                    <div className='line5'></div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos blanditiis, veniam inventore reprehenderit excepturi libero eius ipsa accusamus temporibus!</p>
                                <div style={{ display: 'flex' }}>
                                    <input type="text" /><button className='contactBtn'>Send Message</button>
                                </div>
                            </Col>
                        </Row >
                    </div >
                </div >
            </div >
            <div style={{ backgroundColor: '#000000',color:'white',padding:'20px'}}>
                <p className='flex' style={{marginBottom:'5px'}}> <FaRegCopyright style={{marginRight:'5px'}}/> Copyright <strong style={{margin:'0px 5px'}}>BizPage.</strong> All Rights Reserved </p>
                <p className='flex' style={{marginBottom:'5px'}}>Designed by <strong style={{color:'#18d262',marginLeft:'5px'}}>Anirudh Sankhat</strong> </p>
            </div>
        </>
    )
}

export default Footer