import React from "react";
import Header from "../../components/Navbar/Header";
import CardGrid from "../../components/Cards/CardGrid";
import Card from "../../components/Cards/Card";

const Ground42 = () =>{
    return(
        <>
            <Header />
            <CardGrid>
                <Card>
                    <h2 className="Title">Tiger I Early</h2>
                </Card>
            </CardGrid>
        </>
    );
}  

export default Ground42;