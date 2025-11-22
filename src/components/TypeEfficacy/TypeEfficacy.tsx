import { LabelTypes } from "../LabelType/LabelType"

interface EfficacyItem {
  damage_factor: number
  target_type_id: number
  pokemonV2TypeByTargetTypeId: {
    name: string
  }
}

interface TypeEfficacyProps {
  efficacy: EfficacyItem[]
}

export const TypeEfficacy = ({ efficacy }: TypeEfficacyProps) => {
  if (!efficacy || efficacy.length === 0) return null

  const advantages = efficacy.filter((e) => e.damage_factor === 200)
  const disadvantages = efficacy.filter((e) => e.damage_factor === 50)
  const noDamage = efficacy.filter((e) => e.damage_factor === 0)

  return (
    <div className="bg-stone-900 p-6 rounded-lg shadow-lg 
    text-white flex justify-center gap-6 mb-6">
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-green-400 border-b border-stone-700 pb-1">
          Vantagens (2x)
        </h3>
        <div className="flex flex-wrap gap-2">
          {advantages.length > 0 ? (
            advantages.map((item) => (
              <LabelTypes
                key={item.target_type_id}
                name={item.pokemonV2TypeByTargetTypeId.name}
              />
            ))
          ) : (
            <span className="text-stone-500 text-sm">Nenhuma</span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-bold text-yellow-400 border-b border-stone-700 pb-1">
          Desvantagens (0.5x)
        </h3>
        <div className="flex flex-wrap gap-2">
          {disadvantages.length > 0 ? (
            disadvantages.map((item) => (
              <LabelTypes
                key={item.target_type_id}
                name={item.pokemonV2TypeByTargetTypeId.name}
              />
            ))
          ) : (
            <span className="text-stone-500 text-sm">Nenhuma</span>
          )}
        </div>
      </div>

      {noDamage.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-red-400 border-b border-stone-700 pb-1">
            Sem Dano (0x)
          </h3>
          <div className="flex flex-wrap gap-2">
            {noDamage.map((item) => (
              <LabelTypes
                key={item.target_type_id}
                name={item.pokemonV2TypeByTargetTypeId.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
