import { useAtom } from "jotai"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { generationIdAtom } from "../../store/store"
import { requestListGeneration } from "../../services/requestListGeneration"
import { GenerationList } from "../../types/types"

interface ListGenerationProps {
  data: { pokemon_v2_generation: GenerationList[] }
}

export const SelectGeneration = () => {
  const [generationId, setGenerationId] = useAtom(generationIdAtom)
  const router = useRouter()
  const { data } = useQuery({ queryKey: ["generationList"], queryFn: () => requestListGeneration() })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value
    setGenerationId(newId)
    router.push(`/generation/${newId}`)
  }

  return (
    <div className="flex gap-2 justify-center items-center">
      <label htmlFor="generation">Generation:</label>
      <select
        name="generation"
        id="generation"
        className="theme-bg-elevated p-2 rounded uppercase"
        onChange={handleChange}
        value={generationId}
      >
        {data && (
          <>
            <option value="" disabled>
              Select a generation
            </option>
            {data.pokemon_v2_generation.map((generation: GenerationList) => (
              <option key={generation.id} value={generation.id}>
                {generation.name}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  )
}
