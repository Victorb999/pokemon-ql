import { atom, createStore } from "jotai"

export const myStore = createStore()

export const generationIdAtom = atom("")

export const typeIdAtom = atom("")

export const themeAtom = atom<"dark" | "light">("dark")
