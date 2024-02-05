"use client";
import { useQuery } from "react-query";
import { requestPokemon } from "@/src/services/requestPokemon";
import Image from "next/image";
interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const { data, error, isLoading } = useQuery(["pokemon", params.id], () =>
    requestPokemon(params.id),
  );

  if (data) {
    return (
      <div className="flex flex-col p-2">
        <div className="flex items-center">
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
        <Image
          src={
            data.pokemon_v2_pokemonsprites[0].sprites.other?.[
              "official-artwork"
            ].front_default
          }
          alt={data.name}
          width={200}
          height={200}
        />
        <h3>
          {data.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesnames[0].genus}
        </h3>
        <h3>
          {
            data.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0]
              .flavor_text
          }
        </h3>

        {data.pokemon_v2_pokemonspecy.pokemon_v2_pokemonevolutions.map(
          (evolution) => (
            <span key={evolution.id}>
              {evolution.min_level} {evolution.pokemon_v2_evolutiontrigger.name}
            </span>
          ),
        )}

        <h3>{data.pokemon_v2_pokemonspecy.pokemon_v2_pokemonshape.name}</h3>

        {data.pokemon_v2_pokemonspecy.is_baby && <span>Baby</span>}
        {data.pokemon_v2_pokemonspecy.is_legendary && <span>Legendary</span>}

        {data.pokemon_v2_pokemonspecy.is_mithical && <span>Mithical</span>}

        {data.pokemon_v2_pokemontypes.map((type) => (
          <span key={type.pokemon_v2_type.id}>{type.pokemon_v2_type.name}</span>
        ))}

        <pre>{JSON.stringify(data.pokemon_v2_pokemonspecy, null, 2)}</pre>
      </div>
    );
  }
}
