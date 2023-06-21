import { CgSpinnerTwoAlt } from 'react-icons/cg'

const Loader = ({ width = "w-8", height = "h-8" ,color="text-dark-primary"}) => {
    return (
        <div className="grid my-4 place-items-center ">
            <CgSpinnerTwoAlt className={` ${width} ${height} ${color}  animate-spin`} />
        </div>
    )
}

export default Loader