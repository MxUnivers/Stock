
import React from "react";
import "./bootstrap.min.css";
import Search from "./Search";
import "./style_users.css";
import Title_App from "./Title-App";


function App(){
  return(
    <div>
        <Title_App/>
        <Search/> 
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
         
    </div>
  )
}

export default App;

