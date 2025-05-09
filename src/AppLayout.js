import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

const AppLayout = () => {
 return(
    <div>
    <Header />
    <Outlet />
    </div>
 )
}


export default AppLayout;