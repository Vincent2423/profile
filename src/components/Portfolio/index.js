import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import petQrCode from '../../assets/videos/pet-qr-code.mp4'
import smsNotif from '../../assets/videos/sms-notification.mp4'
import scannedQrLocation from '../../assets/videos/scanned-qr-location.mp4'
import petsGallery from '../../assets/videos/pets-gallery.mp4'
import nearbyVetClinic from '../../assets/videos/nearby-vet-clinic.mp4'
import otherFeatures from '../../assets/videos/other-features.mp4'
import pythonLogo from '../../assets/images/python.png'
import djangoLogo from '../../assets/images/django.png'
import postgreSqlLogo from '../../assets/images/postgresql.png'
import bootstrapLogo from '../../assets/images/bootstrap.png'
import herokuLogo from '../../assets/images/heroku.png'
import rocketShip from '../../assets/images/rocket.png'
import space from '../../assets/images/space.jpg'
import bgShowcase from '../../assets/images/bg-showcase3.png'
import paw3 from '../../assets/images/paw3.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';





const Portfolio = () =>{
    
    const [letterClass, setLetterClass] = useState('text-animate');
    const strPortfolio = ['P','O','R','T','F','O','L','I','O'];
    
    useEffect(()=>{
        document.title = "Portfolio | Vincent";
        document.getElementsByClassName("footer")[0].style.display = "none";
        

        const targets = document.querySelectorAll(".observe-element");

        const lazyload = target =>{
            const io = new IntersectionObserver((entries, observer)=>{
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        const section = entry.target;
                        section.classList.add(section.dataset.anim);
                        console.log('added');
                        observer.disconnect();
                    }

                });
            });

            io.observe(target);
        };
        targets.forEach(lazyload);

        setTimeout(()=>{
            setLetterClass('text-hover-animate');
        },4000);

    },)
    
    
    return(
       <>
            <div id='portfolio_page'>
                <Parallax pages={16} className='parallax-container'>

                <ParallaxLayer id='topNav' className='text-end'>
                    <Link to='/contact' className='text-primary'>
                        <FontAwesomeIcon icon={faHome}/>
                    </Link>
                    </ParallaxLayer>

                    <ParallaxLayer id='navUp' className='text-end' sticky={{start:1, end:16}}>
                        <a href='#top'  className='text-primary'>
                            <FontAwesomeIcon icon={faArrowAltCircleUp}/>
                            </a>
                    </ParallaxLayer>

                    <ParallaxLayer id='top' >
                        <div className='header'>
                            <h1 className="text-highlight"><span className='text-primary'>&gt;</span>
                                <AnimatedLetters 
                                    letterClass={letterClass}
                                    strArray={strPortfolio}
                                    idx={1}
                                />
                            </h1>
                            <div className='sub-header text-center'>
                                <h2 className='text-light'>This is my Portfolio, check out my previous project below!</h2>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer id='bgShowcase' className='observe-element' offset={1} factor={3} style={{backgroundImage:`url(${bgShowcase})`, backgroundSize:`contain`, backgroundRepeat:`repeat-y`, filter:`blur(3px)`}}>
                        
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} sticky={{start:1,end:3}}>
                        <div className='project-container project-introduction'>
                                <div className='introduction-text-area'>
                                    <span className='shape'></span>
                                    <div>
                                        <img src={paw3} className='pulseIn'/>

                                        <h4 className='text-light'>
                                            A web application for pet registration that has SMS notification and QR Code integration for cats & dogs last known location tracking in Barangay San Bartolome Novaliches.
                                        </h4>
                                    </div>
                                    
                                </div>

                        </div>
                    </ParallaxLayer>
                    
                    <ParallaxLayer offset={2} sticky={{start:4.5,end:5.5}}>
                        <div className='project-container introduction'>
                            <h1 className='text-highlight'>THE FEATURES</h1>
                            <div className='grid'>
                                <a href='#petQrCode' className='text-secondary observe-element' data-anim="fadeInLeft">
                                    <h2>PET QR CODE</h2>
                                    <span></span>                                        
                                </a>

                                <a href='#smsNotif' className='text-secondary observe-element' data-anim="fadeInLeft" >
                                    <h2>SMS NOTIFICATION</h2>
                                    <span></span>                                         
                                </a>

                                <a href='#locationTracking' className='text-secondary observe-element' data-anim="fadeInLeft">
                                    <h2>SCANNED QR LOCATION TRACKING</h2>
                                    <span></span>  
                                </a>

                                <a href='#petGallery' className='text-secondary observe-element'data-anim="fadeInRight">
                                    <h2>PET GALLERY</h2>
                                    <span></span>  
                                </a>

                                <a href='#vetClinics' className='text-secondary observe-element'data-anim="fadeInRight">
                                    <h2>NEAREST VETERINARY CLINICS</h2>
                                    <span></span>  
                                </a>

                                <a href='#others' className='text-secondary observe-element' data-anim="fadeInRight">
                                    <h2>OTHERS</h2>
                                    <span></span>  
                                </a>                         
                                
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer id='petQrCode' offset={3} sticky={{start:7,end:7.5}}>
                        <div className='features-showcase'>
                            <div className='showcase-content text-primary'>

                                <div>
                                    <h1 className='text-highlight'>PET QR CODE </h1>
                                    <p>Generates unique QR Codes for registered pets for free!. The QR Codes can then be scanned and will redirect to the website showing details of the pet as well as the contact information of the owner.</p>
                                </div>
                                
                                <div className='video-container'>
                                    <video autoPlay muted loop>
                                        <source src={petQrCode} type='video/mp4'></source>
                                    </video>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer id='smsNotif' offset={4} sticky={{start:8,end:8.5}}>
                        <div className='features-showcase'>
                            <div className='showcase-content text-primary'>
                                <div>
                                    <h1 className='text-highlight'>SMS NOTIFICATION </h1>
                                    <p>Supports SMS Notification to users for immediate updates to the owner everytime his or her pets' QR Code has been scanned and show it's details like location and date/time. Clicksend API is used for this feature.</p>
                                </div>
                                
                                <div className='video-container'>
                                    <video autoPlay muted loop>
                                        <source src={smsNotif} type='video/mp4'></source>
                                    </video>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer id='locationTracking' offset={5} sticky={{start:9,end:9.5}}>
                        <div className='features-showcase text-primary'>
                            <div className='showcase-content'>
                                <div>
                                    <h1 className='text-highlight'>SCANNED QR LOCATION TRACKING</h1>
                                    <p>Provides the pinpointed location where the Pet's QR Code has been scanned. Google maps API is used for the mapping.</p>
                                </div>

                                <div className='video-container'>
                                    <video autoPlay muted loop>
                                        <source src={scannedQrLocation} type='video/mp4'></source>
                                    </video>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer id='petGallery' offset={6} sticky={{start:10,end:10.5}}>
                        <div className='features-showcase'>
                            <div className='showcase-content text-primary'>
                                <div>
                                    <h1 className='text-highlight'>PET GALLERY</h1>
                                    <p>Users can share the pictures of their cute furry pets and Interact with other Pet owners through pictures!</p>
                                </div>
                                <div className='video-container'>
                                    <video autoPlay muted loop>
                                        <source src={petsGallery} type='video/mp4'></source>
                                    </video>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer id='vetClinics' offset={7} sticky={{start:11,end:11.5}}>
                        <div className='features-showcase'>
                            <div className='showcase-content text-primary'>
                                <div>
                                    <h1 className='text-highlight'>NEAREST VETERINARY CLINICS</h1>
                                    <p>Find all the nearest registered veterinary clinics in Baranggay San Bartolome.</p>
                                </div>
                                <div className='video-container'>
                                    <video autoPlay muted loop>
                                        <source src={nearbyVetClinic} type='video/mp4'></source>
                                    </video>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer id='others' offset={8} sticky={{start:12,end:12.5}}>
                        <div className='features-showcase'>
                            <div className='showcase-content text-primary'>
                                <div>
                                    <h1 className='text-highlight'>OTHERS</h1>
                                    <p>Other features include Lost & Found reportings, Owner tips for their pets and Pet First-aid Tips that will give knowledge about giving aid to their pets in case of emergencies.</p>
                                </div>
                                <div className='video-container'>
                                    <video autoPlay muted loop>
                                        <source src={otherFeatures} type='video/mp4'></source>
                                    </video>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer className='text-center' offset={13} sticky={{start:13, end:16, zIndex:`-1`}}>
                        <img id='rocketship' draggable="false" src={rocketShip}/>
                    </ParallaxLayer>
                    
                    <ParallaxLayer offset={13} factor={4} speed={0.5} style={{filter:'blur(5px)',backgroundImage:`url(${space})`, backgroundRepeat:'repeatY',zIndex:`-1`}}>
                    </ParallaxLayer>

                    <ParallaxLayer id='tools' speed={0.1} offset={14}>
                        <div className='tools-container'>
                            <h1 className='text-highlight'>TOOLS USED</h1>
                            <div className='tools-grid'>
                                <div className='box text-end'>
                                    <img src={pythonLogo} />
                                </div>
                                <div className='box'>
                                    <img src={djangoLogo} />
                                </div>
                                <div className='box text-end'>
                                    <img src={bootstrapLogo} />
                                </div>
                                <div className='box'>
                                    <img src={postgreSqlLogo} />
                                </div>
                                <div className='box text-end'>
                                    <img src={herokuLogo} />
                                </div>
                                <div className='box text-center'>
                                    <h1 className='text-primary'>Thanks for checking out!</h1>
                                </div>
                            </div>

                        </div>

                    </ParallaxLayer>

                </Parallax>

            </div>    
       </> 
    )
}

export default Portfolio;