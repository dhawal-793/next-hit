import { RiBookmarkFill } from "react-icons/ri"


const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick} className="capitalize bg-dark-primary text-light-primary py-2 rounded-lg m-0.5 cursor-pointer hover:scale-105 transition-all flex items-center justify-center gap-x-1 w-28">
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