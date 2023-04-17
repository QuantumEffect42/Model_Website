import React from "react";
import Header from "../../components/Navbar/Header";
import CardGrid from "../../components/Cards/CardGrid";
import Card from "../../components/Cards/Card";
import WingZero from "../../images/Gundams/Wing Zero/Wing_1.jpg"

const RGGundams = () =>{
    return(
        <>
            <Header />
            <CardGrid>
                <Card>
                    <a href="/WingZero" className="Page-Link">
                        <img src={WingZero} className="Thumbnail" alt="Wing-Zero-Thumbnail"></img>
                    </a>
                    <h2 className="Title">Gundam Wing Zero</h2>
                </Card>
            </CardGrid>
        </>
    );
}  

export default RGGundams;