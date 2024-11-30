import Carousel from 'react-bootstrap/Carousel';
import first from './images/travel1.jpg';
import second from './images/travel2.jpg';
import third from './images/travel3.jpg';
import fourth from './images/travel4.jpg';
import About from './About';
function CarouselFadeExample() {
    return (
        <>
            {/* Landinpage */}
            <Carousel fade className='slidePage'>
                <Carousel.Item>
                    <first text="First slide" />
                    <img src={first} width={'100%'} height={'658vh'} alt="" srcset="" />
                    <Carousel.Caption className='contentHome'>
                        <div className='con1'>
                            <div data-aos="fade-down">
                                <h1 className='headingHome'>We are professional</h1>
                            </div>
                            <div data-aos="fade-up">
                                <p className='paraHome'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <button className='btnHome'>Get Started</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <second text="Second slide" />
                    <img src={second} width={'100%'} height={'658vh'} alt="" srcset="" />
                    <Carousel.Caption className='contentHome'>
                        <div className='con1'>
                            <div data-aos="fade-down">
                                <h1 className='headingHome'>Magnam aliquam quaerat</h1>
                            </div>
                            <div data-aos="fade-up">
                                <p className='paraHome'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <button className='btnHome'>Get Started</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <third text="Third slide" />
                    <img src={third} width={'100%'} height={'658vh'} alt="" srcset="" />
                    <Carousel.Caption className='contentHome'>
                        <div className='con1'>
                            <div data-aos="fade-down">
                                <h1 className='headingHome'>Nam libero tempore</h1>
                            </div>
                            <div data-aos="fade-up">
                                <p className='paraHome'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.</p>
                                <button className='btnHome'>Get Started</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <second text="Second slide" />
                    <img src={fourth} width={'100%'} height={'658vh'} alt="" srcset="" />
                    <Carousel.Caption className='contentHome'>
                        <div className='con1'>
                            <div data-aos="fade-down">
                                <h1 className='headingHome'>At vero eos et accusamus</h1>
                            </div>
                            <div data-aos="fade-up">
                                <p className='paraHome'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
                                <button className='btnHome'>Get Started</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default CarouselFadeExample;