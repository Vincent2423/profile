import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>{
    return(
        <>
            <div className='footer d-flex'>
                <ul>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://github.com/vinzent24">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vincent-tenorio-69936417a/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Footer