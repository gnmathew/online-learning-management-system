import React from "react";
import LogoutButton from "./authentication/LogoutButton"

const Home = () => {
  return(
    <div>
      <LogoutButton/>
      <h1>
        Welcome to Koda Board Dashboard
      </h1>
    </div>
  )
}

export default Home;