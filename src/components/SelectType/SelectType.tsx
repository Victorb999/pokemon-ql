import { useAtom } from "jotai"
import { useQuery } from "react-query"
import { typeIdAtom } from "../../store/store"
import { requestListType } from "../../services/requestListType"
import { TypeList } from "../../types/types"

interface ListTypeProps {
  data: { pokemon_v2_Type: TypeList[] }
}

export const SelectType = () => {
  const [typeId, setTypeId] = useAtom(typeIdAtom)
  const { data } = useQuery(["TypeList"], () => requestListType())
  return (
    <div className="flex gap-2 justify-center items-center">
      <label htmlFor="type">Type:</label>
      <select
        name="type"
        id="type"
        className="bg-stone-800 p-2 rounded uppercase"
        onChange={(e) => setTypeId(e.target.value)}
        value={typeId}
      >
        {data &&
          data.pokemon_v2_type.map((type: TypeList) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
      </select>
    </div>
  )
}
