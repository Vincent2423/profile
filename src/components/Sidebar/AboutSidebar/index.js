import '../index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const AboutSidebar = () =>{

    const sidebarToggleRef = useRef();
    const sidebarRef = useRef();    

    useEffect(()=>{
        const sidebarToggle = document.getElementById(sidebarToggleRef.current.id);
        const sidebar = document.getElementById(sidebarRef.current.id);
        const sidebarQuickLinks = sidebar.getElementsByTagName('a');
        
        if(window.innerWidth<1023){
            for(let x = 0; x < sidebarQuickLinks.length; x++){
                sidebarQuickLinks[x].addEventListener('click',()=>{
                    sidebar.style.display="none";
                })
            }
        }
        

        sidebarToggle.addEventListener('click',  ()=>{

            if(sidebar.style.display!="block"){
                sidebar.style.display="block";
            }
            else{
                sidebar.style.display="none";
            }
        });

        const navs = document.querySelectorAll('a');

     
    },[])

    return(
        <>
            <div  className='sidebar-container bg-secondary'>
                <div ref={sidebarToggleRef} id="about-sidebar-toggle" className='sidebar-toggle'>
                    <FontAwesomeIcon id='svg-icon' icon={faBars} color='orange'/>
                </div>
                <div ref={sidebarRef} className='sidebar' id="about-sidebar">
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
                            <Link to='/home' className='text-primary'>
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


export default AboutSidebar