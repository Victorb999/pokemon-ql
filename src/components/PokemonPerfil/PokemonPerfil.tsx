import {
  PokemonV2Pokemonevolution,
  PokemonV2Pokemontype,
} from "@/src/types/types";
import Image from "next/image";

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
      className={`flex flex-row p-2 gap-2 w-[90%] ${types[0].pokemon_v2_type.name} pattern`}
    >
      <Image src={urlImg} alt={name} width={200} height={200} />
      <div>
        <h1>{title}</h1>
        <h3>{generation}</h3>
        <h3>{description}</h3>

        {evolutions.map((evolution) => (
          <span key={evolution.id}>
            {evolution.pokemon_v2_evolutiontrigger.name} {evolution.min_level}
          </span>
        ))}

        <h3>{shape}</h3>

        {isBaby && <span>Baby</span>}
        {isLegendary && <span>Legendary</span>}

        {isMythical && <span>Mythical</span>}

        {types.map((type) => (
          <span key={type.id}>{type.pokemon_v2_type.name}</span>
        ))}
      </div>
    </div>
  );
};
