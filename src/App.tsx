import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Routes from "./components/Routes";


export interface AppUser {
  username: string;
  password: string;
}

function App() {
  //  We're going to need a state variable to track who is logged in
  //  MANY of my components will need visibility and the ability to update the state variable

  const init = {username: "test", password: "test"}
  const [appUser, setAppUser] = useState<AppUser | null>(null)

  useEffect(() => console.log(appUser), [appUser])

  return <> 
      <Navbar appUser={appUser}/>
      <Routes appUser={appUser} setAppUser={setAppUser}/>
  </>
}



export default App;
