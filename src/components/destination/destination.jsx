import React from "react";
import "../destination/destination.css"
import img from "../img/image-mars.png"
import Header from "../header/header";

const Destination = () =>{
    return(
        <>
        <main className="body">
        <Header/>
        <main className="destination">
            <div className="textImg">
                <h2><span>01</span> Pick your destination</h2>
                <img src={img} alt="" />
            </div>
            <div className="desnaStrana">
                <div className="navLink">
                    <a href="#">MOON</a>
                    <a href="#">MARS</a>
                    <a href="#">EUROPA</a>
                    <a href="#">TITAN</a>
                </div>
                <h1>MARS</h1>
                <p className="textMars">  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                    the tallest planetary mountain in our solar system. It’s two and a half times 
                    the size of Everest!
                </p>
                <div className="distanceData">
                    <div>
                    <p>Avg. distanc</p>
                    <p>225 mil. km</p>
                    </div>
                    <div>
                    <p>Est. travel time</p>
                    <p> 9 months</p>
                    </div>
                </div>
            </div>
        </main>
        </main>
        </>
    )
}

export default Destination