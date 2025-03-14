import "./styling.css"
import materi from "../assets/menu/materi.png"
import menu from "../assets/menu/menu.png"
import evaluasi from "../assets/menu/evaluasi.png"
import makeamatch from "../assets/menu/makeamatch.png"
import { useNavigate } from "react-router"

const Menu =()=> {

    const navigate = useNavigate()


    return (

           <div className='menu-container main-container'>
                <div className="menu-option-wrapper">
                    <img onClick={()=>navigate('/')} alt="menu" src={menu}/>
                    <img onClick={()=>navigate('/materi')} alt="materi" src={materi}/>
                    <img onClick={()=>navigate('/games')}  alt="makeamatch" src={makeamatch}/>
                    <img onClick={()=>navigate('/evaluasi')}  alt="evaluasi" src={evaluasi}/>
                </div>
            </div>
    )
}

export default Menu