import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeftLong, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailJs from '@emailjs/browser';


const Contact = () =>{

    const contactStr = ['C','O','N','T','A','C','T',], meStr =  ['M','E'];
    document.title="Vincent | Contact "
    const [letterClass, setLetterClass] = useState("text-animate");

    const refForm = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();
        emailJs
            .sendForm(
                'service_mgs4xz6',
                'template_ltyvjen',
                refForm.current,
                'twPTsTTJhR4l99BB-'
            )
            .then(
                ()=>{
                alert('Message successfully sent!');
                window.location.reload();
            },
            ()=>{
                alert('fail to send message')
            })
    }
    
    useEffect(()=>{
        document.querySelector(".footer").classList.add("page-footer");

        document.body.classList.add("overflowX-hidden");
        setTimeout(()=>{
            document.body.classList.remove("overflowX-hidden");
            setLetterClass("text-hover-animate");
        },3000)
        
    });

    return(
        <>
            <div id='contact-page'>
                <Link to='/contact' className='text-primary back-arrow'>
                    <FontAwesomeIcon icon={faArrowLeftLong}/>
                </Link>
                <h1 className="text-highlight" >
                    <AnimatedLetters letterClass={letterClass} strArray={contactStr} idx={1} />
                    
                    <AnimatedLetters letterClass={letterClass} strArray={meStr} idx={8} />
                </h1>
                <div className='contact-container fadeIn-bottomRight'>
                    <div className='text-primary contact-detail'>
                        <FontAwesomeIcon icon={faGithubSquare} color='white'/>
                        <a target='_blank' href="https://github.com/vinzent24" className='text-primary'>
                            <h3>Check me out on Github!</h3>
                        </a>
                    </div >

                    <div className='text-primary contact-detail'>
                        <FontAwesomeIcon icon={faLinkedin} color='white'/>
                        <a target='_blank' href="https://www.linkedin.com/in/vincent-tenorio-69936417a/" className='text-primary'>
                            <h3>Connect with me in LinkedIn!</h3>
                        </a>
                    </div >

                    <h3 className='contact-detail text-primary'>
                        <FontAwesomeIcon icon={faSquarePhone} color='white'/>
                        <a>
                           +63 968 558 0003
                        </a>
                    </h3>
                </div>

                    <form ref={refForm} id="emailForm" onSubmit={sendEmail} className='fadeIn-bottomRight'>
                        <div className="form-control input-half">
                            <input type="text" name="from_name"  placeholder="Name..." required/>
                        </div>

                        <div className="form-control email input-half">
                            <input type="email" name="email" placeholder="Email..." required/>
                        </div>

                        <div className="form-control">
                            <input type="text" name="subject" placeholder="Subject..." required/>
                        </div>

                        <div className="form-control">
                            <textarea type="text"  name="message" placeholder="Message..." required/>
                        </div>

                        <div>
                            <input className="form-btn text-light" type='submit' value="Send"/>
                            <button className="form-btn text-light" type='reset'>
                                Clear
                            </button>
                        </div>


                    </form>
                </div>
        </>
    )
}

export default Contact