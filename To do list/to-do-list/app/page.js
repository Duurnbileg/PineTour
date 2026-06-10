"use client";
import { useState } from "react";
import List from "./components/list";

export default function Home() {
  const [inputValue, setinputValue] = useState("")
  const [savedInput, setsavedInput] = useState([])
  const [number, setnumber] = useState(0)

  console.log(savedInput);

  const inputAdd = () => {
    setnumber(number + 1)
    setsavedInput([...savedInput, inputValue])
  }

  const [select, setselect] = useState("All");
  const handleAll = (newStyle) => {
    setselect(newStyle);
  };



  return (
    <div className="w-full min-h-screen flex justify-center pt-12 bg-gray-100">
      <div className="h-fit  bg-white rounded-xl p-6 shadow-md mt-15 flex flex-col gap-10 ">
        <div className="flex flex-col gap-5">
          <h1 className="text-center font-semibold text-2xl text-[black] ">
            To-Do list
          </h1>
          <div className="flex flex-col mt-4">
            <div className="flex gap-2 mt-4">
              <input
                placeholder="Add a new task..."
                className="flex-1 w-[300px] border border-gray-300 rounded-md px-3 py-2 text-black"
                onChange={(event) => setinputValue(event.target.value)}
              />
              <button
                onClick={inputAdd}
                className="bg-blue-500 text-white px-6 rounded-md">
                Add
              </button>
            </div>
            <p className="text-black mt-1 px-4">{number} tasks</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handleAll("All")}
              className={` rounded-lg px-6 py-3 text-black ${select === "All" ? "bg-[#3C82F6] text-white" : "bg-gray-100 "
                }`}
            >
              All
            </button>

            <button
              onClick={() => handleAll("Active")}
              className={` rounded-lg px-6 py-3 text-black ${select === "Active" ? "bg-[#3C82F6] text-white" : "bg-gray-100 "
                }`}
            >
              Active
            </button>

            <button
              onClick={() => handleAll("Completed")}
              className={` rounded-lg px-6 py-3 text-black ${select === "Completed" ? "bg-[#3C82F6] text-white" : "bg-gray-100 "
                } `}
            >
              Completed
            </button>
          </div>
            <List />
          <p className="text-center text-gray-500 mt-8">
            No tasks yet. Add one above!
          </p>
        </div>
        <div className="flex gap-2 justify-center text-center text-gray-500 flex-row mb-6">
          <p>Powered by</p>
          <a href="https://talent.pinebaatars.mn/" className="text-blue-500">
            Pinecone academy
          </a>
        </div>
      </div>
    </div>
  );
  ``
}
