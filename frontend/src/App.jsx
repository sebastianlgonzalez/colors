import React, { useState } from "react"
import PromptInput from "./components/PromptInput"

export default function App() {
  //const [isSubmitted, setIsSubmitted] = useState(false)
  const [input, setInput] = useState("")

  const handleSubmit = async (input) => {
    setInput(input)
    console.log(input)
    try {
      const response = await fetch("http://localhost:5000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      })
      if (!response.ok) {
        throw new Error("Failed to fetch")
      }
      const data = await response.json()
      console.log("Response:", data)
    } catch (error) {
      console.error("Error:", error.message)
    }
  }

  return (
    <main className="flex h-screen w-full flex-col">
      <div className="m-auto flex flex-col">
        <PromptInput handleSubmit={handleSubmit} />
      </div>
    </main>
  )
}
