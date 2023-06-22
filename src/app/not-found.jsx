import FullPageContainer from "@/components/FullPageContainer"
import Link from "next/link"

const Notfound = () => {
  return (
    <FullPageContainer>
      <div className="w-full h-full text-center text-dark-primary">
        <h1 className="pt-5 font-sans font-bold xs:pt-7 sm:pt-10 text-7xl xs:text-8xl sm:text-9xl">404</h1>
        <img src="/images/error.png" alt="Page Not Found" className="w-16 h-16 mx-auto my-7 sm:my-8" />
        <p className="text-[#373530] font-bold text-2xl xs:text-4xl sm:text-[2.7rem] pb-6 sm:pb-8">PAGE NOT FOUND</p>
        <p className="p-1 text-base sm:text-lg font-extralight">The page you're looking for could not be found</p>
        <p className="p-1 text-base sm:text-lg font-extralight">Please check the URL or Try again later</p>
        <Link href="/" className="block px-5 py-4 mx-auto mt-8 transition-all duration-300 border rounded-md text-light-primary w-fit bg-dark-primary hover:bg-light-primary focus:bg-light-primary hover:text-dark-primary focus:text-dark-primary border-dark-primary">Go to Homepage</Link>
      </div>
    </FullPageContainer>
  )
}

export default Notfound