
const NoDataFound = ({ description, image }) => {
    return (
        <div className="flex flex-col items-center p-12 pb-1 text-center gap-y-5">
            <p className="py-5 text-[2rem] font-bold uppercase ">
                {description}
            </p>
            <img src={image} alt="Tools Not Found" className="h-60 w-52" />
        </div>
    )
}

export default NoDataFound