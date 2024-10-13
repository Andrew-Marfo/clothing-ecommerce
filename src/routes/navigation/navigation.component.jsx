import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss';
import { ReactComponent as Crownlogo } from '../../assets/crown.svg';

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signUserOut } from "../../utils/firebase/firebase.utils";

const NavigationBar = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    // console.log(currentUser);

    const signOutHandler = async () => {
        await signUserOut();
        setCurrentUser(null);
    }

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

                    {currentUser ? (
                        <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                    ) : (
                        <Link className="nav-link" to={"/auth"}>
                            SIGN IN
                        </Link>
                    )}

                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default NavigationBar;