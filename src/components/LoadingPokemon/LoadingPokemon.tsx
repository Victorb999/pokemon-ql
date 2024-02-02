import { useState } from "react";
import Image from "next/image";
import pikachuLoading from "../../public/pikachu-loading.gif";
import gastlyLoading from "../../public/gastly-loading.gif";

interface LoadingPokemonProps {
  load: "gastly" | "pikachu";
}

export const LoadingPokemon = (
  { load }: LoadingPokemonProps = { load: "pikachu" },
) => {
  const [loadImg, setLoadImg] = useState(pikachuLoading);

  if (load === "gastly") {
    setLoadImg(gastlyLoading);
  }

  return (
    <div className="flex  items-center  justify-center p-4 gap-4 bg-white rounded h-[100dvh]">
      <Image src={loadImg} alt="loading" width={200} height={200} />
    </div>
  );
};
