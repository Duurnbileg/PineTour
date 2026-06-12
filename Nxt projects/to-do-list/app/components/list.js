export default function List({ savedInput }) {
    return (
        <div className="p-2 flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <input
                    type="checkbox"
                    className="h-4 w-4"
                />
                <label className="text-black text-base">{savedInput}</label>
            </div>
            <button className="px-4 py-2 bg-red-200 text-red-500 rounded-md">Delete</button>
        </div>
    )
}