"use client"
import { useQuery } from "@tanstack/react-query"
import { requestListGeneration } from "../../services/requestListGeneration"
import Link from "next/link"
import { LoadingPokemon } from "../LoadingPokemon/LoadingPokemon"

const regionMap: Record<number, string> = {
    1: "Kanto",
    2: "Johto",
    3: "Hoenn",
    4: "Sinnoh",
    5: "Unova",
    6: "Kalos",
    7: "Alola",
    8: "Galar",
    9: "Paldea",
}

export const GenerationGrid = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["generationListGrid"],
        queryFn: () => requestListGeneration(),
    })

    if (isLoading) return <div className="flex justify-center my-8"><LoadingPokemon load="pikachu" msg="Exploring regions..." fullScreen={false} /></div>
    if (error || !data) return null

    return (
        <section className="max-w-5xl w-full mx-auto my-12 px-4 pb-20">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-black theme-text uppercase tracking-wider">Browse by Generation</h2>
                <div className="flex-1 h-[2px] theme-bg-muted opacity-50 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {data.pokemon_v2_generation.map((generation: any) => (
                    <Link
                        key={generation.id}
                        href={`/generation/${generation.id}`}
                        className="group theme-bg-elevated p-8 rounded-3xl border border-white/5 hover:border-yellow-500/20 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute -top-4 -right-4 w-32 h-32 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-500">
                            <svg fill="currentColor" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zM50 8C73.2 8 92 26.8 92 50S73.2 92 50 92 8 73.2 8 50 26.8 8 50 8z" />
                                <path d="M50 40C44.5 40 40 44.5 40 50s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z" />
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <span className="text-sm font-bold text-yellow-500 uppercase opacity-60 mb-1 block">
                                {generation.name.split("-")[1].toUpperCase()}
                            </span>
                            <h3 className="text-4xl font-black mb-2 theme-text">{regionMap[generation.id] || "Region"}</h3>
                            <p className="text-lg theme-text-muted opacity-80 decoration-stone-100 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                                Explore Pokédex →
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
