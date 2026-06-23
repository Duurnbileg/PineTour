export default function Input({ inputType, placeholder }) {
    return (
        <div className="flex flex-col gap-1">
            <p className="text-black text-sm font-semibold">First name <span className="text-red-500 text-sm">*</span></p>
            <input
                type={inputType}
                placeholder={placeholder}
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-black font-medium"
            />
        </div>
    )
}