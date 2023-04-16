import React from "react";
import Header from "../../components/Navbar/Header";
import CardGrid from "../../components/Cards/CardGrid";
import Card from "../../components/Cards/Card";

const Ground35 = () =>{
    return(
        <>
            <Header />
            <CardGrid>
                <Card>
                    <h2 className="Title">Flak-88</h2>
                </Card>
                <Card>
                    <h2 className="Title">M1A2 Abrams Tusk II</h2>
                </Card>
                <Card>
                    <h2 className="Title">M2A2 Bradley</h2>
                </Card>
                <Card>
                    <h2 className="Title">Panther Ausf G</h2>
                </Card>
                <Card>
                    <h2 className="Title">Panzer 4 Ausf J</h2>
                </Card>
            </CardGrid>
        </>
    );
}  

export default Ground35;