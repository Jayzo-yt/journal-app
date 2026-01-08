import React, { Children } from "react";
import SquaresClient from "@/components/Squares";

const Layout = ({ children }) => {
    return (
        
        <div className="container mx-auto">
            
            {children}
        </div>
    );
};

export default Layout;