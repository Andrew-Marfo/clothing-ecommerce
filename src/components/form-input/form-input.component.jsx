const FormInput = ({ label, ...otherInputProps }) => {
    return (
        <div className="group">
            <label className={`${otherInputProps.value.length ? 'shrink' : null} form-input-label`}>{label}</label>
            <input className="form-input" {...otherInputProps} />
        </div>
    );
}

export default FormInput;