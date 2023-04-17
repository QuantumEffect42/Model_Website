import React from "react";
import Header from "../../components/Navbar/Header";
import CardGrid from "../../components/Cards/CardGrid";
import Card from "../../components/Cards/Card";
import TomcatImage from "../../images/Aircraft/F14A/Tomcat_1.jpg"

const Aircraft48 = () =>{
    return(
        <>
            <Header />
            <CardGrid>
                <Card>
                    <a href="/F14ATomcat" className="Page-Link">
                        <img src={TomcatImage} className="Thumbnail" alt="Tomcat-Thumbnail"></img>
                    </a>
                    <h2 className="Title">F-14A</h2>
                </Card>
            </CardGrid>
        </>
    );
}  

export default Aircraft48;