import { Outlet } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div>
            <div>
                <h1>This is the nav bar</h1>
            </div>
            <Outlet />
        </div>
    );
}

export default NavigationBar;