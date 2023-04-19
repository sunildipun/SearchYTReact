import React from "react";
import ReactDOM from "react-dom/client"
import Search from "./src/Components/Search";

const AppLayout = () => {
    return(
        <Search />
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)