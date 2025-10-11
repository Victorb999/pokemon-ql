interface LabelTypesProps {
  name: string
}
export const LabelTypes = ({ name }: LabelTypesProps) => {
  return (
    <span
      key={name}
      className={`text-sm rounded ${name}
              p-1 px-2 mb-1 flex justify-center items-center
              shadow-md
              ${
                name === "dark" || name === "dragon"
                  ? "text-stone-200"
                  : "text-stone-900"
              }`}
    >
      {name}
    </span>
  )
}
