"use client";
import React, { useEffect, useState } from 'react'

export default function Letter({ letter, setLetter }: { letter?: string, setLetter: (letter: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const displayLetter = letter || ""

  useEffect(() => {
    const addLetter = (event: KeyboardEvent) => {
      if (!isOpen) return
      setLetter(event.key.toLocaleUpperCase())
      setIsOpen(false)
    };

    document.addEventListener("keypress", addLetter)
    return () => document.removeEventListener("keypress", addLetter)
  }, [isOpen, setIsOpen])

  return <button className="relative border-2 h-24 w-10 background-black border-white text-3xl text-center bg-black rounded-lg group-[.skill]:bg-white group-[.skill]:border-black group-[.skill]:text-black" onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <div className="absolute h-8 w-[2px] bg-white group-[.skill]:bg-black bottom-8 ml-[-1px] left-1/2" /> : displayLetter}
    <div className="absolute h-1 bg-white group-[.skill]:bg-black bottom-5 left-2 right-2" />
  </button >
}