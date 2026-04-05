interface LabelTypesProps {
  name: string,
  upper?: boolean
}
export const LabelTypes = ({ name, upper = false }: LabelTypesProps) => {
  return (
    <span
      key={name}
      className={`text-sm rounded type-${name}
              p-1 px-2 mb-1 flex justify-center items-center
              shadow-md font-bold
              ${["dark", "dragon", "ghost", "poison", "fighting", "shadow"].includes(name)
          ? "text-stone-100"
          : "text-stone-900"
        }`}
    >
      {upper ? name.toLocaleUpperCase() : name}
    </span>
  )
}
