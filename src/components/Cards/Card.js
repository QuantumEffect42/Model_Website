import React from "react";
import "./CardStyles.css"

const Card = ({children}) => (
    <div className="Card">
        {children}
    </div>
)

export default Card