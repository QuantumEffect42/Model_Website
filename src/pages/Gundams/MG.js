import React from "react";
import Header from "../../components/Navbar/Header";
import Card from "../../components/Cards/Card";
import CardGrid from "../../components/Cards/CardGrid";
import DynamesImage from "../../images/Gundams/Dynames/Dynames_1.jpg"
import RFAstrayImage from "../../images/Gundams/RedFrameAstray/Astray_1.jpg"

const MGGundams = () =>{
    return(
        <>
            <Header />
            <CardGrid>
                <Card>
                    <a href="/Dynames" className="Page-Link">
                        <img src={DynamesImage} className="Thumbnail" alt="Dynames-Thumbnail"></img>
                    </a>
                    <h2 className="Title">GN-002 Dynames</h2>
                </Card>
                <Card>
                    <a href="/RedFrameAstray" className="Page-Link">
                        <img src={RFAstrayImage} className="Thumbnail" alt="RFAstray-Thumbnail"></img>
                    </a>
                    <h2 className="Title">Red-Frame Astray</h2>
                </Card>
            </CardGrid>
        </>
    );
}  

export default MGGundams;