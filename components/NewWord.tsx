import React, { useState } from "react"

export default function NewWord({ setWord }: { setWord: (letterCount: number, type: "skill" | "memory") => void }) {
  const [count, setCount] = useState<number>(4)
  const [type, setType] = useState<"skill" | "memory">("memory")

  const submit = () => {
    if (!count) return
    setWord(count, type)
    setType("memory")
  }

  return <div className="flex gap-4 items-center">
    <input type="text" className="rounded w-10 text-black text-center" value={count} onChange={(e) => setCount(parseInt(e.target.value, 10))} />
    <label>
      <input type="checkbox" className="mr-1" value="skill" checked={type === "skill"} onChange={(e) => setType(e.target.checked ? "skill" : "memory")} />
      Skill?
    </label>
    <button className="bg-black border border-white border-1 rounded-lg p-1" onClick={submit}>New Word</button>
  </div>
}