export default function List({ inputValue }) {
    return (
        <div className="p-2 flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <input type="checkbox" className="h-[16px] w-[16px]"></input>
                <label>{inputValue}</label>
            </div>
            <button className="px-3 py-2 bg-red-200 text-red-500 text-lg rounded-md" onClick={((alert) => (handleClick))}>Delete</button>
        </div>
    )
}