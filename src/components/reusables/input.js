const UInput = ({ type = 'text', placeholder = '', label = '', handleChange }) => {
    const maxLength = type === 'number' ? 10 : undefined;

    return (
        <div className="mb-3">
            <label htmlFor={`exampleFormControlInput-${type}`} className="form-label">{label}</label>
            <input
                type={type}
                className="form-control"
                id={`exampleFormControlInput-${type}`}
                placeholder={placeholder}
                maxLength={maxLength} // Applied only if type is 'number'
                {...props}
            />
        </div>
    );
};

export default UInput;
