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
        document.querySelector(".footer").classList.add("page-footer");
        
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
        text: 'I learnt this along with CSS and JS during my Senior highschool and College. I created a simple wallpaper website using JS, CSS and this during my senior highschool and I used it on the Capstone project in my College. '}},

    {id:'skill-1', icon: cssLogo, description: {level:3, 
        text:'CSS is fun to use although it is quite hard to debug as it only return visual errors. I also discovered the use of the SCSS and how to make the design of your web using this. I created a simple wallpaper website using JS, CSS and this during my senior highschool and I used it on the Capstone project in my College. '}},

    {id:'skill-2', icon: jsLogo, description: {level:3, 
        text: 'This is the first programming language I have learned and It is quite hard at first but I quite love this programming language because of its usage in web applications nowadays. I created a simple wallpaper website using HTML, CSS and this during my senior highschool and I used it on the Capstone project in my College'}},

    {id:'skill-3', icon: pythonLogo, description: {level:2.5, 
        text:'I also love python, I wished I learn this first before other programming languages. This programming language is one the top programming language out there although it has a GLI but still this programming language is no doubt to be very easy to use. I used this for my backend on my Capstone project. '}},
        
    {id:'skill-4', icon:aspNetLogo, description: {level:2.5, 
        text: "I learn the basics of this in my Senior Highschool and have upskilled on this during my internship in College. This web framework is very good and I created simple chatting web application using this."}},

    {id:'skill-5', icon:bootstrapLogo, description: {level:3.5, 
        text: "Bootstrap helped me so much in my IT capstone during college. It was easy to learn and I have fun using it in my capstone project. This is preferred for fullstack developers as it makes your front-end design development much faster and it makes your design responsive."}},

    {id:'skill-6', icon:cSharpLogo, description: {level: 2.5, 
        text: "This programming language is currently my favorite programming language, for me this programming language really emphasize the concept of OOP. I learned this programming language in Senior highschool and I upskilled this during my internship. I am currently continuously upskilling on this programming language."}},

    {id:'skill-7', icon:djangoLogo, description: {level: 3, 
        text: "Django for me is by far the best fullstack web framework out there. I used this web framework in my Capstone project and it was fairly easy to use because it's programming language is python. The web development is very fast using this framework because it mostly handles already other backend functionality of your web application such as security, login, and others."}},

    {id:'skill-8', icon:jqueryLogo, description: {level: 1.5, 
        text: "I have learned the basics of this during my senior highschool. I used this JS library in the simple web that I created during my senior highschool. "}},

    {id:'skill-9', icon:mySqlLogo, description: {level: 3, 
        text: "I learned this during college and it was quite easy to learn the basics of this database management system and especially if you learned sql scripting beforehand. I used this for my Capstone project and it's use simplicity saves me a lot of time. "}},

    {id:'skill-10', icon:postgreSqlLogo, description: {level: 1.5, 
        text: "I self studied this database management system because I have searched that it fits for Django framework which is why I learned this DBMS. "}},
        
    {id:'skill-11', icon:reactLogo, description: {level: 2, 
        text: "I found out and learned this because I find it very popular amongst companies which is why I find it essential to learn this skill. This is what I used in creating this Web Profile and it was fun and react has interesting packages for animations like parallax that I surely used for this. "}},        

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