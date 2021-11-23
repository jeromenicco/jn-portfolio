import FT_DESKTOP from '../assets/FT_DESKTOP.png'
import AVS_DESKTOP from '../assets/AVS_DESKTOP.png'
import VICE_DESKTOP from '../assets/VICE_DESKTOP.png'


import './css/WorkBox.css'

const workData = [
  {
    name: 'Portfolio XX',
    image: FT_DESKTOP
  },
  {
    name: 'Vice FM',
    image: VICE_DESKTOP,
  },
  {
    name: 'Area Vending Services',
    image: AVS_DESKTOP,
  },
]

const WorkBox = () => {

    return (
        <div className='workbox__container' >
          {
            workData.map((item, index) => {
              return (
              <div key={index} className={`work__item work__item${index}`} >
                <h3>{item.name}</h3>
                <img className={`work__image${index}`} src={item.image} alt={item} />
              </div>
              )
            })
          }
        </div>
    )
}

export default WorkBox