import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <Fragment>
            <div>
                <Link className="logo-container" to={'/'}>
                    Logo
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-links" to={"/shop"}>
                        Shop
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default NavigationBar;