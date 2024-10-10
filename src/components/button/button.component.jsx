import './button.styles.scss';

const ButtonType = {
    google: "google-sign-in",
    inverted: "inverted",
}

const Button = ({children, buttonType, ...otherProps }) => {
    return (
        <button className={`${ButtonType[buttonType]} button-container`} {...otherProps}>
            {children}
        </button>
    );
}