import ReactArcText from 'react-arc-text-fix'

import './css/Badge.css'

const Badge = () => {

    const text = "Hi i'm Jerome, freelance front-end developper based in Paris."

    return (
        <div className='badge__container'>
            <div className='circular__text__container' >
                <ReactArcText
                    class='circular__text'
                    text={text}
                    arc={81}
                />
            </div>
            <div className='j__container'>
                <p className='letter__j'>J</p>
            </div>
        </div>
    )
}

export default Badge