import { useAtom } from "jotai";
import { useQuery } from "react-query";
import { generationIdAtom } from "../../store/store";
import { requestListGeneration } from "../../services/requestListGeneration";
import { GenerationList } from "../../types/types";

interface ListGenerationProps {
  data: { pokemon_v2_generation: GenerationList[] };
}

export const SelectGeneration = () => {
  const [generationId, setGenerationId] = useAtom(generationIdAtom);
  const { data } = useQuery(["generationList"], () => requestListGeneration());

  return (
    <div className="flex gap-2 justify-center items-center">
      <label htmlFor="generation">Generation:</label>
      <select
        name="generation"
        id="generation"
        className="bg-amber-200 p-2 rounded uppercase"
        onChange={(e) => setGenerationId(e.target.value)}
        defaultValue={generationId}
      >
        {data &&
          data.pokemon_v2_generation.map((generation: GenerationList) => (
            <option key={generation.id} value={generation.id}>
              {generation.name}
            </option>
          ))}
      </select>
    </div>
  );
};
