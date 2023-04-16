import React from "react";
import Header from "../../components/Navbar/Header";
import Card from "../../components/Cards/Card";
import CardGrid from "../../components/Cards/CardGrid";
import DynamesImage from "../../images/Gundams/Dynames/Dynames_1.jpg"

const MGGundams = () =>{
    return(
        <>
            <Header />
            <CardGrid>
                <Card>
                    <a href="/Dynames" className="Page-Link">
                        <img src={DynamesImage} className="Thumbnail" alt="Dynames-Thumbnail"></img>
                    </a>
                    <h2>GN-002 Dynames</h2>
                </Card>
                <Card>
                    <h2>Test 2</h2>
                </Card>
            </CardGrid>
        </>
    );
}  

export default MGGundams;