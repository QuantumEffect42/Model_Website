import React from "react";
import Header from "../../components/Navbar/Header";
import CardGrid from "../../components/Cards/CardGrid";
import Card from "../../components/Cards/Card";
import TigerImage from "../../images/Ground/Tiger1Early/Tiger1_1.jpg"

const Ground42 = () =>{
    return(
        <>
            <Header />
            <CardGrid>
                <Card>
                    <a href="/Tiger1Early" className="Page-Link">
                        <img src={TigerImage} className="Thumbnail" alt="Tiger-1-Thumbnail"></img>
                    </a>
                    <h2 className="Title">Tiger I Early</h2>
                </Card>
            </CardGrid>
        </>
    );
}  

export default Ground42;