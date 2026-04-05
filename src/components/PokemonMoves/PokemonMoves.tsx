"use client"
import { PokemonV2Pokemonmfe } from "@/src/types/types"
import { useState } from "react"

interface PokemonMovesProps {
    moves: PokemonV2Pokemonmfe[]
    color: string
}

export const PokemonMoves = ({ moves, color }: PokemonMovesProps) => {
    const [selectedMove, setSelectedMove] = useState<PokemonV2Pokemonmfe | null>(null)

    return (
        <div
            className={`flex flex-col
        justify-center items-center
        p-4 gap-4 w-[90%]`}
        >
            <h2 className="text-2xl font-bold">Moves</h2>

            <div className="flex flex-wrap gap-2 justify-center">
                {moves.map((moveData) => {
                    const move = moveData.pokemon_v2_move
                    return (
                        <button
                            key={moveData.move_id}
                            onClick={() => setSelectedMove(moveData)}
                            className="text-xs uppercase font-bold bg-stone-700 hover:bg-stone-500 text-stone-200 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                        >
                            {move.name.replace(/-/g, " ")}
                        </button>
                    )
                })}
            </div>

            {selectedMove && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                    onClick={() => setSelectedMove(null)}
                >
                    <div
                        className={`bg-stone-900 rounded-lg max-w-sm w-full p-6 shadow-2xl border-2 border-stone-700 relative flex flex-col gap-5`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedMove(null)}
                            className="absolute top-3 right-4 text-stone-400 hover:text-white text-2xl font-bold leading-none"
                        >
                            &times;
                        </button>

                        <h3 className="text-2xl font-black capitalize border-b-2 border-stone-700 pb-3">
                            {selectedMove.pokemon_v2_move.name.replace(/-/g, " ")}
                        </h3>

                        <div className="flex justify-around bg-stone-800 rounded p-3 gap-4">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-[10px] text-stone-400 uppercase tracking-widest">Type</span>
                                <span className={`text-sm font-bold uppercase px-2 py-1 rounded bg-stone-700 text-stone-900 ${selectedMove.pokemon_v2_move.pokemon_v2_type.name}`}>
                                    {selectedMove.pokemon_v2_move.pokemon_v2_type.name}
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-[10px] text-stone-400 uppercase tracking-widest">Category</span>
                                <span className="text-sm font-bold uppercase px-2 py-1 rounded bg-stone-700 text-stone-200">
                                    {selectedMove.pokemon_v2_move.pokemon_v2_movedamageclass.name}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <div className="flex flex-col items-center bg-stone-800 p-3 rounded">
                                <span className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Power</span>
                                <span className="font-black text-xl">
                                    {selectedMove.pokemon_v2_move.power ?? "—"}
                                </span>
                            </div>
                            <div className="flex flex-col items-center bg-stone-800 p-3 rounded">
                                <span className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Accuracy</span>
                                <span className="font-black text-xl">
                                    {selectedMove.pokemon_v2_move.accuracy != null
                                        ? `${selectedMove.pokemon_v2_move.accuracy}%`
                                        : "—"}
                                </span>
                            </div>
                            <div className="flex flex-col items-center bg-stone-800 p-3 rounded">
                                <span className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">PP</span>
                                <span className="font-black text-xl">
                                    {selectedMove.pokemon_v2_move.pp ?? "—"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
