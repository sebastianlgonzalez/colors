import React, { useState, useRef } from "react"
import { IoIosReturnLeft } from "react-icons/io"

function PromptInput({ handleSubmit }) {
  const [inputValue, setInputValue] = useState("")
  const buttonRef = useRef(null)

  const handleActiveAnimation = () => {
    buttonRef.current.setAttribute("data-active", "true")
    setTimeout(() => {
      buttonRef.current.setAttribute("data-active", "false")
    }, 100)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const input = e.target.elements.input.value.trim()
    handleActiveAnimation()
    handleSubmit(input)
  }

  return (
    <form
      onSubmit={onSubmit}
      className="m-auto flex h-fit w-[500px] rounded-full"
    >
      <input
        name="input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="h-10 flex-grow rounded-l-full border-2 border-neutral-300 pl-3 text-neutral-700 focus:z-10 focus:border-neutral-400 focus:outline-none"
        placeholder="Enter text to generate colors..."
      />
      <button
        ref={buttonRef}
        type="submit"
        className="ml-[-2px] flex h-10 w-14 items-center rounded-r-full border-2 border-neutral-300 hover:bg-neutral-100 focus-visible:border-neutral-400 focus-visible:bg-neutral-100 focus-visible:outline-none data-[active=true]:bg-neutral-200"
      >
        <IoIosReturnLeft
          color="#404040"
          className="ml-[9px]"
          size={27}
          strokeWidth={2}
        />
      </button>
    </form>
  )
}

export default PromptInput
