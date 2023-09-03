import Link from "next/link";
import Logo from "../../../public/images/logo.png"
import Image from "next/image";


function Navbar() {
    return (
        <>
            <nav className="flex w-4/6 m-auto justify-between sticky">
                <div>
                    <Link href="./">
                        <Image src={Logo}
                            className="m-auto p-2"
                            width={70}
                            height={70}
                            alt="Personality Homepage Image">
                        </Image>
                    </Link>
                </div>
                <div className="flex space-x-8">
                    <ul className="flex flex-wrap items-center mt-3 text-lg font-medium text-agrey dark:text-arey sm:mt-0">
                        <li>
                            <Link href="login" className="mr-4 hover:underline md:mr-6 ">Discover New Music</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar;