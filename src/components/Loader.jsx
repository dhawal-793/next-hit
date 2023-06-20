import { CgSpinnerTwoAlt } from 'react-icons/cg'

const Loader = ({ width = "w-8", height = "h-8" }) => {
    return (
        <div className="grid my-4 place-items-center text-dark-primary ">
            <CgSpinnerTwoAlt className={` ${width} ${height} animate-spin`} />
        </div>
    )
}

export default Loader