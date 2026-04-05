"use client"
import { PokemonV2Pokemonmfe } from "@/src/types/types"
import { useState } from "react"
import { LabelTypes } from "../LabelType/LabelType"

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
                            className={`text-xs uppercase font-bold 
                            hover:bg-stone-500 text-stone-700 px-3 py-1.5 
                            rounded-full transition-colors cursor-pointer
                            type-${moveData.pokemon_v2_move.pokemon_v2_type.name}`}
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
                        className={`theme-bg-surface rounded-lg max-w-sm w-full p-6 shadow-2xl border-2 theme-border relative flex flex-col gap-5`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedMove(null)}
                            className="absolute top-3 right-4 text-stone-400 hover:text-white text-2xl font-bold leading-none"
                        >
                            &times;
                        </button>

                        <h3 className="text-2xl font-black  capitalize border-b-2 theme-border pb-3">
                            {selectedMove.pokemon_v2_move.name.replace(/-/g, " ")}
                        </h3>

                        <div className="flex justify-around theme-bg-elevated rounded p-3 gap-4">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-[10px] theme-text-muted uppercase tracking-widest">Type</span>
                                <LabelTypes name={selectedMove.pokemon_v2_move.pokemon_v2_type.name} upper />
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-[10px] theme-text-muted uppercase tracking-widest">Category</span>
                                <span className="text-sm font-bold uppercase px-2 py-1 rounded theme-bg-muted theme-text">
                                    {selectedMove.pokemon_v2_move.pokemon_v2_movedamageclass.name}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <div className="flex flex-col items-center theme-bg-elevated p-3 rounded">
                                <span className="text-[10px] theme-text-muted uppercase tracking-widest mb-1">Power</span>
                                <span className="font-black text-xl">
                                    {selectedMove.pokemon_v2_move.power ?? "—"}
                                </span>
                            </div>
                            <div className="flex flex-col items-center theme-bg-elevated p-3 rounded">
                                <span className="text-[10px] theme-text-muted uppercase tracking-widest mb-1">Accuracy</span>
                                <span className="font-black text-xl">
                                    {selectedMove.pokemon_v2_move.accuracy != null
                                        ? `${selectedMove.pokemon_v2_move.accuracy}%`
                                        : "—"}
                                </span>
                            </div>
                            <div className="flex flex-col items-center theme-bg-elevated p-3 rounded">
                                <span className="text-[10px] theme-text-muted uppercase tracking-widest mb-1">PP</span>
                                <span className="font-black text-xl">
                                    {selectedMove.pokemon_v2_move.pp ?? "—"}
                                </span>
                            </div>
                        </div>
                        <div className="theme-bg-elevated p-3 rounded">
                            <p className="text-sm theme-text-muted leading-relaxed italic">
                                {selectedMove.pokemon_v2_move.pokemon_v2_moveflavortexts[0]
                                    ?.flavor_text.replace(/\f/g, " ") ||
                                    "No description available."}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
