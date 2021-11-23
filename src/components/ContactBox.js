
import { ImArrowLeft } from 'react-icons/im';
import './css/ContactBox.css'

const ContactBox = () => {

    return (
        <div>
            <div className='contactbox__container' >
                <h3 className='contact__name'>Contact</h3>
                <p className='contact__text'>Feel free to reach out for more information.</p>
            </div>
            <div className='email__container'>
                <h3 className='email__button'>
                    <a href='mailto:contact@jeromenicco.com'>contact@jeromenicco.com</a>
                </h3>
                <ImArrowLeft />
            </div>
            <div className='email__container2'>
                <h3 className='email__button'><a href='https://www.linkedin.com/in/jerome-nicco/'>Linkedin</a></h3>
                <ImArrowLeft />
            </div>
        </div>
    )
}

export default ContactBox