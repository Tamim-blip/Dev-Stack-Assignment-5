import Image from "../../assets/logo-text.png"


export function Footer() {
    
    return (
        <div className="  bg-[#F1F5F9]">
           <div className="container mx-auto pt-10 flex justify-between my-20">
             <div>
                <img src={Image} alt="" />
                <p className="my-4 text-[#64748B]">Curated tools, technologies, and resources for developers <br></br> building modern software.</p>

                <ul className="flex gap-4 mt-7 text-[#475569]">
                    <li>GitHub</li>
                    <li>Twitter</li>
                    <li>Linkdin</li>
                </ul>
            </div>

            <div>
                <p className="mb-3">PRODUCT</p>
                <ul className="text-[#64748B] space-y-1">
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                </ul>
            </div>


            <div>
                <p className="mb-3">COMPANY</p>
                <ul className="text-[#64748B] space-y-1">
                    <li>About</li>
                    <li>Contact</li>
                    <li>CAreers</li>
                </ul>
            </div>


            <div>
                <p className="mb-3">LEGAL</p>

                <ul className="text-[#64748B] space-y-1">
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
           </div>

           <div className="container mx-auto pb-10 pt-5 border-t border-b-gray-700 flex justify-between">
            <p className="text-[#64748B] ">© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex gap-4 ">
                <p className="text-[#64748B] ">Privacy</p>
                <p className="text-[#64748B] ">Terms</p>
            </div>
           </div>
        </div>
    )
}