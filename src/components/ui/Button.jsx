


const Button = ({children, className = "", onClick, type = "button"}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`rounded sm disabled:opacity-50 cursor-pointer ${className}`}>
            {children}
        </button>
    )
};

export default Button;