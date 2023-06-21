const FullPageContainer = ({ children }) => {
    return (
        <div className='grid font-semibold place-items-center page-height md:md-page-height'>
            {children}
        </div>
    )
}

export default FullPageContainer