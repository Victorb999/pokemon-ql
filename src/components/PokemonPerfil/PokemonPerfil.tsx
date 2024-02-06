import {
  PokemonV2Pokemonevolution,
  PokemonV2Pokemontype,
} from "@/src/types/types";
import Image from "next/image";
import { LabelTypes } from "../LabelType/LabelType";

interface PokemonPerfilProps {
  urlImg: string;
  name: string;
  title: string;
  generation: string;
  description: string;
  evolutions: PokemonV2Pokemonevolution[];
  shape: string;
  isBaby?: boolean;
  isMythical?: boolean;
  isLegendary?: boolean;
  types: PokemonV2Pokemontype[];
}

export const PokemonPerfil = ({
  urlImg,
  name,
  title,
  generation,
  description,
  evolutions,
  shape,
  isBaby,
  isMythical,
  isLegendary,
  types,
}: PokemonPerfilProps) => {
  return (
    <div
      className={`flex flex-row p-2 gap-2 w-[90%]
      border-2 border-${types[0].pokemon_v2_type.name}
      bg-stone-900
      pattern`}
    >
      <Image src={urlImg} alt={name} width={200} height={200} />
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="text-xl capitalize">{generation}</h3>
        <p>{description}</p>

        {evolutions.map((evolution) => (
          <span key={evolution.id} className="text-md">
            Evolution: {evolution.pokemon_v2_evolutiontrigger.name}{" "}
            {evolution.min_level}
          </span>
        ))}

        <h3 className="text-md">Shape: {shape}</h3>

        {isBaby && <span>Baby</span>}
        {isLegendary && <span>Legendary</span>}

        {isMythical && <span>Mythical</span>}

        <div className="flex gap-2">
          {types.map((type) => (
            <LabelTypes key={type.id} name={type.pokemon_v2_type.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
