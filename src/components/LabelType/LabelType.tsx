import Link from "next/link"

interface LabelTypesProps {
  name: string
  id?: number | string
  upper?: boolean
}
export const LabelTypes = ({ name, id, upper = false }: LabelTypesProps) => {
  const classes = `text-sm rounded type-${name}
              p-1 px-2 mb-1 flex justify-center items-center
              shadow-md font-bold transition-opacity hover:opacity-80
              ${["dark", "dragon", "ghost", "poison", "fighting", "shadow"].includes(name)
      ? "text-stone-100"
      : "text-stone-900"
    }`

  if (id) {
    return (
      <Link href={`/type/${id}`} className={classes}>
        {upper ? name.toLocaleUpperCase() : name}
      </Link>
    )
  }

  return (
    <span className={classes}>
      {upper ? name.toLocaleUpperCase() : name}
    </span>
  )
}
