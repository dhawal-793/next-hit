import { RiTwitterFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    const year = new Date().getFullYear();

    const SocialLinks = [
        {
            name: "Twitter",
            icon: RiTwitterFill,
            href: "https://twitter.com/_Jason_Dsouza",
            hover: "hover:text-[#00acee]"
        },
        {
            name: "GitHub",
            icon: RiGithubFill,
            href: "https://github.com/JasonDsouza212",
            hover: "hover:text-[#00ffff]"
        },
        {
            name: "LinkedIn",
            icon: RiLinkedinFill,
            href: "https://www.linkedin.com/in/jason-dsouza-130b421ba",
            hover: "hover:text-[#0e76a8]"
        },
        {
            name: "GMail",
            icon: MdEmail,
            href: "mailto:jasondsouza212@gmail.com",
            hover: "hover:text-[#c92c19]"
        }
    ]

    return (
        <footer className="h-auto bg-[#1a1919] text-light-primary ">
            <div className="flex flex-col items-center justify-center py-10 text-center">
                <h3 className="text-4xl font-normal capitalize leading-[3rem] flex items-center gap-3">
                    <img className="rounded-md w-11 h-11" src="images/footer-logo.png" alt="Free-Hit" />
                    <span>FREE-HIT</span>
                </h3>
                <div className="flex flex-col max-w-lg gap-2 mx-auto my-4 text-base">
                    <p className="font-normal leading-7">
                        Find the tools you need without breaking the bank
                    </p>
                    <p className="font-semibold leading-7 ">
                        Contact Us
                    </p>
                </div>
                <ul className="flex items-center justify-center">
                    {
                        SocialLinks.map(({ name, href, icon: Icon, hover }) => {
                            return (
                                <li key={name} className={`mx-3 transition-all duration-500 hover:scale-[1.2]`}>
                                    <a target="_blank" href={href} className="text-white no-underline">
                                        <Icon className={`w-5 h-5 transition-all duration-500   ${hover}`} />
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="bg-[#0e0d0d]  pt-5 pb-0 text-center">
                <div className="flex flex-col items-center mx-auto text-lg leading-5 capitalize w-fit md:flex-row gap-y-2 md:gap-y-0 md:gap-x-4">
                    <p className="flex items-center space-x-2">
                        <span> copyright</span>
                        <span>&copy;</span>
                        <a target="_blank" href="https://github.com/JasonDsouza212/free-hit" className="mx-2 font-bold hover:underline underline-offset-2">Free-Hit</a>
                        <span>{year}</span>
                        <span className="hidden md:inline-block md:pl-4">|</span>
                    </p>
                    <p className="space-x-3 uppercase opacity-40 font-extralight">
                        <span> Maintained by</span>
                        <a target="_blank" href="https://github.com/JasonDsouza212" className="text-xl font-bold hover:underline underline-offset-2">
                            Jason&nbsp;Dsouza
                        </a>
                    </p>
                </div>
                <br />
            </div>
        </footer>
    )
}

export default Footer