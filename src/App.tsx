import CredentialsForm from "./components/CredentialsForm"
import ExercisePage from "./pages/ExercisePage";
// import { BrowserRouter as Router } from "react-router-dom"    <- supplying an alias to an import
import Routes from "./components/Routes";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"

function App() {
  return <> 
      <Navbar />
      <Routes/>
  </>
}



export default App;
