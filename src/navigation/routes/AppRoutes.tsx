import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";



const AppRoutes = () => {    
    
    return(
        <Router>
          
                <Routes>
                    <Route path="/home" element = {<Home/>}/>
                    <Route path="/" element = {<Login/>}/>
                    <Route path="/register" element = {<Register/>}/>

                </Routes>
        </Router>
    )
}

export default AppRoutes;