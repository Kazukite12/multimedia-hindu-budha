

import evaluasi from "../assets/evaluasi.png"
const Evaluasi =()=> {
    return (
        <div className="menu-container main-container">
            <img style={{width:'25%'}} src={evaluasi}/>
            <div className="quizziz-wrapper">

       <iframe 
       className="quizziz"
 
            src="https://quizizz.com/join?gc=64061624"  title="Evaluasi - Quizizz"  allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Evaluasi