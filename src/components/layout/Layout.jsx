import React from "react";
import "./style.css";

const Layout = (props) => {
    return <div className="layout">
            {props.children}
    </div>;
}

export default Layout;