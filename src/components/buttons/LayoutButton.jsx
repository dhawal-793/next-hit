
const LayoutButton = ({ Icon, handleClick, isActive }) => {
    return (
        <Icon role="button" onClick={handleClick} className={`w-7 h-7 xs:w-8 xs:h-8 cursor-pointer border-b-4 transition-all duration-200 ${isActive ? "text-dark-primary border-dark-primary" : "text-dark-secondary opacity-70 border-transparent"} hover:text-dark-primary  hover:opacity-100`} />
    )
}

export default LayoutButton