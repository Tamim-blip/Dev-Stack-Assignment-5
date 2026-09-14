


import { TbX } from "react-icons/tb"
import type { DataType } from "../../Type"
import type { Dispatch, SetStateAction } from "react"

interface SelectedCardsProps {
    selected: DataType[]
    setSelected: Dispatch<SetStateAction<DataType[]>>
}

export default function SelectedCards({
    selected,
    setSelected,
}: SelectedCardsProps) {



    const handleRemove = (id: number) => {
        setSelected(prev => prev.filter(item => item.id !== id))
    }

    return (

        <div className="rounded-2xl border border-gray-200 bg-white p-6">

            <h2 className="mb-1 text-xl font-bold text-gray-900">
                Your Stack
            </h2>
            <p className="text-[#94A3B8] mb-6"> {selected.length === 0 ? "No technologies selected yet." : `${selected.length} Items is added`}</p>

            <div className="space-y-2">

                {selected.map((technology) => (
                    <div>
                        <div
                            key={technology.id}
                            className="flex items-center justify-between rounded-2xl border-2 border-gray-200 bg-white px-2 py-1"
                        >

                            {/* Left side */}
                            <div className="flex items-center gap-5">

                                {/* Logo */}
                                <div className="flex h-16 w-16 items-center justify-center">
                                    <img
                                        src={technology.image}
                                        alt={technology.name}
                                        className="h-10 w-10 object-contain"
                                    />
                                </div>

                                {/* Name + Type */}
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {technology.name}
                                    </h3>

                                    <p className="text-lg font-medium text-[#94A3B8]">
                                        {technology.type}
                                    </p>
                                </div>

                            </div>

                            {/*  */}
                            {/* Remove button */}

                            <button
                                onClick={() => handleRemove(technology.id)}
                                className="text-4xl font-light text-[#151617]">
                                <TbX />
                            </button>

                        </div>
                    </div>



                ))}

                {/* Remove all button */}
                {selected.length > 0 && (
                    <button
                        onClick={() => setSelected([])}
                        className="mx-auto mt-5 block rounded-lg bg-black px-6 py-2 text-white">
                        Remove all
                    </button>
                )}



                {selected.length === 0 && (
                    <p className="text-center text-[#94A3B8] m-8 py-7 border  border-dotted">Your stack is empty.</p>
                )}

            </div>

        </div>

    )
}