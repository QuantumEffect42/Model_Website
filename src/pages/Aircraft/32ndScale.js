import React from "react";
import Header from "../../components/Navbar/Header";
import CardGrid from "../../components/Cards/CardGrid";
import Card from "../../components/Cards/Card";

const Aircraft32 = () =>{
    return(
        <>
            <Header />
            <CardGrid>
                <Card>
                    <h2 className="Title">AH-1Z Viper</h2>
                </Card>
            </CardGrid>
        </>
    );
}  

export default Aircraft32;