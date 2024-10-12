import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss';
import { ReactComponent as Crownlogo } from '../../assets/crown.svg';

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const NavigationBar = () => {

    const { currentUser } = useContext(UserContext);
    console.log(currentUser);

    return (
        <Fragment>
            <div className={"navigation"}>
                <Link className="logo-container" to={'/'}>
                    <Crownlogo className={'logo'} />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to={"/shop"}>
                        SHOP
                    </Link>
                    <Link className="nav-link" to={"/auth"}>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default NavigationBar;