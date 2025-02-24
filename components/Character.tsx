import React from "react"
import NewWord from "./NewWord"
import Word from "./Word"
import Keyboard from "./Keyboard"
import { Character, useCharacterWordData, useSetNewWordFor, useSetWordFor } from "../hooks/useWordStore"

export default function Character({ name }: { name: Character }) {
  const { word, type, usedLetters } = useCharacterWordData(name)
  const setWordFor = useSetWordFor();
  const setNewWordFor = useSetNewWordFor();
  return <div className="flex flex-col items-center gap-2">
    <NewWord setWord={(count, wordType) => {
      setNewWordFor({
        word: " ".repeat(count),
        type: wordType,
        usedLetters: "",
      }, name)
    }} />
    <div className="flex gap-2">{name.toLocaleUpperCase().split("").map((letter, index) => <NameLetter letter={letter} key={index} />)}</div>
    <Word word={word} setWord={(word) => setWordFor(word, name)} type={type} />
    <Keyboard character={name} usedLetters={usedLetters} />
  </div>
}

function NameLetter({ letter }: { letter: string }) {
  return <div className="border-[3px] size-12 background-black border border-white text-2xl bg-black rounded-lg flex items-center justify-center font-bold">
    {letter}
  </div>
}