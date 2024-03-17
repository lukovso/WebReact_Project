import React from "react";
import "../crew/crew.css"
import Header from "../header/header";
import img from "../img/image-anousheh-ansari.png"

const Crew = () =>{
    return(
        <main className="crew">
            <Header/>
            <section>
                <div className="crewNaslov">
                    <p><span>02</span> Meet your crew</p>
                </div>
                <div className="crewImg">
                    <div>
                    <p>Flight Engineer</p>
                    <h2>Anousheh Ansari</h2>
                    <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                        Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                        fly to the ISS, and the first Iranian in space. </p>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Crew