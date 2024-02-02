import Image from "next/image";
import pikachuLoading from "../../public/pikachu-loading.gif";
import gastlyLoading from "../../public/gastly-loading.gif";

interface LoadingPokemonProps {
  load: "gastly" | "pikachu";
}

export const LoadingPokemon = (
  { load }: LoadingPokemonProps = { load: "pikachu" },
) => {
  const [loadImg, setLoadImg] = useState();
  if (load === "gastly") {
    setLoadImg(gastlyLoading);
  } else {
    setLoadImg(pikachuLoading);
  }

  return (
    <div className="flex flex-col items-center p-4 gap-4 bg-white rounded">
      <Image src={loadImg} alt="loading" width={200} height={200} />
    </div>
  );
};
