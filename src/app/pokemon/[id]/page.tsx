"use client";
import { useQuery } from "react-query";
import { requestPokemon } from "@/src/services/requestPokemon";
import Image from "next/image";
import { PokemonPerfil } from "@/src/components/PokemonPerfil/PokemonPerfil";
interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const { data, error, isLoading } = useQuery(["pokemon", params.id], () =>
    requestPokemon(params.id),
  );

  if (data) {
    return (
      <div className="flex flex-col p-2 items-center gap-4">
        <div className="flex items-center justify-center">
          <Image
            src={data.pokemon_v2_pokemonsprites[0].sprites.front_default}
            alt={data.name}
            width={100}
            height={100}
          />
          <h1 className="text-3xl font-bold">
            #{data.id} {data.name}
          </h1>
        </div>

        <PokemonPerfil
          urlImg={
            data.pokemon_v2_pokemonsprites[0].sprites.other["official-artwork"]
              .front_default
          }
          name={data.name}
          title={
            data.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesnames[0].genus
          }
          generation={data.pokemon_v2_pokemonspecy.pokemon_v2_generation.name}
          description={
            data.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0]
              .flavor_text
          }
          evolutions={data.pokemon_v2_pokemonspecy.pokemon_v2_pokemonevolutions}
          shape={data.pokemon_v2_pokemonspecy.pokemon_v2_pokemonshape.name}
          isBaby={data.pokemon_v2_pokemonspecy.is_baby}
          isMythical={data.pokemon_v2_pokemonspecy.is_mythical}
          isLegendary={data.pokemon_v2_pokemonspecy.is_legendary}
          types={data.pokemon_v2_pokemontypes}
        />

        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </div>
    );
  }
}
