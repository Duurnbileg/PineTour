"use client"
import { useState } from "react";
import Step1 from "./features/step1";
import Step2 from "./features/step2";
import Step3 from "./features/step3";


export default function Home() {
  const [step, setStep] = useState(1)

  const handleNextStep = () => setStep(step + 1)
  const handleBackStep = () => setStep(step - 1)

  return (
    <main className="bg-[#f4f4f4] flex items-center justify-center h-dvh">
      <Step1 />
      <Step2 />
      <Step3 />
    </main>
  )
}
