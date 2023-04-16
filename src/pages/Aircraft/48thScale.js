import React from "react";
import Header from "../../components/Navbar/Header";
import CardGrid from "../../components/Cards/CardGrid";
import Card from "../../components/Cards/Card";

const Aircraft48 = () =>{
    return(
        <>
            <Header />
            <CardGrid>
                <Card>
                    <h2 className="Title">F-14A</h2>
                </Card>
            </CardGrid>
        </>
    );
}  

export default Aircraft48;