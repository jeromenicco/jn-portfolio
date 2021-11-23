

import './css/AboutBox.css'

const AboutBox = () => {

    return (
        <div>
            <div className='about__text__container'>
                <h3 className='about__name'>About</h3>
                <p className='about__text'>
                    Hi i'm Jerome, freelance front-end developper based in Paris.
                </p>
            </div>
            <div className='about__text__container2'>
                <p className='about__text'>
                    I love designing and building websites, if you have a project in mind it would be a pleasure to collaborate.
                </p>
            </div>
        </div>
    )
}

export default AboutBox