import './form-input.styles.scss';

const FormInput = ({ label, ...otherInputProps }) => {
    return (
        <div className="group">
            <input className="form-input" {...otherInputProps} />
            <label className={`${otherInputProps.value.length ? 'shrink' : null} form-input-label`}>{label}</label>
        </div>
    );
}

export default FormInput;