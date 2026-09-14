import { use, useState } from "react"
import type { DataType } from "../../Type"
import AvailableCards from "../AvailableCards/AvailableCards"
import SelectedCards from "../SelectedCards/SelectedCards"

export interface TechnologyCardsProps {
    DataPromise: Promise<DataType[]>


}

export default function TechnologyCards({ DataPromise }: TechnologyCardsProps) {

    const technologyData = use(DataPromise)
    console.log(technologyData)


    const [selected, setSelected] = useState<DataType[]>([])

    return (
        <div className="container mx-auto mt-10">
            <h1 className="font-bold text-4xl my-3">Explore the <span className="bg-linear-to-r from-[#EC4899]  to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h1>
            <p className="mb-12 text-[#64748B]">Pick one technology per category to build your ideal stack.</p>

            <div className="container mx-auto gap-7 grid grid-cols-3 items-start">
                <div className="grid col-span-2">
                    <AvailableCards technologyData={technologyData} selected={selected} setSelected={setSelected}></AvailableCards>
                </div>
                <div className="grid col-span-1 sticky top-20">
                    <SelectedCards selected={selected} setSelected={setSelected} ></SelectedCards>
                </div>

            </div>
        </div>
    )
}