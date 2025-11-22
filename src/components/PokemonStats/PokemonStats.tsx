import { PokemonV2Pokemonstat } from "@/src/types/types"

interface PokemonStatsProps {
  stats: PokemonV2Pokemonstat[]
  color: string
}

export const PokemonStats = ({ stats, color }: PokemonStatsProps) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-[400px]">
      <h2 className="text-xl font-bold mb-2">Base Stats</h2>
      <div className="flex flex-col gap-3">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col">
            <div className="flex justify-between text-sm uppercase font-bold ">
              <span>{stat.pokemon_v2_stat.name}</span>
              <span>{stat.base_stat}</span>
            </div>
            <div className="w-full bg-stone-700 rounded-full h-2.5">
              <div
                className={`${color} h-2.5 rounded-full`}
                style={{ width: `${(stat.base_stat / 250) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
