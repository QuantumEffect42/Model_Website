import React from "react";
import Header from "../../components/Navbar/Header";
import CardGrid from "../../components/Cards/CardGrid";
import Card from "../../components/Cards/Card";

const RGGundams = () =>{
    return(
        <>
            <Header />
            <CardGrid>
                <Card>
                    <h2 className="Title">Gundam Wing Zero</h2>
                </Card>
            </CardGrid>
        </>
    );
}  

export default RGGundams;