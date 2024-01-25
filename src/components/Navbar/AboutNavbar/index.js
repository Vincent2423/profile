import '../index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const AboutNavbar = () =>{

    const navbarToggleRef = useRef();
    const navbarRef = useRef();    

    useEffect(()=>{
        const navbarToggle = document.getElementById(navbarToggleRef.current.id);
        const navbar = document.getElementById(navbarRef.current.id);
        const navbarQuickLinks = navbar.getElementsByTagName('a');
        
        if(window.innerWidth<1023){
            for(let x = 0; x < navbarQuickLinks.length; x++){
                navbarQuickLinks[x].addEventListener('click',()=>{
                    navbar.style.display="none";
                    
                })
            }
        }
        

        navbarToggle.addEventListener('click',  ()=>{

            if(navbar.style.display!="block"){
                navbar.style.display="block";
            }
            else{
                navbar.style.display="none";
            }
        });

        const navs = document.querySelectorAll('a');

     
    },[])

    return(
        <>
            <div  className='navbar-container bg-secondary'>
                <div ref={navbarToggleRef} id="about-navbar-toggle" className='navbar-toggle'>
                    <FontAwesomeIcon id='svg-icon' icon={faBars} color='orange'/>
                </div>
                <div ref={navbarRef} className='navbar' id="about-navbar">
                    <ul>
                        <li>
                            <a href="#skills" className='text-primary'>SKILLS</a>
                        </li>

                        <li>
                            <a href="#experience" className='text-primary'>EXPERIENCE</a>
                        </li>

                        <li>
                            <a href="#education" className='text-primary'>EDUCATION</a>
                        </li>

                        <li>
                            <a href="#hobbies" className='text-primary'>HOBBIES</a>
                        </li>


                        <li>
                            <Link to='/' className='text-primary'>
                                <FontAwesomeIcon icon={faArrowAltCircleLeft} color='text-primary'/>
                                Back
                            </Link>

                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default AboutNavbar