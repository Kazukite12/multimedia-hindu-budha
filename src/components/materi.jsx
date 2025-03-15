
import materi1 from "../assets/materi 1.png"
import materi2 from "../assets/materi 2.png"
import materi3 from "../assets/materi 3.png"
import materi4 from "../assets/materi 4.png"

import next from "../assets/next button.png"
import back from "../assets/back.png"

import title from "../assets/materi-title.png"
import { useMemo, useState } from "react"
import { useNavigate } from "react-router"
const Materi =()=> {
    const materi =[materi1,materi2,materi3,materi4]
    const [currentMateri,setCurrentMateri] = useState(0)

    const nextMateri =()=> {
        if (currentMateri == materi.length-1) {
            return
        }

        setCurrentMateri(currentMateri+1)
    }
const navigate = useNavigate()


    const previousMateri =()=> {
        if (currentMateri == 0) {
            navigate('/menu')
        }

        if (currentMateri == materi.length-1) {
            navigate('/menu')
        }

        setCurrentMateri(currentMateri-1)
    }
    return (
        <div className="menu-container main-container">
     
            <img className="materi-title" src={title}/>
            <img className="materi" src={materi[currentMateri]}/>      
            
            <div className="button-wrapper">

            <img className="next-button" onClick={previousMateri} src={back}/>

            {currentMateri != materi.length-1 &&
            
            <img className="next-button" onClick={nextMateri} src={next}/>
            }
            </div>

            {/* <img className="materi" src={materi2}/> */}
        </div>
    )
}

export default Materi