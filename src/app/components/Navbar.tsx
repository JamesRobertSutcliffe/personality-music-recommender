function Navbar() {
    return (
        <>
            <nav className="flex w-4/6 m-auto justify-between">
                <div>
                    <a href="./"><h1 className="text-2xl font-semibold text-awhite m-2 p-2 font-large">MPR</h1></a>
                </div>
                <div className="flex space-x-8">
                    <h4 className="text-agrey text-xl inline m-4 p-2"><a href="about">About</a></h4>
                    <button className="rounded-none bg-ablue m-auto p-3 font-medium text-xl text-awhite justify-center inlinem-2 p-2">Sign In</button>
                </div>
            </nav>

        </>
    )
}

export default Navbar;