import Input from "@/app/components/input";
import Button from "@/app/components/button";

export default function Step1() {
    return (
        <div className="bg-white h-[650px] w-[480px] rounded-xl p-8 flex flex-col justify-between">
            <div className="bg-white rounded-xl flex flex-col gap-7">
                <div className="flex flex-col gap-1">
                    <img src="/logo.svg" alt="" className="h-[60px] w-[60px]" />
                    <h1 className="text-black text-[26px] font-semibold">Join Us! 😎</h1>
                    <p className="text-gray-500 font-medium text-lg">Please provide all current information accurately.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <Input />
                    <Input />
                    <Input />
                </div>
            </div>
            <Button />
        </div>
    )
}
