

import evaluasi from "../assets/evaluasi.png"
const Evaluasi =()=> {
    return (
        <div className="menu-container main-container">
            <img style={{width:'25%'}} src={evaluasi}/>
            <div className="quizziz-wrapper">

       <iframe 
       className="quizziz"
 
            src="https://quizizz.com/embed/quiz/67d4534473373ac7184f8fd3" title=" - Quizizz"  allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Evaluasi