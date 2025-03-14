import './styling.css'
import title from "../assets/title.png"
import creator from "../assets/creator.png"
import Mulai from "../assets/mulai.png"
import { Link, useNavigate } from 'react-router'


const Intro =()=> {

  const navigate = useNavigate()
    return (

           <div className='intro-container main-container'>
              <div className='content-container'>
              <img className='title' src={title}/>
              <img className='creator' src={creator}/>

              
              <img onClick={()=>navigate('/menu')} className='mulai' src={Mulai}/>
       
              </div>
            </div>
    )
}

export default Intro