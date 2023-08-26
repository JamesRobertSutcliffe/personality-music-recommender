import Link from "next/link";


function Navbar() {
    return (
        <>
            <nav className="flex w-4/6 m-auto justify-between">
                <div>
                    <Link href="./"><h1 className="text-2xl font-semibold text-agrey m-2 p-2 font-large">LOGO</h1></Link>
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