import React, { useEffect, useState } from "react";
import { WordContext, Character, CharacterWordData, characters } from "../hooks/useWordStore";

const defaultWordData = { word: "    ", type: "skill", usedLetters: "" } as const

function useCharacterState(name: Character) {
  const [data, setData] = useState<CharacterWordData>(defaultWordData)
  useEffect(() => {
    const localStorageData = typeof window !== "undefined" && localStorage.getItem(name)
    const wordData: CharacterWordData = localStorageData ? JSON.parse(localStorageData) : defaultWordData;
    setData(wordData)
  }, [setData])
  return [data, setData] as const
}

export default function WordContextProvider({ children }: { children: React.ReactNode }) {
  const [joro, setJoro] = useCharacterState("joro")
  const [syn, setSyn] = useCharacterState("syn")
  const [maz, setMaz] = useCharacterState("maz")
  const [nix, setNix] = useCharacterState("nix")
  const setterMap = {
    joro: setJoro,
    syn: setSyn,
    maz: setMaz,
    nix: setNix,
  }

  const dataMap = {
    joro: joro,
    syn: syn,
    maz: maz,
    nix: nix,
  }

  const markLetterUsedFor = (letter: string, character: Character) => {
    const data = dataMap[character]
    const setter = setterMap[character]
    const newData = { ...data, usedLetters: data.usedLetters + letter }
    setter(newData)
    localStorage.setItem(character, JSON.stringify(newData))
  }

  const markLetterUnusedFor = (letter: string, character: Character) => {
    const data = dataMap[character]
    const setter = setterMap[character]
    const { usedLetters } = data
    const newData = { ...data, usedLetters: usedLetters.replaceAll(letter, "") }
    setter(newData)
    localStorage.setItem(character, JSON.stringify(newData))
  }

  const markLetterUsed = (letter: string) => {
    characters.forEach(c => markLetterUsedFor(letter, c))
  }

  const setWordFor = (word: string, character: Character) => {
    const data = dataMap[character]
    const setter = setterMap[character]
    const newData = { ...data, word: word }
    setter(newData)
    localStorage.setItem(character, JSON.stringify(newData))
  }

  const setNewWordFor = (data: CharacterWordData, character: Character) => {
    const setter = setterMap[character]
    const newData = { ...data }
    setter(newData)
    localStorage.setItem(character, JSON.stringify(newData))
  }

  const providerValue = {
    joro,
    syn,
    maz,
    nix,
    markLetterUsed,
    markLetterUsedFor,
    markLetterUnusedFor,
    setWordFor,
    setNewWordFor,
  }

  return <WordContext.Provider value={providerValue}>{children}</WordContext.Provider>
}