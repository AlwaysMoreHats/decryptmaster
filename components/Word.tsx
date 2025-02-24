"use client"

import React from 'react'
import classnames from 'classnames'
import Letter from './Letter'

export default function Word({ word, setWord, type }: { word: string, setWord: (word: string) => void, type: "skill" | "memory" }) {
  const updateWord = (index: number) => (letter: string) => {
    console.log(index, letter)
    const newWord = word.split("")
    newWord[index] = letter
    setWord(newWord.join(""))
  }
  return (
    <div className={classnames("flex group gap-1", type, { "gap-0": word.length > 8, "[&>*]:ml-[-2px]": word.length >= 10 })}>
      {word.split("").map((letter, index) => <Letter letter={letter === "." ? undefined : letter} setLetter={updateWord(index)} key={index} />)}
    </div>
  )
}