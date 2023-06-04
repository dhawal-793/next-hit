

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick} className="capitalize bg-dark-primary text-light-primary py-2 px-6 rounded-lg m-0.5 cursor-pointer hover:scale-105 transition-all">
            {text}
        </button>
    )
}

export default Button