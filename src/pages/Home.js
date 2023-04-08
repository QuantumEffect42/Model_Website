import React from "react";
import Header from "../components/Navbar/Header";
import Slideshow from "../components/Slideshow/Slideshow";
import "./Home.css"

const Home = () =>{
    return(
        <>
            <div className="Page-Container">
                <Header />

                <div className="Header">
                    <h1>Recent Builds</h1>
                </div>

                <Slideshow />

                <div className="Intro">
                    <h2>Welcome to my Model Space</h2>
                    <p>
                        This site is a way for me to show off some of the work that I'm particularly proud of. You can browse the various models I've built using the cateogires at the top where you can select
                        whichever category that strikes your fancy.
                    </p>
                    <p>
                        Each page also contains a build log of sorts that details the processes I went through to complete each kit as well as notes on things that worked particularly well and things that
                        didn't work as I had hoped.
                    </p>
                    <br />
                    <h2>Hope You Enjoy!</h2>

                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </>
    );
}

export default Home;