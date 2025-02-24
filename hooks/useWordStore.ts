import React, { useContext } from "react";

export const characters = ["joro", "syn", "maz", "nix"] as const
export type Character = typeof characters[number]
export type WordType = "skill" | "memory"
export type CharacterWordData = { word: string; type: WordType; usedLetters: string; }

export type WordStore = {
  joro: CharacterWordData,
  syn: CharacterWordData,
  maz: CharacterWordData,
  nix: CharacterWordData,
  markLetterUsed: (letter: string) => void,
  markLetterUsedFor: (letter: string, character: Character) => void,
  markLetterUnusedFor: (letter: string, character: Character) => void,
  setWordFor: (word: string, character: Character) => void,
  setNewWordFor: (data: CharacterWordData, character: Character) => void,
}

const initialData: WordStore = {
  joro: { word: "    ", type: "skill", usedLetters: "" },
  syn: { word: "    ", type: "skill", usedLetters: "" },
  maz: { word: "    ", type: "skill", usedLetters: "" },
  nix: { word: "    ", type: "skill", usedLetters: "" },
  markLetterUsed: (letter: string) => { },
  markLetterUsedFor: (letter: string, character: Character) => { },
  markLetterUnusedFor: (letter: string, character: Character) => { },
  setWordFor: (word: string, character: Character) => { },
  setNewWordFor: (data: CharacterWordData, character: Character) => { },
}

export const WordContext = React.createContext(initialData);

export default function useWordStore() { return useContext(WordContext) }
export function useCharacterWordData(name: Character) { return useContext(WordContext)[name] }
export function useMarkLetterUsed() { return useContext(WordContext).markLetterUsed }
export function useMarkLetterUsedFor() { return useContext(WordContext).markLetterUsedFor }
export function useMarkLetterUnusedFor() { return useContext(WordContext).markLetterUnusedFor }
export function useSetWordFor() { return useContext(WordContext).setWordFor }
export function useSetNewWordFor() { return useContext(WordContext).setNewWordFor }