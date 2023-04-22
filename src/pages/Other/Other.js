import React from "react";
import Header from "../../components/Navbar/Header";
import CardGrid from "../../components/Cards/CardGrid";
import Card from "../../components/Cards/Card";
import ExcavatorImage from "../../images/Other/HitachiExcavator/Excavator_1.jpg"

const OtherModels = () =>{
    return (
        <>
            <Header />
            <CardGrid>
                <Card>
                    <a href="/HitachiExcavator" className="Page-Link">
                        <img src={ExcavatorImage} className="Thumbnail" alt="Hitachi Zaxis 135US"></img>
                    </a>
                    <h2 className="Title">Hitachi Zaxis 135US</h2>
                </Card>
            </CardGrid>
        </>
    );
}

export default OtherModels;