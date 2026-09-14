import { useState, type Dispatch, type SetStateAction } from "react"
import type { DataType } from "../../Type"
import { toast } from "react-toastify"


export interface TCcardProps {
  DataCard: DataType
  selected: DataType[]
  setSelected: Dispatch<SetStateAction<DataType[]>>
}

export default function TCcard({ DataCard, selected, setSelected }: TCcardProps) {


  const newData = [...selected, DataCard]



  const [AddToStack, setAddTostack] = useState<Boolean>(false)

  const HandleButtonClick = () => {

    setAddTostack(true)
    setSelected(newData)

    toast.success(`${DataCard.name} added to your stack!`)
  }

  return (
    <div>
      <div className={AddToStack ? " h-full flex-col rounded-2xl border border-t-red-600 bg-white p-5 " : " h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"}>

        {/* Top */}
        <div className="flex items-start justify-between">
          {/* Technology Image */}
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50">
            <img
              src={DataCard.image}
              alt={DataCard.name}
              className="h-10 w-10 object-contain"
            />
          </div>

          {/* Difficulty */}
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
            {DataCard.difficulty}
          </span>
        </div>

        {/* Technology Information */}
        <div className="mt-5 flex-1">
          <h2 className="text-xl font-bold text-gray-900">
            {DataCard.name}
          </h2>

          <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-500">
            {DataCard.description}
          </p>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-yellow-500">★</span>

            <span className="text-sm font-semibold text-gray-700">
              {DataCard.rating}
            </span>

            <span className="text-sm text-gray-400">
              / 5
            </span>
          </div>

          {/* Details */}
          <div className="mt-5 space-y-3">

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">
                Used for
              </span>

              <span className="rounded-md bg-gray-100 px-2.5 py-1 text-sm font-medium text-gray-700">
                {DataCard.usedFor}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">
                Type
              </span>

              <span className="text-sm font-medium text-gray-700">
                {DataCard.type}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">
                Popularity
              </span>

              <span className="text-sm font-medium text-gray-700">
                {DataCard.popularity}
              </span>
            </div>

          </div>
        </div>

        {/* Bottom Button */}
        <button
          onClick={HandleButtonClick}
          className={AddToStack ? "mt-6 w-full rounded-xl  px-4 py-3 text-sm font-semibold text-red-600 border border-red-600" : "mt-6 w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white "}
          disabled={AddToStack === true ? true : false}
        >

          {AddToStack === true ? "✓ Added to Stack" : " Add To Stack"}

        </button>

      </div>

    </div>
  )
}