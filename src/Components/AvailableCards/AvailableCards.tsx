import type { DataType } from "../../Type"
import TCcard from "../TCcard/TCcard"

export interface AvailableCardsProps {
    technologyData : DataType[]
}

export default function AvailableCards({ technologyData}: AvailableCardsProps) {
    
    return (
       


         <div  className=" grid grid-cols-3 gap-6">

            {
                technologyData.map(DataCard => <TCcard DataCard = {DataCard}></TCcard> )
            }

        </div>
       
    )
}