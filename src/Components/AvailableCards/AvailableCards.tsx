import type { Dispatch, SetStateAction } from "react"
import type { DataType } from "../../Type"
import TCcard from "../TCcard/TCcard"

export interface AvailableCardsProps {
    technologyData: DataType[]
    selected: DataType[]
    setSelected: Dispatch<SetStateAction<DataType[]>>


}

export default function AvailableCards({ technologyData, selected, setSelected }: AvailableCardsProps) {


    return (



        <div className=" grid grid-cols-3 gap-6">

            {
                technologyData.map(DataCard => <TCcard key={DataCard.id} DataCard={DataCard} selected={selected} setSelected={setSelected}></TCcard>)
            }

        </div>

    )
}