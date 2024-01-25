import { faBars } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEffect, useRef } from 'react';

const Navbar = () =>{

    const navbarToggleRef = useRef();
    const navbarRef = useRef();    

    useEffect(()=>{
        const navbarToggle = document.getElementById(navbarToggleRef.current.id);
        const navbar = document.getElementById(navbarRef.current.id);
        navbarToggle.addEventListener('click',  ()=>{
            if(navbar.style.display!="block"){
                navbar.style.display="block";
            }
            else{
                navbar.style.display="none";
            }
        });
    },[])

    return(
        <>
            <div className='navbar-container bg-secondary'>
                <div ref={navbarToggleRef} id="navbarToggle" className='navbar-toggle'>
                    <FontAwesomeIcon id='svg-icon' icon={faBars} color='orange'/>
                </div>
                <div ref={navbarRef} id="navbar" className='navbar '>
                    <ul>
                        <li>
                            <Link to='/about' className='text-primary'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='/portfolio' className='text-primary'>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' className='text-primary'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default Navbar