import './index.scss';
import AboutSidebar from '../Sidebar/AboutSidebar';
import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Slider from '../Slider';

import pythonLogo from '../../assets/images/python.png'
import aspNetLogo from '../../assets/images/asp-net.png'
import bootstrapLogo from '../../assets/images/bootstrap.png'
import cSharpLogo from '../../assets/images/c-sharp.png'
import cssLogo from '../../assets/images/css.png'
import djangoLogo from '../../assets/images/django.png'
import htmlLogo from '../../assets/images/html.png'
import jqueryLogo from '../../assets/images/jquery.png'
import jsLogo from '../../assets/images/js.png'
import mySqlLogo from '../../assets/images/mysql.png'
import postgreSqlLogo from '../../assets/images/postgresql.png'
import reactLogo from '../../assets/images/react.png'
import drhs from '../../assets/images/drhs.png'
import stinova from '../../assets/images/STINOVA.jpg'
import Stars from '../Stars';
import scaleUpInc from '../../assets/images/scaleUpInc.png'
import man from '../../assets/images/man1.png'


const About = () =>{

    const [letterClass, setLetterClass] = useState('text-animate');


    useEffect(()=>{
        document.querySelector(".footer").classList.add("page-footer", "d-flex");
        
        document.title = "About | Vincent";
        const targets = document.querySelectorAll("section");

        const lazyload = target =>{
            const io = new IntersectionObserver((entries, observer)=>{
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        const section = entry.target;
                        section.classList.add('bounceIn');

                        observer.disconnect();
                    }

                });
            });

            io.observe(target);
        };

        targets.forEach(lazyload);
        
        document.body.classList.add("overflowX-hidden");
        setTimeout(()=>{
            setLetterClass('text-hover-animate');
            document.body.classList.remove("overflowX-hidden");

        },4000)
    })

    const strAbout = ['A','B','O','U','T'];

    const clickEvent = (objId) => {
        const ele = document.getElementById(objId);
        const subElement = ele.children[1];

        if(ele.classList.contains('pop-card')){
            ele.classList.add('fadeout');

            setTimeout(()=>{
                subElement.classList.remove('d-block');
                ele.classList.remove('pop-card', 'fadeout');
            }, 900);
        }
        else{
            subElement.classList.add('d-block');
            ele.classList.add('pop-card');
        }
    }

    const data = [
    {id:'skill-0', icon: htmlLogo, description: {level:3.5, 
        text: "I possess a solid understanding of the fundamental principles that underpin web development. My expertise in HTML allows me to create well-structured and semantically meaningful web pages, contributing to a positive user experience."}},

    {id:'skill-1', icon: cssLogo, description: {level:3, 
        text:"I bring a solid foundation in styling and layout techniques to enhance the visual appeal and user experience of web pages. Also capable of using SCSS."}},

    {id:'skill-2', icon: jsLogo, description: {level:3, 
        text: "I have core understanding of the language's core concepts and capabilities. Experienced implementing client-side functionality to enhance user experiences. Capable of doing DOM Manipulation, applied Object-Oriented Programming(OOP), event handling, arrow functions, AJAX, and API usage."}},

    {id:'skill-3', icon: pythonLogo, description: {level:2.5, 
        text:'My skills in Python allows me to contribute to various programming tasks and software development projects as it is what I used in my capstone project. Capable of doing data structures, web development and applied Object-Oriented Programming(OOP).'}},
        
    {id:'skill-4', icon:aspNetLogo, description: {level:2.5, 
        text: "I have a foundational understanding of web development using the ASP.NET framework as it was used for my internship in College. Capable of creating web application, debugging and testing. I also have understanding of MVC, Razor pages, N-tier architecture in this framework. I am committed to continuous learning and staying updated on advancements in ASP.NET and web development technologies."}},

    {id:'skill-5', icon:bootstrapLogo, description: {level:3.5, 
        text: "I bring a solid foundation in leveraging this popular front-end framework for building responsive and visually appealing websites. My expertise allows me to efficiently create layouts, components, and user interfaces with enhanced responsiveness across various devices. I have experienced using this in my capstone project and during internship in college."}},

    {id:'skill-6', icon:cSharpLogo, description: {level: 3, 
        text: "I have core understanding of this programming language enabling me to contribute effectively to software development projects. I have experienced using this during my internship in college. Capable of doing basic multi-threading, effective and readable functions or methods, data structures, and applied Object-Oriented Programming."}},

    {id:'skill-7', icon:djangoLogo, description: {level: 3, 
        text: "I have understanding of core functions of this powerful tool for building robust and scalable web applications. I have experienced using this web framework in my capstone project. Capable and has solid understanding of Model-View-Template (MVT), Object-Relational Mapping, Forms, Admin interface, and static files and media handling."}},

    {id:'skill-8', icon:jqueryLogo, description: {level: 1.5, 
        text: "As an individual at a beginner level in jQuery, I possess a foundational understanding of this JavaScript library and can apply basic concepts."}},

    {id:'skill-9', icon:mySqlLogo, description: {level: 3, 
        text: "I have knowledge of relational database management, enabling me to design, implement, and manage databases effectively. Capable of doing intermediate SQL queries."}},

    {id:'skill-10', icon:postgreSqlLogo, description: {level: 2.5, 
        text: "I have knowledge of relational database management, enabling me to design, implement, and manage databases effectively. Experienced using this on capstone project."}},
        
    {id:'skill-11', icon:reactLogo, description: {level: 2, 
        text: "Capable of building user interfaces and web applications using this popular JavaScript library. My understanding of this framework enables me to create interactive and dynamic front-end experiences, contributing effectively to web projects."}},        

    ]

    let items = [
        {title:"College", school:"STI College Novaliches", icon:stinova, description:"Magna Cum Laude Graduate with a 4-year degree of Bachelor of Science in Information Technology."},

        {title:"Senior Highschool", school:"STI College Novaliches (SHS)", icon:stinova, description:"Academic Excellence Awardee / Honor Student in the Information Technology course major in mobile Application and web development. "},

        {title:"Junior Highschool", school:"Dona Rosario highschool", icon:drhs , description:"Graduated with a vocational course of Information and Communication Technology."},

,
        ];

    return (
        <>  
            <AboutSidebar />
            <div className="container about-page">
                <div className="header">
                    <h1 className="text-highlight"><span className='text-primary'>&gt;</span>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={strAbout}
                        idx={15}
                        />
                    </h1>

                    <div className="sub-header">
                        <img src={man}/>
                        <p className='text-light'>Hello visitor welcome to my web profile, curious and intrigued? Feel free to check more things about me below!</p>
                    </div>
                </div>

                <div className='body'>

                    <section  id='skills' className='text-primary'>
                        <h1 className='text-highlight'>Skills</h1>

                        <div className='cards-container'>
                            {data.map((skill, i)=>(
                                <div key={i} className='card' id={skill.id} onClick={()=>clickEvent(skill.id)}>
                                    <img src={skill.icon}/>
                                    <div>                                   
                                        <span>
                                            Level:    
                                            <Stars nums={skill.description.level}/>                          
                                        </span>                            
                                        <p>{skill.description.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </section>

                    <section   id='experience' className='text-primary'>
                        <h1 className='text-highlight'>Experience</h1>

                        <div className='experience-content'>
                            <div className='blur'></div>

                            <div className='img-container'>
                                <span></span>
                                <img src={scaleUpInc} />
                            </div>

                            <h2>ScaleUp Solutions Inc. | Software Developer Intern</h2>
                            <h3>Duration: March - June | 2023</h3>
                            <h3>Tools Used: C#, ASP.NET, Git, MySQL, Zoho & Visual Studio.</h3>
                            <p>Improved the system by code refactoring thus the codebase become more readable and efficient.
                            Debugging & functionality testing for our ERP system in which I became an aid to my lead engineer in finding bugs.
                            Adding of missing system resource strings.
                            Added comments to system’s codebase and made it more readable.
                            Redesigned and made responsive the card component of one of our client’s system.
                            </p>
                        </div>

                    </section>
                    
                    <section   id='education'>
                        <h1 className='text-highlight'>Education</h1>
                        <Slider Items={items}/>
                    </section>

                    <section   id="hobbies">
                        <h1 className='text-highlight'>Hobbies</h1>
                        <div>
                            <small>Image by Jehoots.com | Unsplash</small>
                            <span>
                            I love to play videogames especially story-based videogames like God of War, The Last of Us, Bloodborne, Final fantasy
                            and many more!
                            </span>
                        </div>

                        <div>
                            <small>Image by Gabriel Gurolla | Unsplash</small>
                            <span>
                            I love to play musical instruments such as guitar, drums, and beatbox. For me, playing musical instruments is very fun!
                            </span>
                        </div>

                        <div>
                            <small>Image by David Marcu | Unsplash</small>
                            <span>
                                I love cycling adventures! Seeing beautiful landscapes, meeting awesome people, and most importantly
                                creating unforgettable moments that I will surely recall in the next 20 years or so. Seeing nature and beautiful views
                                is my way of resetting my mental.
                            </span>
                        </div>
                    </section>




                </div>

            </div>
            
        </>
    )

}

export default About