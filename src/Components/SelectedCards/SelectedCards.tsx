import type { Dispatch, SetStateAction } from "react"
import type { DataType } from "../../Type"

export interface SelectedCardsProps {
   selected : DataType[]
   setSelected : Dispatch<SetStateAction<DataType[]>>
}

export default function SelectedCards({selected, setSelected} : SelectedCardsProps) {
    
    return (
        <div className="border border-gray-200 rounded-2xl p-10 container mx-auto">
            <h1 className="font-bold">Your Stack</h1>
            <p className="text-[#94A3B8]"> {selected.length===0 ? "No technologies selected yet." : `${selected.length} Items is added`}</p>
            <p className="text-center text-[#94A3B8] m-8 py-7 border  border-dotted">Your stack is empty.</p>
        </div>
    )
}