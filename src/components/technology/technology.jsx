import React from "react";
import "../technology/technology.css"
import Header from "../header/header"
import img from "../img/image-launch-vehicle-portrait.jpg"

const Technology = () =>{
    return(
        <main className="technology">
            <Header/>
            <p className="technologyNaslov"><span>03</span> Space launch 101</p>
            <div className="technologyMainDiv">
                <div className="technologyText">
                    <div className="spanDiv">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </div>
                    <div className="technologyVehicle">
                        <p>The terminology...</p>
                        <h2>Launch vehicle</h2>
                        <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                            payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                            it's quite an awe-inspiring sight on the launch pad!</p>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </main>
    )
}

export default Technology