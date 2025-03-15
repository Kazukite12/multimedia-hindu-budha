
import { useNavigate } from "react-router"
import back from "../assets/back.png"

import evaluasi from "../assets/evaluasi.png"
const Evaluasi =()=> {

    const navigate = useNavigate()
    return (
        <div className="menu-container main-container">
            <img style={{width:'25%'}} src={evaluasi}/>
            <div className="quizziz-wrapper">

       <iframe 
       className="quizziz"
 
            src="https://quizizz.com/join?gc=64061624"  title="Evaluasi - Quizizz"  allowFullScreen></iframe>
            </div>
        <br></br>
            <img onClick={()=>navigate("/")} style={{width:'15%'}} src={back}/>
        </div>
    )
}

export default Evaluasi