import Image from "next/image"
import pikachuLoading from "../../public/pikachu-loading.gif"
import gastlyLoading from "../../public/gastly-loading.gif"

interface LoadingPokemonProps {
  load: "gastly" | "pikachu"
  msg?: string
}

export const LoadingPokemon = ({ load, msg }: LoadingPokemonProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-[100dvh]">
      <div
        className="p-4 gap-4 rounded bg-white border border-stone-300 
      shadow-lg flex flex-col items-center justify-center"
      >
        <Image
          src={load === "gastly" ? gastlyLoading : pikachuLoading}
          alt="loading"
          width={200}
          height={200}
        />
        <p>{msg}</p>
      </div>
    </div>
  )
}
