import BannerImg from "../../assets/banner-stack.png"


export default function Banner () {
    return(
        <div className=" container mx-auto flex gap-3 justify-between items-center">
            <div className="space-y-2">
                <h1 className="font-bold text-6xl">Build Your Ideal</h1>
                <h1  className="font-bold text-6xl bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</h1>
                <p className=" text-[#475569] my-8">Explore frontend, backend, database, and tooling options,<br></br> compare them side by side, and put together the stack that fits your <br></br> next project.</p>
                <div className="flex gap-6 mt-12">
                    <button className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] rounded-[5px] px-2 py-3 text-amber-50 cursor-pointer">Explore Technologies</button>
                    <button className="border border-[#E5E7EB] rounded-[5px] px-6 cursor-pointer">Learn More</button>
                </div>
            </div>
            <img src = {BannerImg} alt="" />

        </div>
    )
}