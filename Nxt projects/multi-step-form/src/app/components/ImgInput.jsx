export default function ImgInput({ placeholder, onChange, error }) {
    return (
        <div className="flex flex-col gap-1">
            <p className="text-black text-sm font-semibold">{placeholder} <span className="text-red-500 text-sm">*</span></p>
            <input
                type="file"
                accept="image/*"
                onChange={onChange}
                className={`bg-gray-100 rounded-md p-4 text-black file:mr-4 file:rounded-md file:border-0 file:bg-black file:px-4 file:py-2 file:text-white ${error ? "border border-red-500" : "border border-transparent"}`}
            />
            {error && (
                <p className="text-red-500 text-sm border-red-200 pl-2">{error}</p>
            )}
        </div>
    )
}
