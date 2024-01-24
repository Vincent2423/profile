import { faBars } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEffect, useRef } from 'react';

const Sidebar = () =>{

    const sidebarToggleRef = useRef();
    const sidebarRef = useRef();    

    useEffect(()=>{
        const sidebarToggle = document.getElementById(sidebarToggleRef.current.id);
        const sidebar = document.getElementById(sidebarRef.current.id);
        sidebarToggle.addEventListener('click',  ()=>{
            if(sidebar.style.display!="block"){
                sidebar.style.display="block";
            }
            else{
                sidebar.style.display="none";
            }
        });
    },[])

    return(
        <>
            <div className='sidebar-container bg-secondary'>
                <div ref={sidebarToggleRef} id="sidebarToggle" className='sidebar-toggle'>
                    <FontAwesomeIcon id='svg-icon' icon={faBars} color='orange'/>
                </div>
                <div ref={sidebarRef} id="sidebar" className='sidebar '>
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


export default Sidebar