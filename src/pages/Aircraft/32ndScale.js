import React from "react";
import Header from "../../components/Navbar/Header";
import CardGrid from "../../components/Cards/CardGrid";
import Card from "../../components/Cards/Card";
import ViperImage from "../../images/Aircraft/AH1Viper/Viper_1.jpg"

const Aircraft32 = () =>{
    return(
        <>
            <Header />
            <CardGrid>
                <Card>
                    <a href="/AH1ZViper" className="Page-Link">
                        <img src={ViperImage} className="Thumbnail" alt="Viper-Thumbnail"></img>
                    </a>
                    <h2 className="Title">AH-1Z Viper</h2>
                </Card>
            </CardGrid>
        </>
    );
}  

export default Aircraft32;