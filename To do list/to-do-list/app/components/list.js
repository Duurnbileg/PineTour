export default function List(inputValue) {
    return (
        <div className="p-4">
            <div>
                <div>
                    <input type="checkbox"></input>
                    <p>{inputValue}</p>
                </div>
            </div>
        </div>
    )
}