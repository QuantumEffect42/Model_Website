import React from "react";
import Header from "../../components/Navbar/Header";
import CardGrid from "../../components/Cards/CardGrid";
import Card from "../../components/Cards/Card";
import Flak88Image from "../../images/Ground/Flak88/Flak-88_1.jpg"
import AbramsImage from "../../images/Ground/M1A2Abrams/Abrams_1.jpg"
import BradleyImage from "../../images/Ground/M2A2Bradley/Bradley_1.jpg"
import PantherImage from "../../images/Ground/Panther G/Panther_1.jpg"
import Panzer4Image from "../../images/Ground/Panzer IV/Panzer4J_1.jpg"

const Ground35 = () =>{
    return(
        <>
            <Header />
            <CardGrid>
                <Card>
                    <a href="/Flak88" className="Page-Link">
                        <img src={Flak88Image} className="Thumbnail" alt="Flak-88-Thumbnail"></img>
                    </a>
                    <h2 className="Title">Flak-88</h2>
                </Card>
                <Card>
                    <a href="/M1A2Abrams" className="Page-Link">
                        <img src={AbramsImage} className="Thumbnail" alt="M1A2-Abrams-Thumbnail"></img>
                    </a>
                    <h2 className="Title">M1A2 Abrams Tusk II</h2>
                </Card>
                <Card>
                    <a href="/M2A2Bradley" className="Page-Link">
                        <img src={BradleyImage} className="Thumbnail" alt="M2A2-Bradley-Thumbnail"></img>
                    </a>
                    <h2 className="Title">M2A2 Bradley</h2>
                </Card>
                <Card>
                    <a href="/PantherG" className="Page-Link">
                        <img src={PantherImage} className="Thumbnail" alt="Panther-G-Thumbnail"></img>
                    </a>
                    <h2 className="Title">Panther Ausf G</h2>
                </Card>
                <Card>
                    <a href="/Panzer4J" className="Page-Link">
                        <img src={Panzer4Image} className="Thumbnail" alt="Panzer-4-J-Thumbnail"></img>
                    </a>
                    <h2 className="Title">Panzer IV Ausf J</h2>
                </Card>
            </CardGrid>
        </>
    );
}  

export default Ground35;