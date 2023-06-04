import { RiBookmarkFill } from "react-icons/ri"


const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick} className="capitalize bg-dark-primary text-light-primary py-2 px-6 rounded-lg m-0.5 cursor-pointer hover:scale-105 transition-all flex items-center space-x-2">
            <span>
                {text}
            </span>
            {
                text === "Remove" &&
                    <RiBookmarkFill className="w-4 h-4"/>
            }
        </button>
    )
}

export default Button