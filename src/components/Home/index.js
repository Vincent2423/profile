import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from '../Logo';
import './index.scss';
import Navbar from '../Navbar';
const Home = () =>{

    const [letterClass, setLetterClass] = useState('text-animate-bounce-in');

    useEffect(()=>{
        document.querySelector(".footer").classList.remove("page-footer");
        document.querySelector(".footer").classList.add("d-flex");

        document.title = "Home | Vincent";
        document.body.classList.add("overflowX-hidden");
        setTimeout(()=>{
              document.body.classList.remove("overflowX-hidden");
              setLogoClass('animate-logo');
        },3000)

        setTimeout(()=>{
            setLetterClass('text-hover-animate')
        },5000)
    }, []);

    const [logoClass, setLogoClass] = useState('animateIn-logo');

    return(
        
        <div id='home_page' className='homepage'>
            <Navbar />
            <Logo logoClass={logoClass}/>
            <div className='text-zone'>
                <h1 className={`text-animate-bounce-in text-primary`}>
                    <AnimatedLetters 
                    strArray={['H','i']}
                    letterClass={letterClass}
                    idx={0}
                    />

                    <AnimatedLetters 
                    strArray={['t','h','e','r','e','!']}
                    letterClass={letterClass}
                    idx={3}
                    />


                    <br />
                    <span className='textzone-highlight'>
                    <AnimatedLetters 
                    strArray={[`I`,`'`,`m`]}
                    letterClass={letterClass}
                    idx={10}
                    />
                        <span className='text-highlight'>
                            <AnimatedLetters 
                            strArray={[`V`,`i`,`n`,`c`,`e`,`n`,`t`]}
                            letterClass={letterClass}
                            idx={15}
                            />
                        </span>
                    </span>
                    <br />
                    
                    <div>
                        Software Developer
                    </div>
                   

                </h1>

            </div>
        </div>
    )
}

export default Home