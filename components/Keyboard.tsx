import React from 'react'
import classnames from 'classnames'
import useWordStore, { Character } from "../hooks/useWordStore";

const lettersArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")

export default function Keyboard({ character, usedLetters }: { character?: Character, usedLetters?: string }) {
  return <div className="grid grid-cols-9 gap-1">
    {lettersArray.map(letter => (<Letter key={letter} character={character} letter={letter} isUsed={!!usedLetters?.includes(letter)} />))}
  </div>
}

function Letter({ character, letter, isUsed }: { character?: Character, letter: string, isUsed: boolean }) {
  const { markLetterUsed, markLetterUsedFor, markLetterUnusedFor } = useWordStore()
  const onClick = () => {
    if (!character) {
      markLetterUsed(letter);
      return
    }

    if (isUsed) {
      markLetterUnusedFor(letter, character)
    } else {
      markLetterUsedFor(letter, character)
    }
  }
  return <button key={letter} onClick={onClick} className={classnames(
    "flex items-center size-7 border-1 font-bold border border-white rounded justify-center border-1 border-radius-lg border-white bg-black text-white",
    { 'bg-gray-700 border-gray-400 text-gray-400 font-normal': isUsed })
  }>
    {letter}
  </button>
}