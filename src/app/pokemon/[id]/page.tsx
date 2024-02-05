"use client";
import { useQuery } from "react-query";
import { requestPokemon } from "@/src/services/requestPokemon";
interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const { data, error, isLoading } = useQuery(["pokemon", params.id], () =>
    requestPokemon(params.id),
  );
  return (
    <div>
      <h1>POKEMON {params.id}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
