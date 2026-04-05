"use client"
import { PokemonV2Pokemonstat } from "@/src/types/types"
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts"

interface PokemonRadarChartProps {
    stats: PokemonV2Pokemonstat[]
    color: string
}

const typeColors: Record<string, string> = {
    normal: "#d3d3af",
    fighting: "#d56723",
    flying: "#a1d1f8",
    poison: "#7fa8c9",
    ground: "#7c7e29",
    rock: "#a38c21",
    bug: "#729f3f",
    ghost: "#7b62a3",
    steel: "#9eb7b8",
    fire: "#fd7d24",
    water: "#4592c4",
    grass: "#9bcc50",
    electric: "#eed535",
    psychic: "#f366b9",
    ice: "#51c4e7",
    dragon: "#3d167c",
    dark: "#303030",
    fairy: "#fdb9e9",
    unknown: "#000",
    shadow: "#333",
}

const formatStatName = (name: string) => {
    const statMap: Record<string, string> = {
        hp: "HP",
        attack: "ATK",
        defense: "DEF",
        "special-attack": "SP.ATK",
        "special-defense": "SP.DEF",
        speed: "SPD",
    }
    return statMap[name] || name.toUpperCase()
}

export const PokemonRadarChart = ({ stats, color }: PokemonRadarChartProps) => {
    const chartData = stats.map((stat) => ({
        subject: formatStatName(stat.pokemon_v2_stat.name),
        value: stat.base_stat,
        fullMark: 250,
    }))

    const hexColor = typeColors[color] || "#ca8a04"

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-stone-800 p-2 border border-stone-600 rounded">
                    <p className="text-white font-bold">{`${payload[0].payload.subject}: ${payload[0].value}`}</p>
                </div>
            )
        }
        return null
    }

    return (
        <div className="flex flex-col gap-2 w-full max-w-[400px]">
            <h2 className="text-xl font-bold mb-2">Radar Stats</h2>

            <div className="w-full h-[250px] mb-4">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                        <PolarGrid stroke="#57534e" />
                        <PolarAngleAxis
                            dataKey="subject"
                            tick={{ fill: "#f5f5f4", fontSize: 12, fontWeight: "bold" }}
                        />
                        <PolarRadiusAxis angle={30} domain={[0, 250]} tick={false} axisLine={false} />
                        <Radar
                            name="Stats"
                            dataKey="value"
                            stroke={hexColor}
                            fill={hexColor}
                            fillOpacity={0.6}
                        />
                        <Tooltip content={<CustomTooltip />} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
