export interface SelectedCardsProps {
    prop: string
}

export default function SelectedCards({ prop }: SelectedCardsProps) {
    
    return (
        <div className="border border-gray-200 rounded-2xl p-10 container mx-auto">
            <h1 className="font-bold">Your Stack</h1>
            <p className="text-[#94A3B8]">No technologies selected yet.</p>
            <p className="text-center text-[#94A3B8] m-8 py-7 border  border-dotted">Your stack is empty.</p>
        </div>
    )
}