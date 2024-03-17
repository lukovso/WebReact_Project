import React from "react";
import "../homePage/homePage.css"
import Header from "../header/header";

const HomePage = ({className}) =>{
    return(
        <>  
        <main className="homePageBacgroundImg">
        <Header/>
        <section className={className}>
            <div className="homePageText">
                <p>So, you want to travel to</p>
                <h1>Space</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="krug">
                <p>EXPLORE</p>
            </div>
        </section>
        </main>
        </>
    )
}
export default HomePage