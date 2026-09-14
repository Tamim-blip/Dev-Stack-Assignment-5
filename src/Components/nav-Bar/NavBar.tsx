import NavLogo from "../../assets/logo-text.png"


export function NavBar() {



    return (
        <nav className="sticky top-0 z-50 bg-[#F1F5F9]">
            <div className="flex justify-between items-center  py-4 container mx-auto">
                <img className="cursor-pointer" src={NavLogo} alt="" />

                <ul className="flex gap-5 items-center text-[#334155] cursor-pointer">
                    <li className="text-[#DB2777]">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="flex gap-3">
                    <button className="text-[#334155] cursor-pointer">Sign in</button>
                    <button className="text-white bg-[#D91B7E] p-2 px-4 rounded-3xl cursor-pointer">Sign up</button>
                </div>
            </div>
        </nav>
    )
}
