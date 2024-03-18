import React, { useState } from "react"
import { IoIosReturnLeft } from "react-icons/io"
export default function App() {
  const [inputValue, setInputValue] = useState("")
  return (
    <main className="flex h-screen w-full items-center">
      <div className="mx-auto flex h-fit w-[500px]">
        <input
          className="h-10 flex-grow rounded-l-full border-2 pl-3 focus:z-10 focus:border-slate-500 focus:outline-none"
          placeholder="Enter text to generate colors..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button
          onClick={() => {
            console.log(inputValue)
          }}
          className="ml-[-2px] flex h-10 w-14 items-center rounded-r-full border-2 focus:border-slate-500 focus:outline-none"
        >
          <IoIosReturnLeft
            color="black"
            className="ml-[7px]"
            size={30}
            strokeWidth={10}
          />
        </button>
      </div>
    </main>
  )
}
