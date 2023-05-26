
const Card = ({ productData: { image, productName, description, link } }) => {

    return (
        <article className=" relative h-56 max-w-[350px] border border-dark-primary shadow-card bg-light-primary py-2.5 rounded-3xl hover:shadow-card-hover flex flex-col justify-between">
            <div className="px-4 mb-3">
                <div className="flex gap-2 items-center">
                    <img src={image} className="w-10 h-10 rounded-xl" alt={productName} />
                    <h3 className="w-full text-start text-2xl font-bold">{productName}</h3>
                </div>
                <div className="mt-3 font-semibold">
                    {description}
                </div>
            </div>
            <div className="pb-3">
                <a href={link} target="_blank" className="capitalize bg-dark-primary text-light-primary py-2 px-6 rounded-lg m-0.5 cursor-pointer hover:scale-105 inline-block transition-all">Visit
                </a>
                <button className="capitalize bg-dark-primary text-light-primary py-2 px-6 rounded-lg m-0.5 cursor-pointer hover:scale-105 transition-all">
                    Bookmark
                </button>
            </div>
        </article>
    )
}

export default Card