import Image from "next/image"

interface LoadingPokemonProps {
  load: "gastly" | "pikachu"
  msg?: string
  fullScreen?: boolean
}

export const LoadingPokemon = ({ load, msg, fullScreen = true }: LoadingPokemonProps) => {
  return (
    <div className={`flex flex-col items-center justify-center ${fullScreen ? "h-[100dvh]" : "p-4"}`}>
      <div
        className="p-4 gap-4 rounded bg-stone-900/40 backdrop-blur-md border border-white/10 
      shadow-2xl flex flex-col items-center justify-center"
      >
        <Image
          src={load === "gastly" ? "/gastly-loading.gif" : "/pikachu-loading.gif"}
          alt="loading"
          width={200}
          height={200}
        />
        <p className="theme-text-muted font-bold animate-pulse">{msg}</p>
      </div>
    </div>
  )
}
