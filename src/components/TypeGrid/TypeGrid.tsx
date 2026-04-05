"use client"
import { useQuery } from "@tanstack/react-query"
import { requestListType } from "../../services/requestListType"
import { LabelTypes } from "../LabelType/LabelType"
import { LoadingPokemon } from "../LoadingPokemon/LoadingPokemon"

export const TypeGrid = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["typeList"],
        queryFn: () => requestListType(),
    })

    if (isLoading) return <div className="flex justify-center my-8"><LoadingPokemon load="gastly" msg="Fetching types..." fullScreen={false} /></div>
    if (error || !data) return null

    // Filter out unknown and shadow if they are empty or not relevant (usually id 10001, 10002)
    const types = data.pokemon_v2_type.filter((t: any) => t.id < 1000)

    return (
        <section className="max-w-5xl w-full mx-auto my-12 px-4">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-black theme-text uppercase tracking-wider">Browse by Type</h2>
                <div className="flex-1 h-[2px] theme-bg-muted opacity-50 rounded-full" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {types.map((type: any) => (
                    <div key={type.id} className="group hover:-translate-y-1 transition-transform duration-300">
                        <LabelTypes name={type.name} id={type.id} upper={true} />
                    </div>
                ))}
            </div>
        </section>
    )
}
