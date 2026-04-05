import { useAtom } from "jotai"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { typeIdAtom } from "../../store/store"
import { requestListType } from "../../services/requestListType"
import { TypeList } from "../../types/types"

interface ListTypeProps {
  data: { pokemon_v2_Type: TypeList[] }
}

export const SelectType = () => {
  const [typeId, setTypeId] = useAtom(typeIdAtom)
  const router = useRouter()
  const { data } = useQuery({ queryKey: ["TypeList"], queryFn: () => requestListType() })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value
    setTypeId(newId)
    router.push(`/type/${newId}`)
  }

  return (
    <div className="flex gap-2 justify-center items-center">
      <label htmlFor="type">Type:</label>
      <select
        name="type"
        id="type"
        className="theme-bg-elevated p-2 rounded uppercase"
        onChange={handleChange}
        value={typeId}
      >
        {data &&
          <>
            <option value="" disabled>
              Select a type
            </option>
            {data.pokemon_v2_type.map((type: TypeList) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </>}
      </select>
    </div>
  )
}
