import { useEffect, useRef } from 'react';
import './index.scss';

import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Slider = ({Items}) =>{
    
    const cardsTrackRef =useRef();
    const sliderRef = useRef();
    const sliderBackRef = useRef();

    useEffect(()=>{
        const cardsTrack = document.getElementById(cardsTrackRef.current.id);
        const slider = document.getElementById(sliderRef.current.id);
        const sliderBack = document.getElementById(sliderBackRef.current.id);
        function calculateAndSlide(mouseDelta, maxDelta){
            let screenSizeMx = (window.innerWidth>1023) ? -70 : -250;

            let percentage = (mouseDelta / maxDelta) * -100, 
            nextPercentageUnconstrained = parseFloat(cardsTrack.dataset.prevPercentage) + percentage,

            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained,0), screenSizeMx);
            
            cardsTrack.dataset.percentage = nextPercentage;
            cardsTrack.animate({    
                transform: `translate(${nextPercentage}%, 0)`},
                {duration: 1200, fill: "forwards"})
        }

        slider.ontouchstart = e =>{
            cardsTrack.dataset.mouseDownAt = e.touches[0].clientX;
        }

        slider.ontouchmove = e =>{
            if(cardsTrack.dataset.mouseDownAt==="0") return;     
            const mouseDelta = parseFloat(cardsTrack.dataset.mouseDownAt) - e.touches[0].clientX, maxDelta = window.innerWidth / 2;     
            calculateAndSlide(mouseDelta, maxDelta);     
        }

        slider.ontouchend = e =>{
            cardsTrack.dataset.mouseDownAt ="0";
            cardsTrack.dataset.prevPercentage =cardsTrack.dataset.percentage;
        }

        slider.onmousedown = e  =>{
            cardsTrack.dataset.mouseDownAt = e.clientX;
        }

        slider.onmousemove = e =>{ 
            if(cardsTrack.dataset.mouseDownAt==="0") return;     
            const mouseDelta = parseFloat(cardsTrack.dataset.mouseDownAt) - e.clientX, maxDelta = window.innerWidth / 2;     
            calculateAndSlide(mouseDelta, maxDelta);  

        }

        slider.onmouseup = () =>{
            cardsTrack.dataset.mouseDownAt ="0";
            cardsTrack.dataset.prevPercentage =cardsTrack.dataset.percentage;
        }

        sliderBack.addEventListener('click', ()=>{
            cardsTrack.animate({
                transform: `translate(0,0)`},
                {duration:500,fill:"forwards"}
            )
        });

    }, [])

    return(
        <>
            <div ref={sliderRef} id='slider' className='slider'>
                <div ref={cardsTrackRef}  data-mouse-down-at="0" data-prev-percentage="0" id='cardsTrack' className='cards-track'>
                    {
                        Items.map((item, i) =>(
                            <div key={i} className='item'>
                                <div className='center'>
                                    <img src={item.icon} />
                                </div>
                                <h2>{item.school}</h2>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                        <div className='slider-back-icon'>
                            <FontAwesomeIcon id='sliderBack' ref={sliderBackRef} icon={faBackward} color='orange'/>
                        </div>
                </div>
            </div>
            
        </>
    )
}

export default Slider;